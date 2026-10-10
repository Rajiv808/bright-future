
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Target,
  Users,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description:
      "Understand the concepts clearly instead of simply memorising answers.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "A supportive learning environment that values every student's progress.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Teaching",
    description:
      "Focused lessons and practice to help students work towards their academic goals.",
  },
  {
    icon: Lightbulb,
    title: "Clear Explanations",
    description:
      "Difficult topics broken down into simpler, easier-to-understand steps.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
            About Our Coaching
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Education That Builds
            <span className="mt-2 block text-blue-600">
              Confidence for Life
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            At Bright Future Coaching, we believe every student deserves
            clear explanations, individual encouragement, and the opportunity
            to reach their potential.
          </p>
        </motion.div>

        {/* Image and content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Classroom image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-blue-500 sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-blue-950/10">
              <img
                src="/images/coaching2.jpg"
                alt="Classroom at Bright Future Coaching"
                loading="lazy"
                className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[440px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10224b]/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-lg sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <p className="text-lg font-extrabold text-white sm:text-xl">
                  A Place to Learn and Grow
                </p>
                <p className="mt-1 text-sm leading-6 text-blue-50">
                  Building understanding, confidence, and good learning habits.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-right-5 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen size={25} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Learn with Purpose
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  One concept at a time
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text and features */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pt-3 lg:pt-0"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Teaching Approach
            </p>

            <h3 className="mt-4 text-2xl font-black leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
              Helping Students Understand, Not Just Memorise
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our focus is on strengthening the basics, encouraging questions,
              practising important topics, and developing a positive attitude
              towards learning. We aim to make learning more structured,
              engaging, and meaningful.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h4 className="font-bold text-slate-900">{title}</h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Our Courses
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={19} className="text-emerald-500" />
                Focused on student growth
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
