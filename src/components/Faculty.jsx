
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const mentors = [
  {
    name: "Mentor One",
    role: "Academic Mentor",
    image: "/images/mentor1.png",
    subject: "Concept-Based Learning",
    description:
      "Helping students strengthen their fundamentals and understand concepts clearly.",
    icon: BookOpen,
  },
  {
    name: "Mentor Two",
    role: "Academic Mentor",
    image: "/images/mentor2.png",
    subject: "Guided Learning",
    description:
      "Encouraging curiosity, consistent practice, and confidence in learning.",
    icon: Lightbulb,
  },
  {
    name: "Mentor Three",
    role: "Academic Mentor",
    image: "/images/mentor3.png",
    subject: "Academic Support",
    description:
      "Supporting students with structured learning and examination preparation.",
    icon: GraduationCap,
  },
];

export default function Faculty() {
  return (
    <section
      id="mentors"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 sm:text-sm">
            <GraduationCap size={16} />
            Meet Our Mentors
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Guidance That Helps You
            <span className="mt-2 block text-blue-600">
              Move Forward
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every student learns differently. Our focus is on clear
            explanations, supportive guidance, and building confidence
            one lesson at a time.
          </p>
        </motion.div>

        {/* Mentor cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => {
            const Icon = mentor.icon;

            return (
              <motion.article
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-950/10"
              >
                {/* Mentor photo */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    loading="lazy"
                    className="h-[330px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-[360px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10224b]/75 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                        {mentor.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-white">
                        {mentor.name}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600">
                      <Icon size={22} />
                    </div>
                  </div>
                </div>

                {/* Mentor details */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm font-bold text-blue-600">
                    {mentor.subject}
                  </p>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                    {mentor.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600"
                    >
                      Contact Us
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
