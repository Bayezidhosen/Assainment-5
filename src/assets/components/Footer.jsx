function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">

        {/* Brand */}
        <div className="md:col-span-2">

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-xs font-bold text-white">
              DS
            </div>

            <span className="text-lg font-bold">
              Dev{" "}
              <span className="brand-gradient">
                Stack
              </span>
            </span>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-5 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-pink-500">
              GitHub
            </a>

            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>

            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>

        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <a href="#" className="block hover:text-pink-500">
              Home
            </a>

            <a href="#technologies" className="block hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="block hover:text-pink-500">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <a href="#" className="block hover:text-pink-500">
              About
            </a>

            <a href="#" className="block hover:text-pink-500">
              Contact
            </a>

            <a href="#" className="block hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;