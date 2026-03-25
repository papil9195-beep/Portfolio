import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "about", label: "About" },
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className={`transition-all ${scrolled ? "backdrop-blur-xl" : ""}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`mt-3 rounded-2xl ${scrolled ? "glass" : "bg-transparent"} softRing`}>
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2"
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--g2)] shadow-[0_0_18px_rgba(159,183,165,0.25)]" />
                <span className="text-sm font-semibold tracking-[0.22em] text-white/90 group-hover:text-white transition">
                  MUHEEZ
                </span>
              </button>

              <nav className="hidden md:flex items-center gap-2">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollToId(l.id)}
                    className="rounded-xl px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 transition"
                  >
                    {l.label}
                  </button>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("contact");
                  }}
                  className="ml-2 rounded-xl px-4 py-2 text-sm font-medium text-black bg-[color:var(--g1)] hover:brightness-110 transition"
                >
                  Hire Me
                </a>
              </nav>

              <button
                className="md:hidden rounded-xl p-2 hover:bg-white/5 transition"
                onClick={() => setOpen((v) => !v)}
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
                  {links.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => {
                        scrollToId(l.id);
                        setOpen(false);
                      }}
                      className="w-full text-left rounded-xl px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition"
                    >
                      {l.label}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      scrollToId("contact");
                      setOpen(false);
                    }}
                    className="mt-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-black bg-[color:var(--g1)] hover:brightness-110 transition"
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
