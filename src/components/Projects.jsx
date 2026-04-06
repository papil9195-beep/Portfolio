// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/siteContent";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 mt-16 sm:scroll-mt-28 sm:mt-20">
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
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Selected work</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/60">
            Two strong projects with clear proof will win more trust than a longer list with no
            context.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-[16/11] w-full object-cover object-top sm:aspect-[16/10]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70 sm:left-4 sm:top-4 sm:text-xs sm:tracking-[0.18em]">
                  {project.eyebrow}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{project.summary}</p>
                </div>
                <div className="flex shrink-0 gap-2 self-start">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 transition hover:bg-black/30"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 transition hover:bg-black/30"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live site`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Role</p>
                  <p className="mt-2 leading-6 text-white/80">{project.role}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Outcome</p>
                  <p className="mt-2 leading-6 text-white/80">{project.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
