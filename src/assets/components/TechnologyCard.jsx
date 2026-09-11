function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="group flex min-h-[310px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top Section */}
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">

        {/* Category */}
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-xs text-slate-500">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="text-xs font-semibold text-slate-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
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