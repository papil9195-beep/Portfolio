// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion } from "framer-motion";
import { aboutCards } from "../data/siteContent";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 mt-16 sm:scroll-mt-28 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <p className="text-sm tracking-widest uppercase text-white/60">About</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          AI speed, human polish.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
          I work where AI-generated sites usually fall apart: weak hierarchy, rough spacing,
          inconsistent mobile layouts, and generic sections that do not build trust. My job is to
          keep the speed of AI while making the final website feel deliberate, premium, and ready
          for real clients.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aboutCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
