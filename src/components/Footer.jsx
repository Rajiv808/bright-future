import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Courses", href: "#courses" },
  { name: "Our Mentors", href: "#mentors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "#contact" },
];

const courseLinks = [
  { name: "Foundation Classes", href: "#courses" },
  { name: "Board Preparation", href: "#courses" },
  { name: "Senior Classes", href: "#courses" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-16 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/25">
                <GraduationCap size={27} />
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight">
                  Bright Future
                </span>
                <span className="block text-xs font-medium tracking-[0.2em] text-blue-400">
                  COACHING
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Your Future Starts Here. Supporting students with clear
              explanations, strong foundations, and a positive learning
              environment.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Bright Future Coaching, I would like to enquire about admission."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
            >
              <MessageCircle size={17} />
              Enquire on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-base font-bold">Our Courses</h3>
            <ul className="mt-6 space-y-4">
              {courseLinks.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-base font-bold">Our Location</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-start gap-3 text-sm leading-6 text-slate-400 transition hover:text-blue-400"
              >
                <MapPin className="mt-1 shrink-0 text-blue-400" size={18} />
                Kolkata, West Bengal, India
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">Get in Touch</h3>

            <div className="mt-6 space-y-5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-blue-400"
              >
                <Phone className="mt-1 shrink-0 text-blue-400" size={18} />
                <span>
                  <span className="block text-xs text-slate-500">
                    Call / WhatsApp
                  </span>
                  <span className="mt-1 block font-semibold text-white">
                    +91 94771 10367
                  </span>
                </span>
              </a>

              <p className="text-sm leading-6 text-slate-400">
                Have questions about classes, subjects, or admission? Contact
                us for more information.
              </p>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
                >
                  <MessageCircle size={18} />
                </a>

                {/* Facebook Icon SVG */}
                <a
                  href="#"
                  aria-label="Facebook profile — add your link"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
                >
                  <svg
                    className="h-[18px] w-[18px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram Icon SVG */}
                <a
                  href="#"
                  aria-label="Instagram profile — add your link"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
                >
                  <svg
                    className="h-[18px] w-[18px] fill-none stroke-current stroke-[2]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {year} Bright Future Coaching. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Back to Top
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}