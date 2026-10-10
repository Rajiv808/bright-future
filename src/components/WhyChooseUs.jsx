
import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Users,
  MessageCircle,
  Lightbulb,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const benefits = [
  {
    icon: BookOpen,
    number: "01",
    title: "Strong Fundamentals",
    description:
      "Focus on understanding the basics before moving on to more advanced topics.",
  },
  {
    icon: Users,
    number: "02",
    title: "Student-Focused Learning",
    description:
      "Encourage questions, identify learning difficulties, and support individual progress.",
  },
  {
    icon: Target,
    number: "03",
    title: "Exam Preparation",
    description:
      "Practise important topics and develop better revision and answer-writing habits.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Clear Explanations",
    description:
      "Make challenging concepts easier to understand through structured lessons.",
  },
  {
    icon: ClipboardCheck,
    number: "05",
    title: "Regular Practice",
    description:
      "Strengthen understanding through exercises, revision, and topic-wise practice.",
  },
  {
    icon: MessageCircle,
    number: "06",
    title: "Supportive Guidance",
    description:
      "Create a welcoming learning environment where students feel comfortable asking questions.",
  },
];

export default function WhyChooseUs() {
  const enquireNow = () => {
    const message = encodeURIComponent(
      "Hello Bright Future Coaching! I would like to know more about your teaching approach and admission process."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f7f9ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 sm:text-sm">
            Why Bright Future Coaching?
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More Than Tuition.
            <span className="mt-2 block text-blue-600">
              A Better Way to Learn.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our approach focuses on understanding, consistent practice,
            and helping every student become a more confident learner.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="text-2xl font-black text-slate-100 transition-colors group-hover:text-blue-100">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Classroom feature banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-16 overflow-hidden rounded-3xl bg-[#10224b] shadow-2xl shadow-blue-950/10"
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Your Learning Journey
              </span>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Every Step Towards a
                <span className="block text-blue-300">
                  Brighter Future.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                Start with the right guidance, build a strong foundation,
                and keep improving through regular learning and practice.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Concept-focused teaching",
                  "Practice and revision",
                  "Guidance for academic goals",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-white"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={enquireNow}
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Enquire on WhatsApp
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
              <img
                src="/images/coaching2.jpg"
                alt="Classroom learning environment at Bright Future Coaching"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10224b]/40 to-transparent lg:bg-gradient-to-r lg:from-[#10224b]/20 lg:to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
