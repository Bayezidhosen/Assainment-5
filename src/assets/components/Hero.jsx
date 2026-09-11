import image from "./photo/banner-stack.png";
function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-24">

        {/* Left Content */}
        <div className="max-w-xl">


          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
           Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#technologies"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Technologies
              <span className="ml-2">→</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative">

          {/* Background Glow */}
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-pink-100 blur-3xl"></div>

          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-violet-100 blur-3xl"></div>

          {/* Main Card */}
          
            <div className="flex  items-center justify-center rounded-xl  text-white">
              <img src={image} alt="Hero" />
            </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;