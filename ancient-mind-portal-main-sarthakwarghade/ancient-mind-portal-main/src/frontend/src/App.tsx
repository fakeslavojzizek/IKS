import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("./pages/Home"));
const TechniquesPage = lazy(() => import("./pages/Techniques"));
const TechniqueDetailPage = lazy(() => import("./pages/TechniqueDetail"));
const KnowledgePage = lazy(() => import("./pages/Knowledge"));
const FounderPage = lazy(() => import("./pages/Founder"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
        <p className="font-body text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const techniquesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/techniques",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TechniquesPage />
    </Suspense>
  ),
});

const techniqueDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/techniques/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TechniqueDetailPage />
    </Suspense>
  ),
});

const knowledgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/knowledge",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <KnowledgePage />
    </Suspense>
  ),
});

const founderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/founder",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FounderPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  techniquesRoute,
  techniqueDetailRoute,
  knowledgeRoute,
  founderRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
