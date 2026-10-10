
import { motion } from "framer-motion";
import { MessageCircle, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Student Name",
    className: "Class 10",
    message:
      "Add genuine feedback from a student about their learning experience at Bright Future Coaching.",
  },
  {
    name: "Student Name",
    className: "Class 9",
    message:
      "Share what a student appreciated most, such as clear explanations, regular practice, or personal attention.",
  },
  {
    name: "Parent Name",
    className: "Parent Feedback",
    message:
      "Add genuine feedback from a parent about their child's learning experience.",
  },
];

const WHATSAPP_NUMBER = "919477110367";

export default function Testimonials() {
  const handleFeedback = () => {
    const message = encodeURIComponent(
      "Hello Bright Future Coaching, I would like to share my feedback."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <MessageCircle size={16} />
            Student & Parent Feedback
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Every Student Has a{" "}
            <span className="text-blue-600">Story.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We believe in building strong foundations, encouraging curiosity,
            and helping students move forward with confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.className}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/10 sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Quote size={23} />
                </div>

                <div className="flex gap-1 text-amber-400" aria-label="Decorative stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>

              <p className="min-h-28 text-base leading-7 text-slate-600">
                “{item.message}”
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">
                  {item.className}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleFeedback}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Share Your Feedback
          </button>
        </motion.div>
      </div>
    </section>
  );
}
