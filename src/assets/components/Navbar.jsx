import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5">
        
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-xs font-bold text-white">
              DS
            </div>

            <span className="text-lg font-bold text-slate-900">
              Dev{" "}
              <span className="brand-gradient">
                Stack
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">

            <a
              href="#"
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
            >
              Contact
            </a>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">

            <button className="hidden text-sm font-medium text-slate-600 sm:block">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-105">
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-100 py-4 lg:hidden">

            <div className="flex flex-col gap-1">

              <a
                href="#"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-pink-500 hover:bg-slate-50"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;