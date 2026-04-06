// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion } from "framer-motion";
import { Building2, PanelsTopLeft, Sparkles, Wrench } from "lucide-react";
import { services } from "../data/siteContent";

const serviceIcons = {
  "Landing Pages": PanelsTopLeft,
  "Business Websites": Building2,
  "AI Site Refinement": Sparkles,
  "Frontend Fixes": Wrench,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 mt-16 sm:scroll-mt-28 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest uppercase text-white/60">Services</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
            What you can hire me for
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Focused frontend help for teams using AI, templates, or rough concepts that still
            need a strong human finish before they are ready for clients.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.title];

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="rounded-2xl border border-white/10 bg-black/20 p-3 text-[color:var(--g1)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{service.desc}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
                      {service.fit}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
