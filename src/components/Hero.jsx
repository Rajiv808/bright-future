
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  GraduationCap,
  BookOpen,
  Users,
  Star,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const stats = [
  { icon: Users, value: "Personal", label: "Student Guidance" },
  { icon: BookOpen, value: "Focused", label: "Learning Approach" },
  { icon: Star, value: "Quality", label: "Academic Support" },
];

export default function Hero() {
  const enquireOnWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Bright Future Coaching! I would like to know more about your tuition classes."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#10224b] pt-28 sm:min-h-[800px] lg:min-h-[850px]"
    >
      {/* Classroom background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/coaching1.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08152f]/95 via-[#10224b]/85 to-[#10224b]/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08152f]/65 via-transparent to-[#08152f]/20" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 top-32 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-blue-100 backdrop-blur-md sm:text-sm">
            <GraduationCap size={17} className="text-amber-300" />
            Welcome to Bright Future Coaching
          </div>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Build Your
            <span className="mt-2 block">
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
                Bright Future.
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Strong foundations. Clear concepts. Personal guidance.
            Helping students learn with confidence and work towards
            their academic goals.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={enquireOnWhatsApp}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Enquire About Classes
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              <Play size={17} className="fill-current" />
              Explore Courses
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/20 pt-7 sm:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="min-w-0">
                <Icon size={20} className="mb-3 text-blue-300" />
                <p className="text-sm font-bold text-white sm:text-base">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right floating information card */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-3xl border border-white/25 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-4"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/coaching2.jpg"
                alt="Bright Future Coaching classroom"
                className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08152f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-lg">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  A supportive learning environment
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Learn. Improve. Achieve.
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Every step forward starts with understanding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative floating badge */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-white/60 bg-white p-3 shadow-xl sm:-left-8 sm:p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BookOpen size={23} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Learn with Clarity
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Build strong foundations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#10224b]/70 to-transparent" />
    </section>
  );
}
