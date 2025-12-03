import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const float = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

/* ----- Fixed NameCycle (parent-driven stagger + simultaneous exit) ----- */
function NameCycle({
  name = "SHAIK SIDDIQ AHAMAD",
  enterStagger = 0.05,
  enterDuration = 0.45,
  holdMs = 400,
  exitDuration = 0.45,
  pauseMs = 700,
  accent = "#A855F7",
}) {
  const letters = Array.from(name);
  const controls = useAnimation();
  const reduce = useReducedMotion();

  // Parent variants control stagger for 'enter' and no-stagger for 'exit'
  const parentVariants = {
    hidden: {},
    enter: {
      transition: { staggerChildren: enterStagger, when: "beforeChildren" },
    },
    idle: { transition: { when: "afterChildren" } },
    exit: { transition: { when: "afterChildren" } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9, textShadow: '0 0 0 rgba(168, 85, 247, 0)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      textShadow: [
        '0 0 0 rgba(168, 85, 247, 0)',
        '0 0 10px rgba(168, 85, 247, 0.5)',
        '0 0 0 rgba(168, 85, 247, 0)'
      ],
      transition: {
        duration: 0.6,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
        textShadow: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }
    }),
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, duration: enterDuration },
    },
    idle: { opacity: 1, y: 0, scale: 1 },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.96,
      transition: { duration: exitDuration, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (reduce) {
      // show static name if the user prefers reduced motion
      controls.set("idle");
      return;
    }

    let mounted = true;
    (async () => {
      await controls.set("hidden");
      await new Promise((r) => setTimeout(r, 300));

      while (mounted) {
        // 1) trigger staggered enter (parent -> children)
        await controls.start("enter");

        // safe wait for enter animations to complete
        const enterTotal = enterDuration * 1000 + letters.length * enterStagger * 1000 + 80;
        await new Promise((r) => setTimeout(r, enterTotal));

        // 2) hold
        await controls.start("idle");
        await new Promise((r) => setTimeout(r, holdMs));

        // 3) exit simultaneously (children animate exit at same time)
        await controls.start("exit");

        // wait for exit + pause
        await new Promise((r) => setTimeout(r, exitDuration * 1000 + pauseMs));
      }
    })();

    return () => {
      mounted = false;
      controls.stop();
    };
  }, [controls, letters.length, enterDuration, enterStagger, holdMs, exitDuration, pauseMs, reduce]);

  return (
    <div className="relative inline-flex items-center justify-center group">
      {/* Animated glow effect */}
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200"
        aria-hidden="true"
      />
      
      <div className="relative">
        <span className="sr-only">{name}</span>
        <motion.div
          className="inline-flex flex-wrap items-center gap-[6px] relative z-10"
          variants={parentVariants}
          initial="hidden"
          animate={controls}
          aria-hidden
        >
          {letters.map((ch, i) => {
            if (ch === " ") return <span key={`sp-${i}`} className="w-2 md:w-3" />;
            return (
              <motion.span
                key={`${ch}-${i}`}
                className="inline-block select-none"
                variants={childVariants}
                whileHover={{ scale: 1.08, rotate: [0, 4, -3, 0] }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-block" }}
              >
                <motion.span
                  className="text-[1.4rem] md:text-[2.2rem] lg:text-[3.0rem] font-extrabold leading-[0.85] text-white"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  {ch}
                </motion.span>
              </motion.span>
            );
          })}
        </motion.div>

        {/* hover glow CSS; respects reduced-motion */}
        <style jsx>{`
          @media (hover: hover) and (pointer: fine) {
            .inline-flex :global(span):hover > span {
              text-shadow: 0 10px 36px ${accent}40, 0 3px 12px ${accent}30;
              transform: translateZ(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .inline-flex :global(span) {
              transition: none !important;
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

/* small wrapper (optional) */
function NameCycleWrapper({ name, accent }) {
  return <NameCycle name={name} accent={accent} />;
}

/* --------------------------- HeroSection --------------------------- */
export default function HeroSection() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-20, 20], [8, -8]);
  const rotateY = useTransform(tiltX, [-20, 20], [-8, 8]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    tiltX.set((x / rect.width) * 40);
    tiltY.set((y / rect.height) * 40);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const name = "SHAIK SIDDIQ AHAMAD";
  const accent = "#A855F7";

  return (
    <section 
      id="hero" 
      className="relative pt-20 pb-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #0F172A 0%, #0B0B0B 100%)',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSgxNjgsODUsMjQ3LDAuMDUpIiBkPSJNMjcuNSw3MC41YzAsMC0yOC0xOS01LjUtNDAuNWMyMi41LTIxLjUsNDUuNSwzLDQ1LjUsM2wtNDAsMzcuNXoiLz48L3N2Zz4=')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.15)_0%,_transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            {/* NameCycle above Full-Stack label */}
            <div className="flex flex-col items-center">
              <NameCycleWrapper name={name} accent={accent} />
              <motion.p custom={0} variants={fadeUp} className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
                Full-Stack Developer
              </motion.p>
            </div>

            <motion.h2
              id="hero-heading"
              custom={1}
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Building calm,&nbsp;
              <span className="bg-gradient-to-r from-white via-accent to-fuchsia-400 bg-clip-text text-transparent">
                production-ready
              </span>
              &nbsp;web experiences.
            </motion.h2>

            <motion.p 
              className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300"
              variants={fadeUp}
              custom={1}
            >
              I'm a <span className="font-medium text-white">passionate Full-Stack Developer</span> with expertise in building modern web applications using the <span className="text-purple-300">MERN stack</span>.
            </motion.p>

            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
              variants={fadeUp}
              custom={1.5}
            >
              <motion.a
                href="#projects"
                className="relative group px-8 py-4 text-sm font-medium text-white rounded-lg overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>View My Work</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="relative group px-8 py-4 text-sm font-medium text-white border border-gray-700 rounded-lg overflow-hidden"
                whileHover={{ y: -2, borderColor: '#A855F7' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Contact Me</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="btn-base btn-primary text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="btn-base btn-outline text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap items-center gap-4 text-xs text-text-secondary">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-text-secondary">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:siddiqshaik053@gmail.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-[#050505] text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://github.com/siddiq53"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-[#050505] text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddiq05"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-[#050505] text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              className="text-center mb-16 relative z-10"
            >
              <motion.span 
                className="text-sm font-semibold uppercase tracking-wider text-accent inline-block mb-2"
                variants={fadeUp}
              >
                <span className="relative">
                  About Me
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </motion.span>
              <motion.h2 
                className="mt-2 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 sm:text-5xl md:text-6xl"
                variants={fadeUp}
                custom={0.5}
              >
                Get to Know Me Better
              </motion.h2>
              <motion.div 
                className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            <div className="rounded-2xl border border-border-subtle bg-[#050505] p-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-text-secondary">Problem Solving</p>
              <p className="mt-1 text-sm font-semibold text-text-primary">200+ DSA</p>
              <p className="mt-1 text-[0.7rem]">Strong fundamentals in data structures, algorithms, and patterns.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
