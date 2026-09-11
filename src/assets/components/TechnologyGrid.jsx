import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function TechnologyGrid({ stack, onAdd, onRemove, onRemoveAll }) {
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
        <span className="loading loading-spinner loading-lg text-pink-500"></span>

        <p className="mt-4 text-sm text-slate-500">
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
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the{" "}
          <span className="brand-gradient">
            Technologies
          </span>
        </h2>

        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid + Sidebar */}
      <div className="grid gap-5 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:col-span-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={onAdd}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
            />
          ))}
        </div>

        {/* Your Stack */}
        <YourStack
          stack={stack}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />

      </div>
    </section>
  );
}

export default TechnologyGrid;