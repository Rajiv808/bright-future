
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Our Mentors", href: "#mentors" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Bright Future Coaching! I would like to enquire about your courses."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNavigation = (event, href) => {
    event.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);

    if (target) {
      window.history.replaceState(null, "", href);

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Navbar target not found: ${href}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-6"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            className="flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <GraduationCap size={27} />
            </div>

            <div className="leading-tight">
              <span className="block text-sm font-extrabold text-slate-900 sm:text-base">
                Bright Future
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Coaching
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleNavigation(event, link.href)
                }
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop WhatsApp button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 md:flex"
          >
            Enquire Now
            <ArrowUpRight size={17} />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-blue-50 lg:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 border-t border-slate-100 pb-2 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) =>
                      handleNavigation(event, link.href)
                    }
                    className="block touch-manipulation rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openWhatsApp();
                  }}
                  className="mt-3 flex w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Enquire on WhatsApp
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
