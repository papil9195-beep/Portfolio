// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import meImage from "../assets/me.jpg";
import { profile } from "../data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="scroll-mt-24 pt-14 sm:scroll-mt-28 sm:pt-20">
      <div className="gridGlow rounded-3xl softRing glass overflow-hidden">
        <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-xs uppercase tracking-[0.24em] text-white/60 sm:text-sm"
              >
                {profile.role} | Website refinement
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                {profile.shortName},
                <span className="text-white/70"> delivering AI speed with</span>
                <br />
                <span className="text-white/70">a polished human finish.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg"
              >
                {profile.headline} {profile.intro}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="mt-6 flex flex-wrap gap-2"
              >
                {profile.heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="mt-7 flex flex-wrap items-stretch gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[color:var(--g1)] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  View Projects
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/8 hover:text-white"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/8 hover:text-white"
                >
                  Contact Me
                </a>

                <div className="flex items-center gap-2 sm:ml-1">
                  <a
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/8"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {profile.linkedin ? (
                    <a
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/8"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                className="mt-10 flex items-center gap-2 text-white/50"
              >
                <ArrowDown className="h-4 w-4" />
                <span className="text-sm">Scroll</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.25, duration: 0.6 } }}
              className="relative"
            >
              <div className="glass softRing rounded-3xl p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background:
                        "radial-gradient(500px 320px at 50% 18%, rgba(159,183,165,0.26), transparent 55%)",
                    }}
                  />
                  <div className="aspect-[4/4.9] w-full sm:aspect-[4/5]">
                    <img
                      src={meImage}
                      alt={profile.fullName}
                      className="h-full w-full rounded-2xl object-cover object-center brightness-110 contrast-110 saturate-105"
                    />
                  </div>
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">
                      Best fit
                    </p>
                    <p className="mt-2 text-xs leading-6 text-white/80 sm:text-sm">
                      AI-generated website cleanup, responsive landing pages, and frontend polish
                      for client-facing builds.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      What I improve
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Hierarchy, spacing, mobile views, CTA flow, and final visual polish.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Core stack
                    </p>
                    <p className="mt-2 text-sm text-white/80">{profile.tools.join(", ")}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-white/60">
                  <span className="uppercase tracking-widest">Available</span>
                  <span className="text-white/80">{profile.availability}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
