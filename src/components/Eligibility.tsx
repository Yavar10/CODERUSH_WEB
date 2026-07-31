"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import {
  FaBalanceScale,
  FaClipboardList,
  FaCode,
  FaGraduationCap,
  FaIdCard,
  FaUsers,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024"];

interface Rule {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const rules: Rule[] = [
  {
    id: "01",
    title: "Open to All College Students",
    description:
      "Any undergraduate or postgraduate student currently enrolled in a recognized college or university is eligible to participate.",
    icon: FaGraduationCap,
    color: "#0085C7",
  },
  {
    id: "02",
    title: "Individual or Team Entry",
    description:
      "Participate solo or form a team of up to 3 members. Team members can be from different colleges.",
    icon: FaUsers,
    color: "#F4C300",
  },
  {
    id: "03",
    title: "Valid College ID Required",
    description:
      "Each participant must present a valid college ID card or enrollment proof at the time of registration.",
    icon: FaIdCard,
    color: "#009F3D",
  },
  {
    id: "04",
    title: "Proficiency in Any Language",
    description:
      "Solve problems in C, C++, Java, Python, or any language supported by the judging platform. No language restrictions.",
    icon: FaCode,
    color: "#DF0024",
  },
  {
    id: "05",
    title: "Fair Play Policy",
    description:
      "Plagiarism, external help, and code sharing between teams is strictly prohibited. Violations lead to instant disqualification.",
    icon: FaBalanceScale,
    color: "#0085C7",
  },
  {
    id: "06",
    title: "Registration on Unstop",
    description:
      "All participants must register through the official Unstop page before the deadline. Walk-in entries are not accepted.",
    icon: FaClipboardList,
    color: "#F4C300",
  },
];

function RuleCard({ rule, index }: { rule: Rule; index: number }) {
  const IconComponent = rule.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden border-3 border-black bg-white shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-200 h-full p-6 md:p-8">
        <div
          className="absolute left-0 top-0 h-full w-2 border-r border-black"
          style={{ backgroundColor: rule.color }}
        />

        <div className="flex items-start gap-4 md:gap-5 pl-2">
          <div
            className="shrink-0 flex items-center justify-center h-12 w-12 border-2 border-black font-press-start text-sm shadow-[2px_2px_0px_#000] bg-zinc-50"
            style={{
              color: rule.color,
            }}
          >
            {rule.id}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex items-center justify-center w-10 h-10 border-2 border-black shrink-0 shadow-[2px_2px_0px_#000]"
                style={{ backgroundColor: `${rule.color}20` }}
              >
                <IconComponent
                  className="text-base md:text-lg"
                  style={{ color: rule.color }}
                />
              </div>
              <h3 className="font-press-start text-sm md:text-base lg:text-lg uppercase text-zinc-900 leading-snug tracking-wide">
                {rule.title}
              </h3>
            </div>

            <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed">
              {rule.description}
            </p>

            <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200 flex items-center justify-between font-silkscreen text-[10px] font-bold text-zinc-400">
              <span>STATUS: REQUIREMENT</span>
              <span className="text-green-600 font-press-start text-[9px]">[VERIFIED]</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[3px] w-full border-t border-black"
          style={{ backgroundColor: rule.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Eligibility() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".eligibility-track", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".eligibility-tracks",
          start: "top 85%",
        },
      });

      gsap.from(".eligibility-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".eligibility-cta",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="eligibility"
      ref={sectionRef}
      className="relative overflow-hidden bg-zinc-50 pixel-grid-light"
    >
      {/* Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-15 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-red-200/20 blur-[120px]" />
      </div>

      {/* 8-bit Olympic Color Bar Top */}
      <div className="eligibility-tracks relative border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-4 flex gap-2">
          {olympicColors.map((color, i) => (
            <div
              key={i}
              className="eligibility-track h-3 flex-1 border border-black shadow-[1px_1px_0px_#000]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-press-start text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#8C6A1A]"
            >
              ▶ WHO CAN COMPETE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-press-start text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-zinc-900 tracking-tight drop-shadow-[4px_4px_0px_#F4C300]"
            >
              ELIGIBILITY
            </motion.h2>

            <div className="mt-6 flex gap-2">
              {olympicColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="h-4 w-4 border border-black shadow-[1px_1px_0px_#000]"
                  style={{ backgroundColor: color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    type: "spring",
                    stiffness: 400,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium"
            >
              CodeRush 3.0 is open to passionate programmers from all
              backgrounds. Review the criteria below to make sure you qualify
              for the ultimate competitive programming championship.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          {rules.map((rule, index) => (
            <RuleCard key={rule.id} rule={rule} index={index} />
          ))}
        </div>

        {/* Boss Challenge CTA Box */}
        <div className="eligibility-cta relative overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-8 md:p-14">
          <div className="absolute top-3 left-4 font-press-start text-[9px] text-[#DF0024] flex items-center gap-2">
            <span>┌ ARENA CHALLENGE</span>
            <span className="animate-pixel-blink">● ENTRY OPEN</span>
          </div>

          <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-press-start text-2xl md:text-4xl uppercase text-zinc-900 mb-4 tracking-wide leading-snug">
                READY TO
                <br />
                <span className="text-[#D4AF37] drop-shadow-[2px_2px_0px_#000]">COMPETE?</span>
              </h3>
              <p className="font-sans text-zinc-600 text-base md:text-lg">
                If you meet the criteria, don&apos;t wait. Secure your spot in the
                arena before registrations close.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="arcade-btn bg-[#DF0024] hover:bg-red-600 text-white px-8 py-4 md:px-12 md:py-5 text-xs md:text-sm shadow-[4px_4px_0px_#000]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>REGISTER NOW</span>
                  <span className="animate-pixel-blink">▶</span>
                </span>
              </a>

              <div className="flex gap-2">
                {olympicColors.map((color, i) => (
                  <div
                    key={i}
                    className="h-4 w-4 border border-black shadow-[1px_1px_0px_#000]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8-bit Olympic Color Bar Bottom */}
      <div className="relative border-t-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-4 flex gap-2">
          {[...olympicColors].reverse().map((color, i) => (
            <motion.div
              key={i}
              className="h-2 flex-1 border border-black shadow-[1px_1px_0px_#000]"
              style={{ backgroundColor: color }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
