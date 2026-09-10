import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">

          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-lg font-bold">
            ◈
          </span>

          <span className="brand-gradient text-xl font-extrabold">
            Dev Stack
          </span>

        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">

          <button className="hidden px-3 py-2 text-sm font-medium text-slate-300 hover:text-white sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105">
            Sign Up
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link}
              </a>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;