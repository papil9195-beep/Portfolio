import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars -- framer-motion is used through JSX member syntax.
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/siteContent";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 8;
      setScrolled((prevScrolled) => (prevScrolled === nextScrolled ? prevScrolled : nextScrolled));
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className={`transition-all ${scrolled ? "md:backdrop-blur-xl" : ""}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`mt-3 rounded-2xl ${scrolled ? "glass" : "bg-transparent"} softRing`}>
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2"
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--g2)] shadow-[0_0_18px_rgba(159,183,165,0.25)]" />
                <span className="text-sm font-semibold tracking-[0.22em] text-white/90 transition group-hover:text-white">
                  MUHEEZ
                </span>
              </button>

              <nav className="hidden items-center gap-2 md:flex">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToId(link.id)}
                    className="rounded-xl px-4 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-4 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToId("contact");
                  }}
                  className="ml-2 rounded-xl bg-[color:var(--g1)] px-4 py-2 text-sm font-medium text-black transition hover:brightness-110"
                >
                  Hire Me
                </a>
              </nav>

              <button
                className="rounded-xl p-2 transition hover:bg-white/5 md:hidden"
                onClick={() => setOpen((value) => !value)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="md:hidden"
              >
                <div className="mt-3 glass softRing rounded-2xl p-3">
                  {links.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        scrollToId(link.id);
                        setOpen(false);
                      }}
                      className="w-full rounded-xl px-4 py-3 text-left text-white/80 transition hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    Resume
                  </a>
                  <button
                    onClick={() => {
                      scrollToId("contact");
                      setOpen(false);
                    }}
                    className="mt-2 w-full rounded-xl bg-[color:var(--g1)] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                  >
                    Hire Me
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
