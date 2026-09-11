function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            {stack.length} Technology Selected
          </p>
        </div>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
            🧰
          </div>

          <h3 className="mt-4 font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-5 text-slate-400">
            Add technologies to build your ideal developer stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">

          {/* Stack Items */}
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div className="flex items-center gap-3">

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {technology.category}
                  </p>
                </div>

              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-lg text-slate-400 transition hover:text-red-500"
                title="Remove"
              >
                ✕
              </button>

            </div>
          ))}

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-3 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>

        </div>
      )}

    </aside>
  );
}

export default YourStack;