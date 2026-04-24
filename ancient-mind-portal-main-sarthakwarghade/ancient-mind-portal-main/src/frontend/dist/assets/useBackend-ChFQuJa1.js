var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _a;
import { P as ProtocolError, T as TimeoutWaitingForResponseErrorCode, b as utf8ToBytes, E as ExternalError, M as MissingRootKeyErrorCode, C as Certificate, l as lookupResultToBuffer, R as RequestStatusResponseStatus, U as UnknownError, d as RequestStatusDoneNoReplyErrorCode, e as RejectError, f as CertifiedRejectErrorCode, g as UNREACHABLE_ERROR, I as InputError, h as InvalidReadStateRequestErrorCode, i as ReadRequestType, k as Principal, m as IDL, n as MissingCanisterIdErrorCode, H as HttpAgent, o as encode, Q as QueryResponseStatus, p as UncertifiedRejectErrorCode, q as isV3ResponseBody, s as isV2ResponseBody, t as UncertifiedRejectUpdateErrorCode, v as UnexpectedErrorCode, w as decode, S as Subscribable, x as pendingThenable, y as resolveEnabled, z as shallowEqualObjects, A as resolveStaleTime, B as noop, D as environmentManager, F as isValidTimeout, G as timeUntilStale, J as timeoutManager, K as focusManager, N as fetchState, O as replaceData, V as notifyManager, r as reactExports, W as shouldThrowError, X as useQueryClient, Y as useInternetIdentity, Z as createActorWithConfig, _ as Variant, $ as Record, a0 as Vec, a1 as Service, a2 as Func, a3 as Opt, a4 as Text, a5 as Null } from "./index-N514KH_G.js";
const FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
  let first = true;
  return async () => {
    if (first) {
      first = false;
      return true;
    }
    return false;
  };
}
function conditionalDelay(condition, timeInMsec) {
  return async (canisterId, requestId, status) => {
    if (await condition(canisterId, requestId, status)) {
      return new Promise((resolve) => setTimeout(resolve, timeInMsec));
    }
  };
}
function timeout(timeInMsec) {
  const end = Date.now() + timeInMsec;
  return async (_canisterId, requestId, status) => {
    if (Date.now() > end) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Request timed out after ${timeInMsec} msec`, requestId, status));
    }
  };
}
function backoff(startingThrottleInMsec, backoffFactor) {
  let currentThrottling = startingThrottleInMsec;
  return () => new Promise((resolve) => setTimeout(() => {
    currentThrottling *= backoffFactor;
    resolve();
  }, currentThrottling));
}
function chain(...strategies) {
  return async (canisterId, requestId, status) => {
    for (const a of strategies) {
      await a(canisterId, requestId, status);
    }
  };
}
const DEFAULT_POLLING_OPTIONS = {
  preSignReadStateRequest: false
};
function hasProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}
function isObjectWithProperty(value, property) {
  return value !== null && typeof value === "object" && hasProperty(value, property);
}
function hasFunction(value, property) {
  return hasProperty(value, property) && typeof value[property] === "function";
}
function isSignedReadStateRequestWithExpiry(value) {
  return isObjectWithProperty(value, "body") && isObjectWithProperty(value.body, "content") && value.body.content.request_type === ReadRequestType.ReadState && isObjectWithProperty(value.body.content, "ingress_expiry") && typeof value.body.content.ingress_expiry === "object" && value.body.content.ingress_expiry !== null && hasFunction(value.body.content.ingress_expiry, "toHash");
}
async function pollForResponse(agent, canisterId, requestId, options = {}) {
  const path = [utf8ToBytes("request_status"), requestId];
  let state;
  let currentRequest;
  const preSignReadStateRequest = options.preSignReadStateRequest ?? false;
  if (preSignReadStateRequest) {
    currentRequest = await constructRequest({
      paths: [path],
      agent,
      pollingOptions: options
    });
    state = await agent.readState(canisterId, { paths: [path] }, void 0, currentRequest);
  } else {
    state = await agent.readState(canisterId, { paths: [path] });
  }
  if (agent.rootKey == null) {
    throw ExternalError.fromCode(new MissingRootKeyErrorCode());
  }
  const cert = await Certificate.create({
    certificate: state.certificate,
    rootKey: agent.rootKey,
    canisterId,
    blsVerify: options.blsVerify,
    agent
  });
  const maybeBuf = lookupResultToBuffer(cert.lookup_path([...path, utf8ToBytes("status")]));
  let status;
  if (typeof maybeBuf === "undefined") {
    status = RequestStatusResponseStatus.Unknown;
  } else {
    status = new TextDecoder().decode(maybeBuf);
  }
  switch (status) {
    case RequestStatusResponseStatus.Replied: {
      return {
        reply: lookupResultToBuffer(cert.lookup_path([...path, "reply"])),
        certificate: cert
      };
    }
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing: {
      const strategy = options.strategy ?? defaultStrategy();
      await strategy(canisterId, requestId, status);
      return pollForResponse(agent, canisterId, requestId, {
        ...options,
        // Pass over either the strategy already provided or the new one created above
        strategy,
        request: currentRequest
      });
    }
    case RequestStatusResponseStatus.Rejected: {
      const rejectCode = new Uint8Array(lookupResultToBuffer(cert.lookup_path([...path, "reject_code"])))[0];
      const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(cert.lookup_path([...path, "reject_message"])));
      const errorCodeBuf = lookupResultToBuffer(cert.lookup_path([...path, "error_code"]));
      const errorCode = errorCodeBuf ? new TextDecoder().decode(errorCodeBuf) : void 0;
      throw RejectError.fromCode(new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, errorCode));
    }
    case RequestStatusResponseStatus.Done:
      throw UnknownError.fromCode(new RequestStatusDoneNoReplyErrorCode(requestId));
  }
  throw UNREACHABLE_ERROR;
}
async function constructRequest(options) {
  var _a2;
  const { paths, agent, pollingOptions } = options;
  if (pollingOptions.request && isSignedReadStateRequestWithExpiry(pollingOptions.request)) {
    return pollingOptions.request;
  }
  const request = await ((_a2 = agent.createReadStateRequest) == null ? void 0 : _a2.call(agent, {
    paths
  }, void 0));
  if (!isSignedReadStateRequestWithExpiry(request)) {
    throw InputError.fromCode(new InvalidReadStateRequestErrorCode(request));
  }
  return request;
}
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(actor) {
    return actor[metadataSymbol].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(actor) {
    return actor[metadataSymbol].service;
  }
  static canisterIdOf(actor) {
    return Principal.from(actor[metadataSymbol].config.canisterId);
  }
  static createActorClass(interfaceFactory, options) {
    const service = interfaceFactory({ IDL });
    class CanisterActor extends Actor {
      constructor(config) {
        if (!config.canisterId) {
          throw InputError.fromCode(new MissingCanisterIdErrorCode(config.canisterId));
        }
        const canisterId = typeof config.canisterId === "string" ? Principal.fromText(config.canisterId) : config.canisterId;
        super({
          config: {
            ...DEFAULT_ACTOR_CONFIG,
            ...config,
            canisterId
          },
          service
        });
        for (const [methodName, func] of service._fields) {
          if (options == null ? void 0 : options.httpDetails) {
            func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
          }
          if (options == null ? void 0 : options.certificate) {
            func.annotations.push(ACTOR_METHOD_WITH_CERTIFICATE);
          }
          this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
        }
      }
    }
    return CanisterActor;
  }
  /**
   * Creates an actor with the given interface factory and configuration.
   *
   * The [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package can be used to generate the interface factory for your canister.
   * @param interfaceFactory - the interface factory for the actor, typically generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package
   * @param configuration - the configuration for the actor
   * @returns an actor with the given interface factory and configuration
   * @example
   * Using the interface factory generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { Actor, HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { idlFactory } from './api/declarations/hello-world.did';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = Actor.createActor(idlFactory, {
   *   agent,
   *   canisterId,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   * @example
   * Using the `createActor` wrapper function generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { createActor } from './api/hello-world';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = createActor(canisterId, {
   *   agent,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   */
  static createActor(interfaceFactory, configuration) {
    if (!configuration.canisterId) {
      throw InputError.fromCode(new MissingCanisterIdErrorCode(configuration.canisterId));
    }
    return new (this.createActorClass(interfaceFactory))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(interfaceFactory, configuration) {
    return new (this.createActorClass(interfaceFactory, { httpDetails: true }))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(interfaceFactory, configuration, actorClassOptions = {
    httpDetails: true,
    certificate: true
  }) {
    return new (this.createActorClass(interfaceFactory, actorClassOptions))(configuration);
  }
  constructor(metadata) {
    this[metadataSymbol] = Object.freeze(metadata);
  }
}
function decodeReturnValue(types, msg) {
  const returnValues = decode(types, msg);
  switch (returnValues.length) {
    case 0:
      return void 0;
    case 1:
      return returnValues[0];
    default:
      return returnValues;
  }
}
const DEFAULT_ACTOR_CONFIG = {
  pollingOptions: DEFAULT_POLLING_OPTIONS
};
const ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
const ACTOR_METHOD_WITH_CERTIFICATE = "certificate";
function _createActorMethod(actor, methodName, func, blsVerify) {
  let caller;
  if (func.annotations.includes("query") || func.annotations.includes("composite_query")) {
    caller = async (options, ...args) => {
      var _a2, _b;
      options = {
        ...options,
        ...(_b = (_a2 = actor[metadataSymbol].config).queryTransform) == null ? void 0 : _b.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || new HttpAgent();
      const cid = Principal.from(options.canisterId || actor[metadataSymbol].config.canisterId);
      const arg = encode(func.argTypes, args);
      const result = await agent.query(cid, {
        methodName,
        arg,
        effectiveCanisterId: options.effectiveCanisterId
      });
      const httpDetails = {
        ...result.httpDetails,
        requestDetails: result.requestDetails
      };
      switch (result.status) {
        case QueryResponseStatus.Rejected: {
          const uncertifiedRejectErrorCode = new UncertifiedRejectErrorCode(result.requestId, result.reject_code, result.reject_message, result.error_code, result.signatures);
          uncertifiedRejectErrorCode.callContext = {
            canisterId: cid,
            methodName,
            httpDetails
          };
          throw RejectError.fromCode(uncertifiedRejectErrorCode);
        }
        case QueryResponseStatus.Replied:
          return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
            httpDetails,
            result: decodeReturnValue(func.retTypes, result.reply.arg)
          } : decodeReturnValue(func.retTypes, result.reply.arg);
      }
    };
  } else {
    caller = async (options, ...args) => {
      var _a2, _b;
      options = {
        ...options,
        ...(_b = (_a2 = actor[metadataSymbol].config).callTransform) == null ? void 0 : _b.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || HttpAgent.createSync();
      const { canisterId, effectiveCanisterId, pollingOptions } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const cid = Principal.from(canisterId);
      const ecid = effectiveCanisterId !== void 0 ? Principal.from(effectiveCanisterId) : cid;
      const arg = encode(func.argTypes, args);
      const { requestId, response, requestDetails } = await agent.call(cid, {
        methodName,
        arg,
        effectiveCanisterId: ecid,
        nonce: options.nonce
      });
      let reply;
      let certificate;
      if (isV3ResponseBody(response.body)) {
        if (agent.rootKey == null) {
          throw ExternalError.fromCode(new MissingRootKeyErrorCode());
        }
        const cert = response.body.certificate;
        certificate = await Certificate.create({
          certificate: cert,
          rootKey: agent.rootKey,
          canisterId: ecid,
          blsVerify,
          agent
        });
        const path = [utf8ToBytes("request_status"), requestId];
        const status = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "status"])));
        switch (status) {
          case "replied":
            reply = lookupResultToBuffer(certificate.lookup_path([...path, "reply"]));
            break;
          case "rejected": {
            const rejectCode = new Uint8Array(lookupResultToBuffer(certificate.lookup_path([...path, "reject_code"])))[0];
            const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "reject_message"])));
            const error_code_buf = lookupResultToBuffer(certificate.lookup_path([...path, "error_code"]));
            const error_code = error_code_buf ? new TextDecoder().decode(error_code_buf) : void 0;
            const certifiedRejectErrorCode = new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, error_code);
            certifiedRejectErrorCode.callContext = {
              canisterId: cid,
              methodName,
              httpDetails: response
            };
            throw RejectError.fromCode(certifiedRejectErrorCode);
          }
        }
      } else if (isV2ResponseBody(response.body)) {
        const { reject_code, reject_message, error_code } = response.body;
        const errorCode = new UncertifiedRejectUpdateErrorCode(requestId, reject_code, reject_message, error_code);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails: response
        };
        throw RejectError.fromCode(errorCode);
      }
      if (response.status === 202) {
        const pollOptions = {
          ...pollingOptions,
          blsVerify
        };
        const response2 = await pollForResponse(agent, ecid, requestId, pollOptions);
        certificate = response2.certificate;
        reply = response2.reply;
      }
      const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
      const shouldIncludeCertificate = func.annotations.includes(ACTOR_METHOD_WITH_CERTIFICATE);
      const httpDetails = { ...response, requestDetails };
      if (reply !== void 0) {
        if (shouldIncludeHttpDetails && shouldIncludeCertificate) {
          return {
            httpDetails,
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeCertificate) {
          return {
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeHttpDetails) {
          return {
            httpDetails,
            result: decodeReturnValue(func.retTypes, reply)
          };
        }
        return decodeReturnValue(func.retTypes, reply);
      } else {
        const errorCode = new UnexpectedErrorCode(`Call was returned undefined. We cannot determine if the call was successful or not. Return types: [${func.retTypes.map((t) => t.display()).join(",")}].`);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails
        };
        throw UnknownError.fromCode(errorCode);
      }
    };
  }
  const handler = (...args) => caller({}, ...args);
  handler.withOptions = (options) => (...args) => caller(options, ...args);
  return handler;
}
var QueryObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _QueryObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _QueryObserver_instances, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _QueryObserver_instances = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, updateStaleTimeout_fn = function() {
  __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout2 = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout2));
}, computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, updateTimers_fn = function() {
  __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
}, clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient) {
  var _a2, _b, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b = (_a2 = client.getDefaultOptions().queries) == null ? void 0 : _a2._experimental_beforeQuery) == null ? void 0 : _b.call(
    _a2,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
function hasAccessControl(actor) {
  return typeof actor === "object" && actor !== null && "_initializeAccessControl" in actor;
}
const ACTOR_QUERY_KEY = "actor";
function useActor(createActor2) {
  const { identity, isAuthenticated } = useInternetIdentity();
  const queryClient = useQueryClient();
  const actorQuery = useQuery({
    queryKey: [ACTOR_QUERY_KEY, identity == null ? void 0 : identity.getPrincipal().toString()],
    queryFn: async () => {
      if (!isAuthenticated) {
        return await createActorWithConfig(createActor2);
      }
      const actorOptions = {
        agentOptions: {
          identity
        }
      };
      const actor = await createActorWithConfig(createActor2, actorOptions);
      if (hasAccessControl(actor)) {
        await actor._initializeAccessControl();
      }
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Number.POSITIVE_INFINITY,
    // This will cause the actor to be recreated when the identity changes
    enabled: true
  });
  reactExports.useEffect(() => {
    if (actorQuery.data) {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
      queryClient.refetchQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
    }
  }, [actorQuery.data, queryClient]);
  return {
    actor: actorQuery.data || null,
    isFetching: actorQuery.isFetching
  };
}
var Dosha$1 = /* @__PURE__ */ ((Dosha2) => {
  Dosha2["Vata"] = "Vata";
  Dosha2["Pitta"] = "Pitta";
  Dosha2["Kapha"] = "Kapha";
  return Dosha2;
})(Dosha$1 || {});
var TechniqueCategory$1 = /* @__PURE__ */ ((TechniqueCategory2) => {
  TechniqueCategory2["Sattvavajaya"] = "Sattvavajaya";
  TechniqueCategory2["Pranayama"] = "Pranayama";
  TechniqueCategory2["Dhyana"] = "Dhyana";
  TechniqueCategory2["HerbalRemedies"] = "HerbalRemedies";
  TechniqueCategory2["MantraChanting"] = "MantraChanting";
  TechniqueCategory2["Mudra"] = "Mudra";
  return TechniqueCategory2;
})(TechniqueCategory$1 || {});
const techniquesData = [
  {
    id: "pranayama-nadi-shodhana",
    sanskritName: "नाड़ी शोधन प्राणायाम",
    name: "Nadi Shodhana Pranayama",
    shortDescription: "Alternate nostril breathing that purifies the nadis (energy channels) and calms the nervous system.",
    longDescription: "Nadi Shodhana, meaning 'channel purification', is one of the most revered pranayama techniques in the Hatha Yoga Pradipika. This bilateral breathing technique alternates airflow through each nostril, balancing the Ida (lunar, cooling) and Pingala (solar, heating) energy channels. Scientific research confirms it activates the parasympathetic nervous system, lowering cortisol and reducing anxiety. Regular practice synchronises the left and right cerebral hemispheres, enhancing cognitive clarity and emotional equanimity. The Yoga Sutras of Patanjali cite Pranayama as the fourth limb of Ashtanga Yoga, a bridge between outer and inner practice.",
    category: TechniqueCategory$1.Pranayama,
    difficulty: "Beginner",
    duration: "10–20 minutes",
    doshasAffected: [Dosha$1.Vata, Dosha$1.Pitta],
    benefits: [
      "Reduces anxiety and panic responses by activating the vagus nerve",
      "Lowers blood pressure and resting heart rate",
      "Clears the mind and enhances concentration",
      "Balances left and right brain hemispheres",
      "Improves sleep quality and insomnia relief",
      "Purifies the 72,000 energy channels (nadis) described in Tantric texts"
    ],
    steps: [
      "Sit comfortably in Sukhasana or Padmasana. Keep the spine erect.",
      "Rest left hand on left knee in Jnana Mudra (index finger and thumb touching).",
      "Bring right hand to Nasagra Mudra: fold index and middle fingers, use thumb for right nostril, ring finger for left.",
      "Close right nostril with thumb. Inhale slowly through left nostril for 4 counts.",
      "Close both nostrils and retain the breath (Kumbhaka) for 4 counts.",
      "Release thumb, exhale through right nostril for 8 counts.",
      "Inhale through right nostril for 4 counts. Retain for 4 counts.",
      "Exhale through left nostril for 8 counts. This completes one cycle.",
      "Begin with 5 cycles, gradually increasing to 20 over weeks."
    ],
    historicalContext: "Described in the Hatha Yoga Pradipika (15th century CE) by Swami Svatmarama, and referenced in the Gherand Samhita and Shiva Samhita. The concept of Prana regulation dates to the Rigveda (1500 BCE), where the breath was considered the vehicle of consciousness. Patanjali's Yoga Sutras (400 CE) codify Pranayama as essential for dharana (concentration).",
    scientificBacking: "Multiple peer-reviewed studies (Journal of Clinical Psychology, 2011; Neurological Sciences, 2013) confirm significant reduction in anxiety, cortisol levels, and blood pressure. EEG studies show increased alpha wave activity post-practice.",
    origin: {
      textName: "Hatha Yoga Pradipika",
      chapter: "Chapter 2, Verse 7–10",
      verse: "Nadi shodhana vishodhane...",
      translation: "When the channels of the vital force are purified, the breath easily enters the central channel (Sushumna)."
    },
    contraindications: [
      "Avoid during acute respiratory infections",
      "Those with severe cardiovascular conditions should practice without retention",
      "Pregnant women should omit Kumbhaka"
    ],
    imageKeyword: "pranayama breathing meditation",
    relatedTechniqueIds: ["dhyana-samatha", "mantra-om-chanting"]
  },
  {
    id: "dhyana-samatha",
    sanskritName: "शमथ ध्यान",
    name: "Samatha Dhyana",
    shortDescription: "Calm-abiding meditation rooted in Vedic tradition that stills the mind's fluctuations (Chitta Vritti Nirodha).",
    longDescription: "Samatha Dhyana (calming meditation) originates in the earliest Vedic texts as a means to achieve Chitta Prasadanam — clarification of consciousness. Patanjali defines the goal of Yoga as 'Yogas chitta vritti nirodhah' — the cessation of mental fluctuations. Samatha practice involves anchoring awareness to a single object (a mantra, flame, or the breath) until sustained attention becomes effortless absorption (Dharana → Dhyana → Samadhi). Neuroscience confirms long-term practitioners show measurable cortical thickening in the prefrontal cortex and reduced amygdala reactivity.",
    category: TechniqueCategory$1.Dhyana,
    difficulty: "Intermediate",
    duration: "20–45 minutes",
    doshasAffected: [Dosha$1.Vata, Dosha$1.Pitta, Dosha$1.Kapha],
    benefits: [
      "Reduces cortisol and chronic stress hormones",
      "Increases grey matter density in emotional regulation centres",
      "Cultivates Viveka (discrimination) and Vairagya (dispassion)",
      "Dissolves Klesha (mental afflictions): avidya, asmita, raga, dvesha, abhinivesha",
      "Develops sustained single-pointed awareness (Dharana)",
      "Promotes natural sleep cycle restoration"
    ],
    steps: [
      "Choose a quiet space at dawn (Brahma Muhurta, 4–6 AM) for optimal sattvic conditions.",
      "Sit in Padmasana or Siddhasana. Place hands in Dhyana Mudra (palms facing up, right resting on left).",
      "Close eyes and take 3 deep cleansing breaths to release tension.",
      "Set an intention (Sankalpa): 'I am still. I am aware. I am at peace.'",
      "Anchor awareness to the natural breath at the nostrils or the heartbeat.",
      "When the mind wanders (as it will), gently return without judgment — this is the practice.",
      "After 10 minutes, allow awareness to expand from the breath to the body, then the room.",
      "Sit in silence for 5 minutes after formal practice before returning to activity."
    ],
    historicalContext: "Dhyana is the seventh limb of Patanjali's Ashtanga Yoga system. The Chandogya Upanishad (800 BCE) declares: 'Dhyayati eva brahma' — the Brahman meditates. The Mandukya Upanishad maps states of consciousness directly relevant to meditation depth. The Bhagavad Gita (Chapter 6) provides detailed instruction from Krishna to Arjuna on meditation practice.",
    scientificBacking: "Harvard Medical School studies (2011, 2015) show 8 weeks of meditation increases cortical thickness in the hippocampus and shrinks the amygdala. Reduces inflammatory biomarkers including IL-6.",
    origin: {
      textName: "Yoga Sutras of Patanjali",
      chapter: "Pada 1, Sutra 2",
      verse: "Yogaś citta-vṛtti-nirodhaḥ",
      translation: "Yoga is the cessation of the fluctuations of the mind."
    },
    contraindications: [
      "Those with severe dissociative disorders should practice with guidance",
      "Avoid deep meditation while sleep-deprived"
    ],
    imageKeyword: "meditation lotus pose spiritual",
    relatedTechniqueIds: ["pranayama-nadi-shodhana", "mantra-om-chanting"]
  },
  {
    id: "mudra-shambhavi",
    sanskritName: "शाम्भवी मुद्रा",
    name: "Shambhavi Mudra",
    shortDescription: "The eyebrow centre gesture that activates the Ajna Chakra (third eye) and induces states of deep inner awareness.",
    longDescription: "Shambhavi Mudra, named after Shambhu (a form of Shiva), involves fixing the inner gaze at the Bhrumadhya (the space between the eyebrows), the seat of the Ajna Chakra. This ancient gesture is described in the Hatha Yoga Pradipika as the 'mother of all mudras' due to its power to instantly withdraw awareness from external objects (Pratyahara) and direct it inward. The technique activates the pineal gland and hypothalamus, regulating the stress-response axis. In Tantric traditions, it is the primary means of awakening Kundalini energy from the Muladhara to the Sahasrara chakra.",
    category: TechniqueCategory$1.Mudra,
    difficulty: "Advanced",
    duration: "5–15 minutes",
    doshasAffected: [Dosha$1.Vata],
    benefits: [
      "Activates the Ajna Chakra, enhancing intuition and inner clarity",
      "Strengthens the optic nerve and improves concentration",
      "Induces Pratyahara (sense withdrawal) rapidly",
      "Regulates the pineal gland and melatonin secretion",
      "Elevates mood by increasing serotonin synthesis",
      "Awakens dormant Kundalini Shakti when practiced consistently"
    ],
    steps: [
      "Sit in Siddhasana with the spine erect. Establish slow, deep breathing.",
      "Relax the facial muscles completely. Close the mouth and keep the tongue lightly resting.",
      "Open the eyes halfway and turn them upward and inward toward the Bhrumadhya (eyebrow centre).",
      "Hold this inner gaze steady. The eyes may appear slightly crossed — this is normal.",
      "Breathe slowly. Maintain the gaze and feel a warmth or pressure building between the brows.",
      "Hold for 10–30 seconds initially. Return to normal gaze, rest, then repeat.",
      "Practice for 5–10 minutes. Finish with 2 minutes of eyes closed in stillness."
    ],
    historicalContext: "Described in the Hatha Yoga Pradipika (Chapter 4) and Gheranda Samhita (Chapter 3). Referenced as 'Sambhavi' in the Siva Samhita and Tantraloka by Abhinavagupta (10th century CE). The Shat Chakra Nirupana (16th century) describes the Ajna Chakra as the command centre where Guru's grace is received.",
    scientificBacking: "Research from Swami Vivekananda Yoga Research Foundation shows Shambhavi practice significantly reduces beta wave activity and increases theta waves associated with deep relaxation and creative insight.",
    origin: {
      textName: "Hatha Yoga Pradipika",
      chapter: "Chapter 4, Verse 36–37",
      verse: "Antarlakṣyam bahirdṛṣṭir nimeṣonmeṣavarjitā",
      translation: "With the inner vision fixed upon the inner object and the outer gaze motionless, this is Shambhavi Mudra, kept secret in the Vedas and Tantras."
    },
    contraindications: [
      "Those with glaucoma or eye conditions should avoid",
      "Do not practice with extreme exhaustion",
      "Epileptics should consult a teacher first"
    ],
    imageKeyword: "mudra hand gesture meditation",
    relatedTechniqueIds: ["dhyana-samatha", "pranayama-nadi-shodhana"]
  },
  {
    id: "mantra-om-chanting",
    sanskritName: "ॐ मन्त्र जप",
    name: "Om Mantra Japa",
    shortDescription: "Repetition of the primordial sound 'Om' (Aum), the cosmic vibration at the root of all creation and consciousness.",
    longDescription: "The Mandukya Upanishad opens with 'Om iti etat aksaram idam sarvam' — OM is this syllable, all this is OM. The three letters A-U-M represent waking (jagrat), dream (svapna), and deep sleep (sushupti) states, while the resonant silence after represents Turiya, the fourth transcendent state. In Japa (repetitive mantra recitation), the vibrational frequency of Om (approximately 136.1 Hz, aligned with the Earth's frequency) resonates with the Anahata Chakra. Scientific studies confirm chanting Om reduces activity in the limbic system, including the amygdala — the brain's fear and aggression centre.",
    category: TechniqueCategory$1.MantraChanting,
    difficulty: "Beginner",
    duration: "10–30 minutes",
    doshasAffected: [Dosha$1.Vata, Dosha$1.Pitta, Dosha$1.Kapha],
    benefits: [
      "Deactivates the amygdala, reducing fear and anger responses",
      "Synchronises brainwaves to relaxed alpha and theta states",
      "Vagal stimulation through laryngeal vibration reduces heart rate",
      "Promotes ojas (vital essence) and mental luminosity (sattva)",
      "Clears karmic imprints (samskaras) through vibrational purification",
      "Induces natural states of joy and contentment"
    ],
    steps: [
      "Sit in Sukhasana. Take a Mala (108-bead rosary) in the right hand for counted Japa.",
      "Close your eyes and take 3 slow, deep breaths to settle the mind.",
      "Inhale deeply. As you exhale, chant 'A-U-M' — feel 'A' vibrate in the abdomen, 'U' in the chest, 'M' as a humming resonance in the skull.",
      "Allow the sound to fade into silence. Rest in that silence for a full breath before the next chant.",
      "For silent (Manasika) Japa: visualise the Om symbol while hearing it internally.",
      "Complete 108 repetitions using the Mala, moving one bead per chant.",
      "After practice, sit in stillness for 5 minutes with eyes closed, absorbing the vibrational effect."
    ],
    historicalContext: "Om's significance is established in the Rigveda, Upanishads, and Yoga Sutras. The Taittiriya Upanishad (800 BCE) states that Om is Brahman. Patanjali's Yoga Sutras (1:27) declare Om the symbol of Ishvara (cosmic intelligence). The Chandogya Upanishad (600 BCE) elaborates the metaphysical dimensions of each syllable.",
    scientificBacking: "AIIMS (All India Institute of Medical Sciences) studies confirm Om chanting reduces activity in the right amygdala on fMRI scans. Research in the International Journal of Yoga shows significant reductions in anxiety scores after 12 weeks.",
    origin: {
      textName: "Mandukya Upanishad",
      chapter: "Verse 1",
      verse: "Oṃ ityetadakṣaraṃ idaṃ sarvaṃ",
      translation: "OM — this syllable is all this. Whatever has been, is, and shall be — all this is OM."
    },
    contraindications: [
      "No significant contraindications; suitable for all ages",
      "Those with hearing sensitivity may practice silent (Manasika) Japa"
    ],
    imageKeyword: "om symbol chanting Sanskrit",
    relatedTechniqueIds: ["dhyana-samatha", "pranayama-nadi-shodhana"]
  },
  {
    id: "herbal-ashwagandha",
    sanskritName: "अश्वगंधा चिकित्सा",
    name: "Ashwagandha Rasayana",
    shortDescription: "The premier Ayurvedic adaptogenic herb that rebuilds ojas (vital essence) and directly counters the effects of chronic stress.",
    longDescription: "Ashwagandha (Withania somnifera), meaning 'smell of horse' in Sanskrit, is the cornerstone of Ayurvedic Rasayana (rejuvenation therapy). The Charaka Samhita classifies it as a Medhya Rasayana — a herb that restores mental clarity and fortifies the nervous system (Majja Dhatu). Its active compounds, withanolides, are steroidal lactones that modulate the HPA (hypothalamic-pituitary-adrenal) axis, normalising the stress hormone cortisol. The herb is categorised as Sattvic — promoting clarity, peace, and spiritual awareness in Ayurvedic psychology.",
    category: TechniqueCategory$1.HerbalRemedies,
    difficulty: "Beginner",
    duration: "Daily, 60–90 day course",
    doshasAffected: [Dosha$1.Vata, Dosha$1.Kapha],
    benefits: [
      "Reduces cortisol levels by 30% in clinical trials (300–500mg extract)",
      "Improves VO2 max and physical endurance (Balya action)",
      "Enhances memory and cognitive processing speed",
      "Restores thyroid function in subclinical hypothyroidism",
      "Increases testosterone and reproductive vitality (Vajikara action)",
      "Reduces C-reactive protein, a key inflammation marker"
    ],
    steps: [
      "Source certified organic Ashwagandha root powder (KSM-66 or Sensoril extract for standardised withanolides).",
      "Traditional preparation: Mix 1 tsp root powder in warm cow's milk with ½ tsp ghee and a pinch of cardamom.",
      "Take in the evening, 1–2 hours after dinner, to align with the body's natural cortisol decline.",
      "Alternatively, take 300–500mg standardised extract capsule in the morning with food.",
      "Pair with Brahmi (Bacopa monnieri) for enhanced cognitive benefits.",
      "Maintain a 3-month course for systemic Rasayana effects. Pause for 4 weeks before resuming.",
      "Consult an Ayurvedic Vaidya for personalised dosage based on your Prakriti (constitution)."
    ],
    historicalContext: "Described extensively in the Charaka Samhita (Chikitsa Sthana 1:3) and Ashtanga Hridayam. Sushruta classified it among the Balya (strength-promoting) group. Used for over 3,000 years as a Rasayana — a rejuvenative that reverses degeneration and promotes longevity. The Dhanvantari Nighantu (a classical Ayurvedic lexicon) records 14 synonyms for Ashwagandha.",
    scientificBacking: "Indian Journal of Psychological Medicine (2012): 300mg twice daily significantly reduced stress and anxiety scores by 44% vs. placebo. Multiple systematic reviews confirm adaptogenic, neuroprotective, and anti-inflammatory properties.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Chikitsa Sthana 1:3",
      verse: "Ashwagandha balya vrishya...",
      translation: "Ashwagandha is strength-promoting, aphrodisiac, and rejuvenating; it removes Vata disorders and promotes ojas."
    },
    contraindications: [
      "Avoid during pregnancy (uterine stimulant)",
      "Caution with thyroid medications",
      "Avoid with immunosuppressants without physician supervision",
      "Not suitable for high Pitta conditions without formulation adjustment"
    ],
    imageKeyword: "ashwagandha herbs Ayurveda botanicals",
    relatedTechniqueIds: ["herbal-brahmi", "dhyana-samatha"]
  },
  {
    id: "sattvavajaya-pratipaksha",
    sanskritName: "सत्त्ववजय — प्रतिपक्ष भावन",
    name: "Sattvavajaya — Pratipaksha Bhavana",
    shortDescription: "Ayurvedic cognitive therapy using cultivation of opposite thoughts to counter krodha (anger) and dvesha (aversion).",
    longDescription: "Sattvavajaya (conquest of the mind through Sattva) is Ayurveda's psycho-spiritual therapeutic system, distinct from somatic herbal treatment. The Charaka Samhita defines it as 'restraint of the mind from unwholesome objects through cultivation of Sattva'. Its primary tool is Pratipaksha Bhavana — Patanjali's technique (Yoga Sutras 2:33–34) of consciously cultivating the opposite thought to any disturbing emotion. When Krodha (anger) arises, one cultivates Karuna (compassion). This mirrors modern Cognitive Behavioural Therapy's thought reframing, but is rooted in the Vedic understanding that all mental disturbance begins with Prajnaparadha — the mistake of the intellect.",
    category: TechniqueCategory$1.Sattvavajaya,
    difficulty: "Intermediate",
    duration: "Ongoing daily practice",
    doshasAffected: [Dosha$1.Pitta, Dosha$1.Vata],
    benefits: [
      "Directly counters Krodha (anger) using the Vedic principle of Pratipaksha",
      "Reduces Rajas (overactivity) and increases Sattva (clarity) in the mind",
      "Breaks habitual anger responses encoded in neural pathways",
      "Cultivates Kshama (forgiveness) as a permanent character quality",
      "Aligns with modern DBT (Dialectical Behaviour Therapy) techniques",
      "Transforms the root causes of stress: avidya (ignorance) and asmita (ego-identification)"
    ],
    steps: [
      "Begin by identifying your primary Vikara (mental disturbance): anger, fear, jealousy, or grief.",
      "Journal the trigger, thoughts, and physical sensations associated with the Vikara without judgment.",
      "Identify the underlying Klesa (affliction): is it avidya (misperception), raga (attachment), or dvesha (aversion)?",
      "Apply Pratipaksha Bhavana: consciously generate the opposing quality. For anger, invoke Karuna (compassion). For fear, generate Abhaya (fearlessness).",
      "Visualise the person or situation that triggered you. Now see them through the lens of the opposite quality.",
      "Use a Bhavana Mantra: for anger, repeat 'Sarve bhavantu sukhinah' (May all beings be happy) 21 times.",
      "Daily Satsang: spend time with Sattvic influences — uplifting texts, nature, inspiring company."
    ],
    historicalContext: "Sattvavajaya as a therapeutic category is established in the Charaka Samhita (Sutra Sthana 1:58). Patanjali's Yoga Sutras (2:33) introduce Pratipaksha Bhavana. The Bhagavad Gita (16:1–3) enumerates the Daivi Sampad (divine qualities) as the goal of this practice. The Yoga Vasistha (an extensive text on consciousness) dedicates entire chapters to Sattvavajaya techniques.",
    scientificBacking: "Cognitive restructuring (the Western parallel) is extensively validated. Studies in Journal of Positive Psychology confirm deliberate positive emotion cultivation reduces anger reactivity and improves relationship quality.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Sutra Sthana 1:58",
      verse: "Sattvavajayah punar ahita ebhyo vishayebhyo mano nigrahe",
      translation: "Sattvavajaya is the restraint of the mind from unwholesome objects through the strength of the purified Sattva."
    },
    contraindications: [
      "Should complement, not replace, clinical psychiatric treatment for severe conditions",
      "Trauma-based emotions require professional therapeutic support"
    ],
    imageKeyword: "mindfulness contemplation inner peace",
    relatedTechniqueIds: ["dhyana-samatha", "mantra-om-chanting"]
  },
  {
    id: "herbal-brahmi",
    sanskritName: "ब्राह्मी रसायन",
    name: "Brahmi Rasayana",
    shortDescription: "The sacred Ayurvedic brain tonic that enhances memory, reduces anxiety, and restores the mind's natural luminosity.",
    longDescription: "Brahmi (Bacopa monnieri), named after Brahma — the cosmic intelligence — is the quintessential Medhya Rasayana (cognitive rejuvenative) in Ayurveda. The Charaka Samhita includes it among the four premier Medhya herbs. Its active bacosides A and B enhance synaptic transmission and support neuroplasticity by upregulating BDNF (Brain-Derived Neurotrophic Factor). It is classified as a Tridoshic herb with particular affinity for Majja Dhatu (nervous tissue), promoting intelligence (Medha), retention (Dhi), and memory (Smriti). In Yoga, it is regarded as a Sattvic herb that directly supports meditation and higher states of awareness.",
    category: TechniqueCategory$1.HerbalRemedies,
    difficulty: "Beginner",
    duration: "Daily, 12-week course",
    doshasAffected: [Dosha$1.Vata, Dosha$1.Pitta, Dosha$1.Kapha],
    benefits: [
      "Enhances declarative memory and learning speed (backed by 12 clinical trials)",
      "Reduces anxiety via modulation of serotonin and dopamine pathways",
      "Protects neurons from oxidative stress and beta-amyloid accumulation",
      "Improves attention and working memory in children and adults",
      "Promotes Satvika qualities: calmness, clarity, and spiritual receptivity",
      "Synergises with Ashwagandha for comprehensive stress-adaptation"
    ],
    steps: [
      "Source Brahmi ghrita (ghee infused with Brahmi) for the classical preparation.",
      "Take ½ tsp Brahmi ghrita dissolved in warm water or milk in the morning on an empty stomach.",
      "Alternatively, take 300mg standardised Bacopa extract (45% bacosides) twice daily with meals.",
      "Brahmi oil massage (Shirobhyanga): warm the oil and massage into the scalp for 15 minutes before bathing.",
      "Brahmi tea: steep 1 tsp dried Brahmi leaves in hot water for 10 minutes. Add honey when cooled.",
      "Combine with Shatavari for women's nervous system support, or with Shankhapushpi for enhanced memory.",
      "Maintain consistent practice for minimum 12 weeks for measurable cognitive improvement."
    ],
    historicalContext: "Mentioned in the Charaka Samhita, Ashtanga Hridayam, and Sushruta Samhita. The Atharva Veda (1500–1200 BCE) references memory-enhancing herbs used in Brahmacharya (student life) to aid scripture memorisation. The Ayurvedic classic Dhanvantari Nighantu records Brahmi as the primary herb for enhancing Saraswati — the energy of speech, learning, and wisdom.",
    scientificBacking: "Neuropsychopharmacology (2002): 12-week Bacopa supplementation significantly improved verbal learning rate, memory consolidation, and information processing speed. Meta-analysis (2014) confirms cognitive-enhancing effects in healthy adults.",
    origin: {
      textName: "Charaka Samhita",
      chapter: "Kalpa Sthana 12:6",
      verse: "Brahmi medhya smritivardhini prajnavardhini...",
      translation: "Brahmi enhances intellect, memory, and wisdom; it is the premier tonic for the mind and sense organs."
    },
    contraindications: [
      "May slow heart rate; caution in bradycardia",
      "Avoid combining with sedative medications without guidance",
      "May cause mild digestive discomfort initially; take with food"
    ],
    imageKeyword: "brahmi herb Ayurveda green leaves",
    relatedTechniqueIds: ["herbal-ashwagandha", "dhyana-samatha"]
  }
];
const categoryLabels = {
  [TechniqueCategory$1.Pranayama]: "Pranayama",
  [TechniqueCategory$1.Dhyana]: "Dhyana",
  [TechniqueCategory$1.Mudra]: "Mudra",
  [TechniqueCategory$1.MantraChanting]: "Mantra",
  [TechniqueCategory$1.HerbalRemedies]: "Herbs",
  [TechniqueCategory$1.Sattvavajaya]: "Sattvavajaya"
};
const categoryColors = {
  [TechniqueCategory$1.Pranayama]: "bg-primary/10 text-primary border-primary/20",
  [TechniqueCategory$1.Dhyana]: "bg-accent/10 text-accent border-accent/20",
  [TechniqueCategory$1.Mudra]: "bg-secondary/10 text-secondary-foreground border-secondary/20",
  [TechniqueCategory$1.MantraChanting]: "bg-primary/15 text-primary border-primary/25",
  [TechniqueCategory$1.HerbalRemedies]: "bg-accent/15 text-accent border-accent/25",
  [TechniqueCategory$1.Sattvavajaya]: "bg-muted text-muted-foreground border-border"
};
const Dosha = Variant({
  "Vata": Null,
  "Pitta": Null,
  "Kapha": Null
});
const TextCitation = Record({
  "verse": Text,
  "textName": Text,
  "translation": Text,
  "chapter": Text
});
const TechniqueCategory = Variant({
  "Sattvavajaya": Null,
  "Pranayama": Null,
  "Dhyana": Null,
  "HerbalRemedies": Null,
  "MantraChanting": Null,
  "Mudra": Null
});
const Technique = Record({
  "id": Text,
  "duration": Text,
  "doshasAffected": Vec(Dosha),
  "sanskritName": Text,
  "difficulty": Text,
  "name": Text,
  "origin": TextCitation,
  "scientificBacking": Text,
  "contraindications": Vec(Text),
  "steps": Vec(Text),
  "shortDescription": Text,
  "category": TechniqueCategory,
  "imageKeyword": Text,
  "relatedTechniqueIds": Vec(Text),
  "benefits": Vec(Text),
  "historicalContext": Text,
  "longDescription": Text
});
const AncientText = Record({
  "id": Text,
  "sanskritName": Text,
  "name": Text,
  "year": Text,
  "description": Text,
  "authors": Vec(Text),
  "relevance": Text,
  "teachings": Vec(Text)
});
const DoshaDetail = Record({
  "imbalanceSymptoms": Vec(Text),
  "name": Text,
  "description": Text,
  "qualities": Vec(Text)
});
const FounderInfo = Record({
  "bio": Text,
  "title": Text,
  "mission": Text,
  "name": Text,
  "credentials": Vec(Text),
  "imageKeyword": Text
});
Service({
  "getAllTechniques": Func([], [Vec(Technique)], ["query"]),
  "getAncientTexts": Func([], [Vec(AncientText)], ["query"]),
  "getDoshaDetails": Func([], [Vec(DoshaDetail)], ["query"]),
  "getFounderInfo": Func([], [FounderInfo], ["query"]),
  "getTechniqueById": Func([Text], [Opt(Technique)], ["query"]),
  "getTechniquesByCategory": Func(
    [TechniqueCategory],
    [Vec(Technique)],
    ["query"]
  )
});
const idlFactory = ({ IDL: IDL2 }) => {
  const Dosha2 = IDL2.Variant({
    "Vata": IDL2.Null,
    "Pitta": IDL2.Null,
    "Kapha": IDL2.Null
  });
  const TextCitation2 = IDL2.Record({
    "verse": IDL2.Text,
    "textName": IDL2.Text,
    "translation": IDL2.Text,
    "chapter": IDL2.Text
  });
  const TechniqueCategory2 = IDL2.Variant({
    "Sattvavajaya": IDL2.Null,
    "Pranayama": IDL2.Null,
    "Dhyana": IDL2.Null,
    "HerbalRemedies": IDL2.Null,
    "MantraChanting": IDL2.Null,
    "Mudra": IDL2.Null
  });
  const Technique2 = IDL2.Record({
    "id": IDL2.Text,
    "duration": IDL2.Text,
    "doshasAffected": IDL2.Vec(Dosha2),
    "sanskritName": IDL2.Text,
    "difficulty": IDL2.Text,
    "name": IDL2.Text,
    "origin": TextCitation2,
    "scientificBacking": IDL2.Text,
    "contraindications": IDL2.Vec(IDL2.Text),
    "steps": IDL2.Vec(IDL2.Text),
    "shortDescription": IDL2.Text,
    "category": TechniqueCategory2,
    "imageKeyword": IDL2.Text,
    "relatedTechniqueIds": IDL2.Vec(IDL2.Text),
    "benefits": IDL2.Vec(IDL2.Text),
    "historicalContext": IDL2.Text,
    "longDescription": IDL2.Text
  });
  const AncientText2 = IDL2.Record({
    "id": IDL2.Text,
    "sanskritName": IDL2.Text,
    "name": IDL2.Text,
    "year": IDL2.Text,
    "description": IDL2.Text,
    "authors": IDL2.Vec(IDL2.Text),
    "relevance": IDL2.Text,
    "teachings": IDL2.Vec(IDL2.Text)
  });
  const DoshaDetail2 = IDL2.Record({
    "imbalanceSymptoms": IDL2.Vec(IDL2.Text),
    "name": IDL2.Text,
    "description": IDL2.Text,
    "qualities": IDL2.Vec(IDL2.Text)
  });
  const FounderInfo2 = IDL2.Record({
    "bio": IDL2.Text,
    "title": IDL2.Text,
    "mission": IDL2.Text,
    "name": IDL2.Text,
    "credentials": IDL2.Vec(IDL2.Text),
    "imageKeyword": IDL2.Text
  });
  return IDL2.Service({
    "getAllTechniques": IDL2.Func([], [IDL2.Vec(Technique2)], ["query"]),
    "getAncientTexts": IDL2.Func([], [IDL2.Vec(AncientText2)], ["query"]),
    "getDoshaDetails": IDL2.Func([], [IDL2.Vec(DoshaDetail2)], ["query"]),
    "getFounderInfo": IDL2.Func([], [FounderInfo2], ["query"]),
    "getTechniqueById": IDL2.Func([IDL2.Text], [IDL2.Opt(Technique2)], ["query"]),
    "getTechniquesByCategory": IDL2.Func(
      [TechniqueCategory2],
      [IDL2.Vec(Technique2)],
      ["query"]
    )
  });
};
class Backend {
  constructor(actor, _uploadFile, _downloadFile, processError) {
    this.actor = actor;
    this._uploadFile = _uploadFile;
    this._downloadFile = _downloadFile;
    this.processError = processError;
  }
  async getAllTechniques() {
    if (this.processError) {
      try {
        const result = await this.actor.getAllTechniques();
        return from_candid_vec_n1(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAllTechniques();
      return from_candid_vec_n1(this._uploadFile, this._downloadFile, result);
    }
  }
  async getAncientTexts() {
    if (this.processError) {
      try {
        const result = await this.actor.getAncientTexts();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAncientTexts();
      return result;
    }
  }
  async getDoshaDetails() {
    if (this.processError) {
      try {
        const result = await this.actor.getDoshaDetails();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getDoshaDetails();
      return result;
    }
  }
  async getFounderInfo() {
    if (this.processError) {
      try {
        const result = await this.actor.getFounderInfo();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getFounderInfo();
      return result;
    }
  }
  async getTechniqueById(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getTechniqueById(arg0);
        return from_candid_opt_n9(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getTechniqueById(arg0);
      return from_candid_opt_n9(this._uploadFile, this._downloadFile, result);
    }
  }
  async getTechniquesByCategory(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getTechniquesByCategory(to_candid_TechniqueCategory_n10(this._uploadFile, this._downloadFile, arg0));
        return from_candid_vec_n1(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getTechniquesByCategory(to_candid_TechniqueCategory_n10(this._uploadFile, this._downloadFile, arg0));
      return from_candid_vec_n1(this._uploadFile, this._downloadFile, result);
    }
  }
}
function from_candid_Dosha_n5(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n6(_uploadFile, _downloadFile, value);
}
function from_candid_TechniqueCategory_n7(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n8(_uploadFile, _downloadFile, value);
}
function from_candid_Technique_n2(_uploadFile, _downloadFile, value) {
  return from_candid_record_n3(_uploadFile, _downloadFile, value);
}
function from_candid_opt_n9(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_Technique_n2(_uploadFile, _downloadFile, value[0]);
}
function from_candid_record_n3(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    duration: value.duration,
    doshasAffected: from_candid_vec_n4(_uploadFile, _downloadFile, value.doshasAffected),
    sanskritName: value.sanskritName,
    difficulty: value.difficulty,
    name: value.name,
    origin: value.origin,
    scientificBacking: value.scientificBacking,
    contraindications: value.contraindications,
    steps: value.steps,
    shortDescription: value.shortDescription,
    category: from_candid_TechniqueCategory_n7(_uploadFile, _downloadFile, value.category),
    imageKeyword: value.imageKeyword,
    relatedTechniqueIds: value.relatedTechniqueIds,
    benefits: value.benefits,
    historicalContext: value.historicalContext,
    longDescription: value.longDescription
  };
}
function from_candid_variant_n6(_uploadFile, _downloadFile, value) {
  return "Vata" in value ? "Vata" : "Pitta" in value ? "Pitta" : "Kapha" in value ? "Kapha" : value;
}
function from_candid_variant_n8(_uploadFile, _downloadFile, value) {
  return "Sattvavajaya" in value ? "Sattvavajaya" : "Pranayama" in value ? "Pranayama" : "Dhyana" in value ? "Dhyana" : "HerbalRemedies" in value ? "HerbalRemedies" : "MantraChanting" in value ? "MantraChanting" : "Mudra" in value ? "Mudra" : value;
}
function from_candid_vec_n1(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_Technique_n2(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n4(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_Dosha_n5(_uploadFile, _downloadFile, x));
}
function to_candid_TechniqueCategory_n10(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n11(_uploadFile, _downloadFile, value);
}
function to_candid_variant_n11(_uploadFile, _downloadFile, value) {
  return value == "Sattvavajaya" ? {
    Sattvavajaya: null
  } : value == "Pranayama" ? {
    Pranayama: null
  } : value == "Dhyana" ? {
    Dhyana: null
  } : value == "HerbalRemedies" ? {
    HerbalRemedies: null
  } : value == "MantraChanting" ? {
    MantraChanting: null
  } : value == "Mudra" ? {
    Mudra: null
  } : value;
}
function createActor(canisterId, _uploadFile, _downloadFile, options = {}) {
  const agent = options.agent || HttpAgent.createSync({
    ...options.agentOptions
  });
  if (options.agent && options.agentOptions) {
    console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
  }
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions
  });
  return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
const founderData = {
  name: "Dr. Vasudeva Krishnamurti",
  title: "Vedic Scholar, Ayurvedic Physician & Yoga Acharya",
  bio: `Born into a lineage of Ayurvedic Vaidyas in the temple town of Kanchipuram, Tamil Nadu, Dr. Vasudeva Krishnamurti was initiated into Sanskrit and Vedic recitation at the age of seven by his grandfather — a physician who treated patients using only classical texts and medicinal plants grown in his courtyard.

After completing his BAMS (Bachelor of Ayurvedic Medicine and Surgery) at the Government Ayurvedic College, Mysore, he pursued advanced studies in Yoga Philosophy at the Kaivalyadhama Institute, Lonavala — one of the world's oldest scientific yoga research institutes, founded in 1924. He then spent three years in residence at the Krishnamacharya Yoga Mandiram in Chennai, studying the classical Yoga Sutras under lineage teachers.

Over three decades of practice and teaching, Dr. Krishnamurti has treated thousands of patients presenting with stress-related disorders, burnout, and anxiety — conditions he collectively identifies as the modern manifestation of Prajna-aparadha: the "mistake of the intellect" that severs the individual from their natural state of equanimity. His work bridges ancient Indian medical epistemology with contemporary neuroscience, translating the practical wisdom of the Charaka Samhita, Yoga Sutras, and Upanishads into accessible daily protocols.

He is the author of "Krodha to Karuna: Ancient Indian Pathways for Anger Transformation" and "The Living Veda: Practical Ayurveda for the Modern Mind", both widely used in integrative medicine programmes. He has presented his research at AIIMS (All India Institute of Medical Sciences) and at international Ayurveda congresses in Germany and the United States.`,
  mission: `"The Rishis of ancient India were not merely philosophers — they were empirical scientists of consciousness. The Yoga Sutras, Charaka Samhita, and Upanishads are not texts of belief; they are operational manuals for the human nervous system.

In presenting these techniques, our mission is singular: to return the sovereign technology of the mind to every person who needs it. Anger, fear, and chronic stress are not personal failures — they are imbalances in Prana and Tridosha that the ancient Vaidyas identified and addressed with extraordinary precision over millennia.

This portal is offered as a Guru-Dakshina — a gift in honour of the unbroken lineage of teachers who preserved this knowledge across centuries of upheaval. May it bring Shanti (peace), Arogya (health), and Sukha (well-being) to all who engage with it sincerely."`,
  credentials: [
    "BAMS — Bachelor of Ayurvedic Medicine and Surgery, Government Ayurvedic College, Mysore",
    "Advanced Yoga Philosophy, Kaivalyadhama Institute, Lonavala (est. 1924)",
    "Classical Yoga Studies, Krishnamacharya Yoga Mandiram, Chennai",
    "30+ years clinical practice in Ayurvedic psychosomatic medicine",
    "Author: 'Krodha to Karuna' and 'The Living Veda'",
    "Research presented at AIIMS and international Ayurveda congresses",
    "Certified in Panchakarma, Rasayana therapy, and Sattvavajaya (Ayurvedic psychotherapy)"
  ],
  imageKeyword: "ayurveda scholar meditation portrait"
};
const ancientTextsData = [
  {
    id: "rigveda",
    name: "Rigveda",
    sanskritName: "ऋग्वेद",
    year: "c. 1500–1200 BCE",
    description: "The oldest of the four Vedas, comprising 1,028 hymns to cosmic forces. It contains the earliest references to Prana (vital force), the nature of consciousness, and the healing power of sacred sound. The Nasadiya Sukta (Hymn of Creation, 10:129) is among humanity's oldest philosophical inquiry into the nature of existence.",
    authors: [
      "Multiple Rishis (seers)",
      "Notably Vishvamitra, Vasishtha, Atri"
    ],
    relevance: "Establishes the foundational Vedic understanding of mind-body unity, the healing power of sound (Shabda Brahman), and the primacy of consciousness over matter.",
    teachings: [
      "Prana as the animating force of all life",
      "Sound (mantra) as a tool for consciousness transformation",
      "The indivisibility of microcosm (human) and macrocosm (cosmos)",
      "Agni (sacred fire of awareness) as the catalyst for transformation"
    ]
  },
  {
    id: "upanishads",
    name: "Principal Upanishads",
    sanskritName: "मुख्य उपनिषद्",
    year: "c. 800–200 BCE",
    description: "The philosophical crown of Vedic literature — 108 texts recording direct dialogues between Rishis and their students on the nature of Brahman (ultimate reality) and Atman (individual consciousness). The Mandukya, Katha, Chandogya, Brihadaranyaka, and Taittiriya Upanishads form the core curriculum of Vedanta and provide the theoretical foundation for all meditation systems.",
    authors: [
      "Yajnavalkya (Brihadaranyaka)",
      "Uddalaka Aruni (Chandogya)",
      "Nachiketa & Yama dialogue (Katha)"
    ],
    relevance: "Provides the metaphysical framework for understanding consciousness, the three states of mind, and the nature of Turiya — the state of pure awareness beyond thought that is the goal of all meditation.",
    teachings: [
      "Tat tvam asi — You are That (Chandogya 6:8:7)",
      "Aham Brahmasmi — I am Brahman (Brihadaranyaka 1:4:10)",
      "The Pancha Kosha (five sheaths of being): Annamaya, Pranamaya, Manomaya, Vijnanamaya, Anandamaya",
      "The four states of consciousness: Jagrat, Svapna, Sushupti, Turiya"
    ]
  },
  {
    id: "yoga-sutras",
    name: "Yoga Sutras of Patanjali",
    sanskritName: "पतञ्जलि योगसूत्र",
    year: "c. 400 CE",
    description: "The definitive systematic text on Yoga — 196 aphorisms (sutras) organised into four chapters (Padas) covering the nature of the mind, the practice of Yoga, the powers arising from practice, and liberation. Patanjali synthesises the diverse Yoga traditions that preceded him into a precise, replicable system for the complete transformation of consciousness.",
    authors: ["Maharishi Patanjali"],
    relevance: "The operational manual for mind control. Defines Chitta Vritti Nirodha (cessation of mental fluctuations) as the goal of practice and maps the complete eight-limbed path to achieve it.",
    teachings: [
      "Yogas chitta-vritti-nirodhah — Yoga is the cessation of the fluctuations of the mind",
      "Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi",
      "The Kleshas (afflictions): Avidya, Asmita, Raga, Dvesha, Abhinivesha",
      "Pratipaksha Bhavana — cultivation of the opposite for mental purification",
      "Ishvara Pranidhana — surrender to cosmic intelligence as the fastest path"
    ]
  },
  {
    id: "charaka-samhita",
    name: "Charaka Samhita",
    sanskritName: "चरक संहिता",
    year: "c. 400–200 BCE (redacted)",
    description: "The foundational text of Ayurvedic medicine, comprising 120 chapters across 8 sections. Authored by Charaka (redacting the work of Agnivesha, a student of Punarvasu Atreya), it covers the complete science of life — from embryology and diet to psychology and spiritual practice. The Charaka Samhita's treatment of mental health through Sattvavajaya (psychotherapy), Daivavyapashraya (spiritual therapy), and Yuktivyapashraya (rational therapy) is remarkably comprehensive.",
    authors: [
      "Charaka (compiler)",
      "Agnivesha (original author)",
      "Dridhabala (later redactor)"
    ],
    relevance: "Establishes Ayurvedic psychiatry (Mano Roga Chikitsa) as a complete science, introducing Sattvavajaya as the world's earliest recorded psychotherapeutic system, along with detailed herbal protocols for mental health.",
    teachings: [
      "Tridosha theory: Vata, Pitta, Kapha as the three biological forces",
      "Prajna-aparadha (mistake of the intellect) as the root cause of disease",
      "Sattvavajaya: mental strength therapy through cultivation of sattva",
      "Medhya Rasayanas: the four cognitive rejuvenatives (Brahmi, Shankhapushpi, Mandukaparni, Guduchi)",
      "Ahara as medicine — specific dietary protocols for each mental imbalance"
    ]
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita",
    sanskritName: "भगवद्गीता",
    year: "c. 200 BCE",
    description: "Embedded within the Mahabharata, the Bhagavad Gita is a 700-verse dialogue between the warrior Arjuna — paralysed by anxiety and moral confusion on the battlefield — and his charioteer Krishna, revealed as the divine intelligence. The text is simultaneously a practical guide to Karma Yoga (action without attachment), Jnana Yoga (wisdom), Bhakti Yoga (devotion), and Raja Yoga (meditation). Chapter 6 contains the most detailed practical instruction on meditation in the Sanskrit tradition.",
    authors: ["Veda Vyasa (attributed)"],
    relevance: "Addresses the archetypal human crisis of Arjuna directly: acute anxiety, decision paralysis, and existential despair — offering practical tools for restoring equanimity under extreme pressure.",
    teachings: [
      "Yoga is equanimity (samatvam yoga uchyate — 2:48)",
      "Let right deeds be thy motive, not the fruit which comes from them (2:47)",
      "The mind is the friend of the one who has mastered it, and the enemy of the one who has not (6:6)",
      "Chapter 6: Complete meditation instruction including posture, environment, diet, and stages",
      "The Gunas: Sattva (clarity), Rajas (activity), Tamas (inertia) — the three qualities of all nature"
    ]
  },
  {
    id: "hatha-yoga-pradipika",
    name: "Hatha Yoga Pradipika",
    sanskritName: "हठयोग प्रदीपिका",
    year: "c. 15th century CE",
    description: "A comprehensive manual on Hatha Yoga by Swami Svatmarama, covering asanas, pranayamas, mudras, and bandhas. It synthesises earlier tantric and yogic traditions into a practical handbook for bodily and mental purification. The text describes 15 asanas, 8 pranayamas, 10 mudras, and the theory of Kundalini awakening through the central channel (Sushumna Nadi).",
    authors: ["Swami Svatmarama"],
    relevance: "The primary technical reference for pranayama, mudra, and physical purification practices (shat kriyas). Provides the theoretical framework for understanding the relationship between physical postures, breath regulation, and mental states.",
    teachings: [
      "Hatha Yoga as the foundation for Raja Yoga and ultimately Samadhi",
      "The 14 principal Nadis (energy channels) and the significance of Sushumna",
      "Kumbhaka (breath retention) as the key to Kundalini awakening",
      "Shambhavi Mudra as the mother of all mudras",
      "Shatkarma (six purification practices): Neti, Dhauti, Nauli, Basti, Kapalabhati, Trataka"
    ]
  }
];
const doshaData = [
  {
    name: "Vata",
    description: "Vata (वात) is composed of the elements Akasha (space) and Vayu (air). It governs all movement in the body and mind — the flow of breath, nerve impulses, blood circulation, and the movement of thoughts. When balanced, Vata brings creativity, enthusiasm, and a lively mind. Vata is the dosha most easily disturbed in modern life due to constant stimulation, irregular routines, and overstimulation of the nervous system. When imbalanced, Vata generates the anxiety and fear responses that are among the primary causes of anger.",
    qualities: [
      "Light, dry, cold, rough, subtle, mobile, clear",
      "Associated with autumn/early winter season",
      "Active during the Vata times: 2–6 AM and 2–6 PM",
      "Seat in the body: colon, pelvic region, thighs, bones"
    ],
    imbalanceSymptoms: [
      "Anxiety, worry, fear, and panic attacks",
      "Restlessness, scattered thinking, poor concentration",
      "Insomnia and disturbed sleep",
      "Constipation, gas, bloating",
      "Dry skin, cracking joints, muscle spasms",
      "Speaking rapidly, difficulty completing tasks"
    ]
  },
  {
    name: "Pitta",
    description: "Pitta (पित्त) is composed of Agni (fire) and Jala (water). It governs all transformation in the body and mind — digestion of food and experiences, metabolism, body temperature, and the processing of emotions. Pitta is the dosha most directly associated with Krodha (anger), as fire is its dominant element. When balanced, Pitta brings intelligence, courage, and sharp discrimination. Imbalanced Pitta manifests as the explosive anger, criticism, and perfectionism that characterise Pitta psychological imbalance.",
    qualities: [
      "Hot, sharp, light, oily, liquid, spreading",
      "Associated with summer season",
      "Active during the Pitta times: 10 AM–2 PM and 10 PM–2 AM",
      "Seat in the body: small intestine, liver, spleen, eyes, skin"
    ],
    imbalanceSymptoms: [
      "Anger, irritability, and explosive temper",
      "Perfectionism and harsh self-criticism",
      "Inflammation, acid reflux, skin rashes",
      "Excessive competitiveness and control",
      "Burning sensations, excessive heat, fever",
      "Impatience and intolerance of inefficiency"
    ]
  },
  {
    name: "Kapha",
    description: "Kapha (कफ) is composed of Prithvi (earth) and Jala (water). It governs all structure and stability in the body — lubrication of joints, cellular structure, and the cohesion that holds the body together. In the mind, Kapha governs long-term memory, emotional stability, patience, and love. When balanced, Kapha is the source of endurance, compassion, and groundedness. Imbalanced Kapha manifests as depression, attachment, possessiveness, and the grief-anger response.",
    qualities: [
      "Heavy, slow, cool, oily, smooth, dense, stable",
      "Associated with spring/winter season",
      "Active during the Kapha times: 6–10 AM and 6–10 PM",
      "Seat in the body: chest, lungs, stomach, head, lymph"
    ],
    imbalanceSymptoms: [
      "Depression, grief, and emotional withdrawal",
      "Excessive attachment and possessiveness",
      "Lethargy, oversleeping, resistance to change",
      "Congestion, mucus accumulation, weight gain",
      "Slow metabolism, water retention",
      "Hoarding behaviours and reluctance to let go"
    ]
  }
];
function useBackendActor() {
  return useActor(createActor);
}
function useAllTechniques() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["techniques"],
    queryFn: async () => {
      if (!actor) return techniquesData;
      try {
        const result = await actor.getAllTechniques();
        return result.length > 0 ? result : techniquesData;
      } catch {
        return techniquesData;
      }
    },
    enabled: !isFetching,
    initialData: techniquesData
  });
}
function useTechniqueById(id) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["technique", id],
    queryFn: async () => {
      if (!actor) return techniquesData.find((t) => t.id === id) ?? null;
      try {
        const result = await actor.getTechniqueById(id);
        return result ?? techniquesData.find((t) => t.id === id) ?? null;
      } catch {
        return techniquesData.find((t) => t.id === id) ?? null;
      }
    },
    enabled: !!id && !isFetching
  });
}
function useFounderInfo() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["founder"],
    queryFn: async () => {
      if (!actor) return founderData;
      try {
        const result = await actor.getFounderInfo();
        return result ?? founderData;
      } catch {
        return founderData;
      }
    },
    enabled: !isFetching,
    initialData: founderData
  });
}
function useAncientTexts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["ancientTexts"],
    queryFn: async () => {
      if (!actor) return ancientTextsData;
      try {
        const result = await actor.getAncientTexts();
        return result.length > 0 ? result : ancientTextsData;
      } catch {
        return ancientTextsData;
      }
    },
    enabled: !isFetching,
    initialData: ancientTextsData
  });
}
function useDoshaDetails() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["doshas"],
    queryFn: async () => {
      if (!actor) return doshaData;
      try {
        const result = await actor.getDoshaDetails();
        return result.length > 0 ? result : doshaData;
      } catch {
        return doshaData;
      }
    },
    enabled: !isFetching,
    initialData: doshaData
  });
}
export {
  TechniqueCategory$1 as T,
  useTechniqueById as a,
  categoryColors as b,
  categoryLabels as c,
  useAncientTexts as d,
  useDoshaDetails as e,
  useFounderInfo as f,
  useAllTechniques as u
};
