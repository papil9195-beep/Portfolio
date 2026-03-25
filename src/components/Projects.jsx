import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Real Estate Landing",
    desc: "Property-focused website with strong layout and high conversion design.",
    live: "https://landing-page-for-real-estate.vercel.app/",
    code: "https://github.com/",
    tags: ["Frontend", "Brand", "Conversion"],
  },
  {
    name: "Fencing Club",
    desc: "Modern web project with clean UI, responsive design, and smooth user experience.",
    live: "https://fencing-club-taupe.vercel.app/",
    code: "https://github.com/",
    tags: ["UI", "Responsive", "Performance"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass softRing rounded-3xl p-6 sm:p-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-widest uppercase text-white/60">Projects</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">Selected work</h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            Keep it focused: 2–4 strong projects beats 12 weak ones.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/65">{p.desc}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    className="rounded-xl p-2 bg-black/20 hover:bg-black/30 border border-white/10 transition"
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    className="rounded-xl p-2 bg-black/20 hover:bg-black/30 border border-white/10 transition"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
