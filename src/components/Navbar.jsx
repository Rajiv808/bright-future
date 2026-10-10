
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

  const closeMenu = () => setIsOpen(false);

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

  const handleEnquiry = () => {
    closeMenu();
    openWhatsApp();
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-6"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg shadow-blue-950/5 backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
              <GraduationCap size={27} strokeWidth={2.2} />
            </div>

            <div className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                Bright Future
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 sm:text-[11px]">
                Coaching
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Enquiry Button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 md:flex"
          >
            Enquire Now
            <ArrowUpRight size={17} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="relative z-[110] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-[105] overflow-hidden lg:hidden"
            >
              <div className="mt-4 border-t border-slate-100 pb-2 pt-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={closeMenu}
                    className="block min-h-12 touch-manipulation rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <button
                  type="button"
                  onClick={handleEnquiry}
                  className="mt-3 flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
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
