
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919477110367";

export default function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(true);

  const message = encodeURIComponent(
    "Hello Bright Future Coaching! I would like to know more about your courses and admission process."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-[260px] rounded-2xl border border-slate-200 bg-white p-4 pr-9 shadow-xl shadow-slate-900/10"
        >
          <button
            onClick={() => setShowMessage(false)}
            aria-label="Close WhatsApp message"
            className="absolute right-2 top-2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={16} />
          </button>

          <p className="text-sm font-bold text-slate-900">
            Need help with admission?
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Message us on WhatsApp. We're happy to help!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700"
          >
            Start a Conversation
            <MessageCircle size={16} />
          </a>
        </motion.div>
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Bright Future Coaching on WhatsApp"
        title="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/25 ring-4 ring-white transition-colors hover:bg-[#1ebe5d] sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <MessageCircle className="relative" size={29} strokeWidth={2.2} />
      </motion.a>
    </div>
  );
}
