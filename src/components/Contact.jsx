import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

/** YOUR DETAILS */
const EMAIL = "papil9195@gmail.com";
const PHONE = "+2347039195783"; // include country code
const WHATSAPP_NUMBER = "2347039195783"; // digits only, no +

export default function Contact() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent(
    "Hi Muheez, I saw your portfolio. I want to talk about a project.\n\nDetails:\n- Budget:\n- Timeline:\n- What you need:\n"
  )}`;
  const tel = `tel:${PHONE}`;
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Muheez! I saw your portfolio. Can we discuss a project?"
  )}`;

  return (
    <section id="contact" className="mt-16 sm:mt-20 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <p className="text-sm tracking-widest uppercase text-white/60">Contact</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
          Let's Work Together.
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          I'm open to exciting opportunities. Reach out and let's discuss how we can create something amazing.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={mailto}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl p-3 bg-black/25 border border-white/10">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm text-white/60 group-hover:text-white/70 transition">{EMAIL}</p>
              </div>
            </div>
          </a>

          <a
            href={tel}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl p-3 bg-black/25 border border-white/10">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Call</p>
                <p className="text-sm text-white/60 group-hover:text-white/70 transition">{PHONE}</p>
              </div>
            </div>
          </a>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl p-3 bg-black/25 border border-white/10">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-white/60 group-hover:text-white/70 transition">Chat instantly</p>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
