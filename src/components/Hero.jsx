import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import meImage from "../assets/me.jpg";

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
    <section className="pt-14 sm:pt-18">
      <div className="gridGlow rounded-3xl softRing glass overflow-hidden">
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-sm tracking-widest uppercase text-white/60"
              >
                Full Stack Developer · Web Experiences
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight text-white"
              >
                Muheez,
                <span className="text-white/70"> building sleek products</span>
                <br />
                <span className="text-white/70">that feel expensive.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="mt-5 max-w-xl text-base sm:text-lg text-white/70"
              >
                Modern UI, smooth motion, and solid backend logic. I ship clean, fast, responsive products
                that clients can trust.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-black bg-[color:var(--g1)] hover:brightness-110 transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-white/85 hover:text-white bg-white/5 hover:bg-white/8 border border-white/10 transition"
                >
                  Contact Me
                </a>

                <div className="flex items-center gap-2 ml-1">
                  <a
                    className="rounded-xl p-3 bg-white/5 hover:bg-white/8 border border-white/10 transition"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>

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

            {/* Portrait card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.25, duration: 0.6 } }}
              className="relative"
            >
              <div className="glass softRing rounded-3xl p-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(500px 300px at 50% 20%, rgba(159,183,165,0.18), transparent 55%)",
                    }}
                  />
                  <div className="aspect-[4/5] w-full">
                    <img 
                      src={meImage}
                      alt="Muheez" 
                      className="w-full h-full object-cover rounded-2xl" 
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                  <span className="uppercase tracking-widest">Available</span>
                  <span className="text-white/80">Freelance · Remote</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
