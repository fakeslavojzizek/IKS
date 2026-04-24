export function UnderConstruction() {
  return (
    <div className="retro-panel p-6 construction-sign">
      <div className="text-center">
        <div className="text-4xl mb-2">🚧</div>
        <h2 className="text-3xl font-bold mb-2">
          UNDER CONSTRUCTION
        </h2>
        <div className="text-4xl mb-2">👷</div>
        <p className="text-lg">
          This section is currently being built!
        </p>
        <p className="text-sm mt-2">
          Check back soon for updates!
        </p>
        <div className="flex justify-center gap-4 mt-4 text-4xl">
          <span className="animate-bounce">🔨</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>⚒️</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🔧</span>
        </div>
      </div>
    </div>
  );
}
