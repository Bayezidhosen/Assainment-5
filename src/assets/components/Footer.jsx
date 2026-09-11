function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-14">

        {/* Footer Main */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-xs font-bold">
                DS
              </div>

              <h2 className="text-xl font-bold">
                Dev <span className="brand-gradient">Stack</span>
              </h2>

            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Build your perfect developer stack with modern
              technologies, powerful tools, and a better
              development workflow.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                F
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                GH
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-white"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-white"
                >
                  Your Stack
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Cookie Policy
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;