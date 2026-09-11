function Navbar() {
  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
            DS
          </span>

          <span className="text-lg font-bold text-slate-900">
            Dev <span className="brand-gradient">Stack</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-500 transition hover:text-pink-500"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm font-medium text-slate-600 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;