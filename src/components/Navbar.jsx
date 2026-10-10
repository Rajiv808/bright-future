
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Courses", id: "courses" },
  { name: "Mentors", id: "mentors" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      console.error(`Section not found: #${id}`);
      setIsOpen(false);
      return;
    }

    // Update the URL
    window.history.pushState(null, "", `#${id}`);

    // Scroll below the fixed navbar
    const navbarHeight = 100;
    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <GraduationCap size={27} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold leading-tight text-slate-900">
              Bright Future
            </h1>
            <p className="text-xs font-medium tracking-wide text-blue-600">
              COACHING CENTER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavigation(e, link.id)}
              className="py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "contact")}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavigation(e, link.id)}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "contact")}
            className="mt-3 block rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
}
