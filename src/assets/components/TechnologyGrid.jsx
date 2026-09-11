import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";

function TechnologyGrid() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-4 text-slate-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-6xl px-5 py-20"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the{" "}
          <span className="brand-gradient">
            Technologies
          </span>
        </h2>

        <p className="mt-3 text-slate-500">
          Pick the right technologies to build your ideal developer stack.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-10 w-10 object-contain"
            />

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {technology.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {technology.description}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              {technology.category}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              ⭐ {technology.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyGrid;