
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Clock,
  GraduationCap,
  MapPinned,
  ExternalLink,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    studentClass: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Bright Future Coaching!

Name: ${form.name}
Phone: ${form.phone}
Student's Class: ${form.studentClass}
Enquiry: ${form.message || "I would like to know more about your coaching classes."}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <MapPin size={16} />
            Visit Our Coaching Centre
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let's Build a{" "}
            <span className="text-blue-600">Brighter Future.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Contact Bright Future Coaching to learn about classes, subjects,
            batch timings, and admissions.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9 lg:col-span-2"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                <GraduationCap size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Bright Future Coaching
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Your Future Starts Here. Connect with us to find the right
                learning support for your child.
              </p>

              <div className="mt-9 space-y-6">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <MessageCircle
                    className="mt-1 shrink-0 text-blue-400"
                    size={21}
                  />
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp Enquiry</p>
                    <p className="mt-1 font-semibold">+91 94771 10367</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0 text-blue-400" size={21} />
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="mt-1 font-semibold">+91 94771 10367</p>
                  </div>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl transition-colors hover:text-blue-300"
                >
                  <MapPin className="mt-1 shrink-0 text-blue-400" size={21} />
                  <div>
                    <p className="text-sm text-slate-400">Our Location</p>
                    <p className="mt-1 font-semibold">
                      Kolkata, West Bengal, India
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-blue-300">
                      Get Directions <ExternalLink size={14} />
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 shrink-0 text-blue-400" size={21} />
                  <div>
                    <p className="text-sm text-slate-400">Class Timings</p>
                    <p className="mt-1 font-semibold">
                      Contact us for available batches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9 lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Send an Enquiry
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete the form to prepare your enquiry in WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Student / Parent Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      })
                    }
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="student-class"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Student's Class *
                </label>
                <select
                  id="student-class"
                  required
                  value={form.studentClass}
                  onChange={(e) =>
                    setForm({ ...form, studentClass: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Select class</option>
                  <option value="Class 5–8">Class 5–8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="What would you like to know?"
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Send Enquiry on WhatsApp
                <Send size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                WhatsApp will open with your enquiry ready to send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Google Maps integration */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
        >
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPinned size={21} />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Find Us on the Map
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                Kolkata, West Bengal
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Explore the area and get directions using Google Maps.
              </p>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Open Google Maps <ExternalLink size={16} />
            </a>
          </div>

          <div className="h-[320px] w-full sm:h-[420px]">
            <iframe
              title="Google Map of Kolkata, West Bengal"
              src="https://maps.google.com/maps?q=Kolkata%2C%20West%20Bengal%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
