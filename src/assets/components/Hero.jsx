function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left">

          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            🚀 Build Better. Code Smarter.
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Build Your
            <span className="brand-gradient block">
              Developer Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
            Discover the modern technologies, frameworks, languages,
            databases, and tools that help developers build powerful
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <a
              href="#technologies"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Learn More
            </a>

          </div>

          {/* Small Stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">

            <div>
              <h3 className="text-2xl font-bold text-white">15+</h3>
              <p className="text-sm text-slate-500">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">7</h3>
              <p className="text-sm text-slate-500">
                Categories
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-sm text-slate-500">
                Developer Focused
              </p>
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="relative z-10 flex justify-center">

          <div className="relative w-full max-w-md">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-violet-600/20 blur-2xl"></div>

            {/* Main Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

              {/* Browser Header */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>

              {/* Code */}
              <div className="rounded-2xl bg-slate-900 p-5 font-mono text-sm leading-7">

                <p className="text-slate-500">
                  // My Developer Stack
                </p>

                <p>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-400">stack</span> = [
                </p>

                <p className="pl-5 text-orange-400">
                  "React",
                </p>

                <p className="pl-5 text-cyan-400">
                  "TypeScript",
                </p>

                <p className="pl-5 text-green-400">
                  "Node.js",
                </p>

                <p className="pl-5 text-violet-400">
                  "MongoDB",
                </p>

                <p>];</p>

                <p className="mt-3">
                  <span className="text-pink-400">console</span>.
                  <span className="text-yellow-300">log</span>(
                  <span className="text-green-400">
                    "Let's build!"
                  </span>
                  );
                </p>

              </div>

              {/* Tech Pills */}
              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  React
                </span>

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  TypeScript
                </span>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-300">
                  Node.js
                </span>

                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  MongoDB
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;