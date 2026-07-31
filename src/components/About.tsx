"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024", "#ffffff"];

interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "ALGORITHMIC\nBATTLES",
    description:
      "Face off against the toughest competitive programming problems. Data structures, dynamic programming, graph theory — prove your mastery across every domain.",
    icon: "⚔️",
    color: "#0085C7",
  },
  {
    number: "02",
    title: "TEAM\nSTRATEGY",
    description:
      "Form alliances. Divide & conquer. CodeRush isn't just about individual skill — it's about coordinating under pressure in relay and 3v3 elimination rounds.",
    icon: "🏟️",
    color: "#F4C300",
  },
  {
    number: "03",
    title: "OLYMPIC\nSPIRIT",
    description:
      "Inspired by the greatest athletic traditions, CodeRush brings ceremony, rivalry, and honor to the competitive programming arena.",
    icon: "🔥",
    color: "#009F3D",
  },
  {
    number: "04",
    title: "GLORY &\nREWARDS",
    description:
      "₹50K+ prize pool, exclusive swag, certificates of excellence, and the coveted CodeRush Champion title await the victors.",
    icon: "🏆",
    color: "#DF0024",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !countRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: parseInt(value),
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.floor(obj.val) + suffix;
        }
      },
    });
  }, [isInView, value, suffix]);

  return (
    <div ref={ref} className="text-center p-4 border-2 border-white/20 bg-black/60 shadow-[3px_3px_0px_#000]">
      <h3
        ref={countRef}
        className="font-press-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4C300] tracking-wider"
      >
        0{suffix}
      </h3>
      <p className="mt-3 font-silkscreen text-[10px] md:text-xs uppercase tracking-widest text-white/70">
        {label}
      </p>
    </div>
  );
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden border-3 border-white/20 bg-[#0c1a2e] pixel-dither shadow-[4px_4px_0px_#000] hover:border-white transition-all duration-300"
    >
      <motion.div
        className="absolute top-0 left-0 h-1.5 w-full"
        style={{ backgroundColor: pillar.color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
      />

      <div className="absolute right-3 top-2 font-press-start text-5xl leading-none text-white/[0.05] select-none pointer-events-none">
        {pillar.number}
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: pillar.color,
        }}
      />

      <div className="relative z-10 p-6 md:p-8">
        <motion.div
          className="text-4xl md:text-5xl mb-6 inline-block border-2 border-white/20 bg-black/40 p-3 shadow-[2px_2px_0px_#000]"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {pillar.icon}
        </motion.div>

        <div className="mb-4 flex items-center gap-2">
          <span
            className="font-press-start text-[10px] tracking-wider uppercase border border-current px-2 py-0.5"
            style={{ color: pillar.color }}
          >
            STAGE {pillar.number}
          </span>
          <div
            className="h-[2px] flex-1"
            style={{ backgroundColor: pillar.color, opacity: 0.4 }}
          />
        </div>

        <h3 className="font-press-start text-lg sm:text-xl md:text-2xl text-white uppercase leading-tight whitespace-pre-line mb-4 tracking-wider">
          {pillar.title}
        </h3>

        <p className="font-sans text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {pillar.description}
        </p>

        <motion.div
          className="mt-6 flex items-center gap-2 font-silkscreen text-xs font-bold"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? 6 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span style={{ color: pillar.color }}>EXPLORE STAGE</span>
          <span style={{ color: pillar.color }} className="animate-pixel-blink">▶</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal-text",
        { xPercent: 100, opacity: 0 },
        {
          xPercent: -30,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        }
      );

      gsap.to(".about-laurel", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".about-intro-line", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 80%",
        },
      });

      gsap.from(".about-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-divider",
          start: "top 85%",
        },
      });

      gsap.from(".about-ring", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".about-rings-row",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F] pixel-grid-dark"
    >
      {/* Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px]" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#0085C7]/5 blur-[160px]" />
      </div>

      <Image
        src="/laurel-gold.png"
        alt=""
        width={900}
        height={900}
        aria-hidden="true"
        className="about-laurel pointer-events-none absolute left-1/2 top-1/2 w-[500px] md:w-[900px] h-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
      />

      <div
        ref={horizontalRef}
        className="relative overflow-hidden border-b-2 border-white/10 py-12 md:py-20 bg-black/40"
      >
        <div className="about-reveal-text whitespace-nowrap">
          <span className="font-press-start text-[3rem] md:text-[6rem] lg:text-[8rem] text-white/[0.08] uppercase leading-none tracking-widest">
            ★ ABOUT CODERUSH 3.0 ★ ABOUT CODERUSH 3.0 ★
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-press-start text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37]"
          >
            ▶ ABOUT THE COMPETITION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-press-start text-3xl sm:text-5xl md:text-7xl uppercase text-white tracking-tight drop-shadow-[4px_4px_0px_#0085C7]"
          >
            THE ARENA
          </motion.h2>

          <div className="about-rings-row mt-6 flex gap-3">
            {olympicColors.map((color, i) => (
              <div
                key={i}
                className="about-ring h-4 w-4 md:h-5 md:w-5 border-2 border-black shadow-[2px_2px_0px_#000]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="about-intro mb-20 md:mb-28 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="about-intro-line text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              <span className="text-[#D4AF37] font-semibold">CodeRush 3.0</span> is
              the flagship competitive programming championship organized by{" "}
              <span className="text-white font-medium">CPBYTE</span> — where the
              brightest coders converge to compete in an Olympics-inspired arena.
            </p>
          </div>

          <div>
            <p className="about-intro-line text-base md:text-lg text-white/50 leading-relaxed">
              Across two intense days, participants face algorithmic battles
              through Relay Races, 3v3 Eliminations, and the ultimate Javelin
              challenge. This isn&apos;t just a contest — it&apos;s a celebration of
              speed, strategy, and technical excellence.
            </p>

            <p className="about-intro-line mt-6 text-base md:text-lg text-white/50 leading-relaxed">
              Like the Olympic Games, CodeRush honors discipline, fair play, and
              the relentless pursuit of greatness. Every participant carries the
              torch of competitive programming forward.
            </p>
          </div>
        </div>

        <div className="about-divider h-[3px] w-full bg-gradient-to-r from-[#D4AF37] via-white/20 to-transparent mb-20 md:mb-28 border-b border-black" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>

        {/* High Score HUD Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden border-4 border-white/20 bg-black/80 backdrop-blur-md shadow-[6px_6px_0px_#000] p-6 md:p-12"
        >
          <div className="absolute top-2 left-4 font-press-start text-[9px] text-[#D4AF37]">
            HIGH SCORE RECORDS
          </div>
          <div className="absolute top-2 right-4 font-press-start text-[9px] text-green-400 animate-pixel-blink">
            ● LIVE STATS
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <AnimatedCounter value="500" suffix="+" label="Participants" />
            <AnimatedCounter value="24" suffix="h" label="Of Coding" />
            <AnimatedCounter value="50" suffix="K+" label="Prize Pool ₹" />
            <AnimatedCounter value="3" suffix="+" label="Event Tracks" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 md:mt-28 text-center"
        >
          <p className="font-press-start text-xs md:text-sm uppercase tracking-widest text-[#F4C300]">
            FASTER. SMARTER. STRONGER.
          </p>

          <div className="mt-6 flex justify-center gap-2">
            {olympicColors.slice(0, 4).map((color, i) => (
              <motion.div
                key={i}
                className="h-2 w-8 md:w-12 border border-black shadow-[2px_2px_0px_#000]"
                style={{ backgroundColor: color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
