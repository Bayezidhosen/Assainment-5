function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="group flex min-h-[315px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Details */}
      <div className="mt-4 grid grid-cols-3 items-center gap-2 border-t border-slate-100 pt-4">

        <span className="w-fit rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {technology.difficulty}
        </span>

        <span className="text-right text-[11px] font-semibold text-slate-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;