import { motion } from "framer-motion";

const items = [
  { title: "Frontend", desc: "React, Tailwind, responsive UI, animations." },
  { title: "Backend", desc: "APIs, auth, databases, clean logic." },
  { title: "Delivery", desc: "Fast communication, clean code, reliable results." },
];

export default function About() {
  return (
    <section id="about" className="mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <p className="text-sm tracking-widest uppercase text-white/60">About</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
          Crafting code that feels smooth, not noisy.
        </h2>
        <p className="mt-4 max-w-3xl text-white/70">
          I focus on modern design, clean structure, and performance. If your product needs
          polish, motion, and reliability, I’m your guy.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/65">{it.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
