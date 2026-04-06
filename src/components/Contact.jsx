// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion } from "framer-motion";
import { FileText, Mail, MessageCircle, Phone } from "lucide-react";
import { profile } from "../data/siteContent";

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent(
    "Hi Muheez, I saw your portfolio. I want to talk about a project.\n\nDetails:\n- Budget:\n- Timeline:\n- What you need:\n"
  )}`;
  const tel = `tel:${profile.phone}`;
  const wa = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    "Hi Muheez! I saw your portfolio. Can we discuss a project?"
  )}`;

  return (
    <section id="contact" className="scroll-mt-24 mb-16 mt-16 sm:scroll-mt-28 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <p className="text-sm tracking-widest uppercase text-white/60">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          Let&apos;s Work Together.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Need a landing page, a business site, or a rough AI-generated build cleaned up into
          something client-ready? Reach out and let&apos;s make it sharper.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a
            href={mailto}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-xl border border-white/10 bg-black/25 p-3">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white">Email</p>
                <p className="break-all text-sm text-white/60 transition group-hover:text-white/70">
                  {profile.email}
                </p>
              </div>
            </div>
          </a>

          <a
            href={tel}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-xl border border-white/10 bg-black/25 p-3">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white">Call</p>
                <p className="break-all text-sm text-white/60 transition group-hover:text-white/70">
                  {profile.phone}
                </p>
              </div>
            </div>
          </a>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-xl border border-white/10 bg-black/25 p-3">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-white/60 transition group-hover:text-white/70">
                  Chat instantly
                </p>
              </div>
            </div>
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-xl border border-white/10 bg-black/25 p-3">
                <FileText className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white">Resume</p>
                <p className="text-sm text-white/60 transition group-hover:text-white/70">
                  Open PDF
                </p>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
