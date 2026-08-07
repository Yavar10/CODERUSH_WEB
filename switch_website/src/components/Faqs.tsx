"use client";

import { useArcade } from "@/context/ArcadeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "01",
    question: "Who can participate in CodeRush 3.0?",
    answer: "Any undergraduate or postgraduate student currently enrolled in a recognized college or university is eligible to participate.",
  },
  {
    id: "02",
    question: "What is the allowed team size?",
    answer: "You must participate in a team of exactly 3 members. Team members can be from different colleges.",
  },
  {
    id: "03",
    question: "Which programming languages are allowed?",
    answer: "You are allowed to code in the following 4 languages: C, C++, Java, and Python. We highly recommend C++ for its execution speed in time-critical rounds.",
  },
  {
    id: "04",
    question: "Is there a registration fee?",
    answer: "Registration is completely free! Please refer to our official Unstop page to secure your spot before the deadline.",
  },
  {
    id: "05",
    question: "Is accommodation provided for the offline finals?",
    answer: "Accommodation details will be communicated directly to the shortlisted teams who qualify for the offline physical rounds at KIET Deemed to be University.",
  },
  {
    id: "06",
    question: "What should we bring to the physical rounds?",
    answer: "Bring your laptops, chargers, valid college ID cards, and a highly competitive mindset for algorithmic problem solving.",
  },
];

export default function Faqs() {
  const { isArcadeMode } = useArcade();
  const [openId, setOpenId] = useState<string | null>(null);

  const borderColors = [
    "border-[#0085C7]",
    "border-[#F4C300]",
    "border-[#009F3D]",
    "border-[#DF0024]"
  ];

  const bgColors = [
    "bg-[#0085C7]/10",
    "bg-[#F4C300]/10",
    "bg-[#009F3D]/10",
    "bg-[#DF0024]/10"
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className={`relative w-full py-24 md:py-32 overflow-hidden z-10 font-inter ${isArcadeMode ? 'bg-[#07111F] border-t-4 border-black' : 'bg-black border-t border-white/10'}`}>
      {isArcadeMode && (
        <div className="scanlines-overlay absolute inset-0 opacity-10 pointer-events-none -z-10" />
      )}

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className={`h-[2px] w-12 ${isArcadeMode ? 'bg-[#F4C300]' : 'bg-white'}`} />
            <h3 className={`uppercase tracking-[0.2em] text-sm md:text-base ${isArcadeMode ? 'text-[#F4C300] font-press-start text-[10px]' : 'text-zinc-400 font-bold'}`}>
              Telemetry // FAQs
            </h3>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl md:text-5xl uppercase tracking-wider text-white ${isArcadeMode ? 'font-press-start text-xl md:text-3xl mt-4' : 'font-anton'}`}
          >
            Race Data & Procedures
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 flex gap-2"
          >
            <span className={`w-2 h-2 ${isArcadeMode ? 'border border-black bg-[#0085C7]' : 'rounded-full bg-[#0085C7]'}`} />
            <span className={`w-2 h-2 ${isArcadeMode ? 'border border-black bg-[#F4C300]' : 'rounded-full bg-[#F4C300]'}`} />
            <span className={`w-2 h-2 ${isArcadeMode ? 'border border-black bg-[#009F3D]' : 'rounded-full bg-[#009F3D]'}`} />
            <span className={`w-2 h-2 ${isArcadeMode ? 'border border-black bg-[#DF0024]' : 'rounded-full bg-[#DF0024]'}`} />
          </motion.div>
        </div>

        {/* Table Structure */}
        <div className={`w-full border-t border-b ${isArcadeMode ? 'border-[#F4C300]' : 'border-zinc-800'}`}>
          {/* Table Header */}
          <div className={`flex items-center justify-between py-4 px-4 text-xs tracking-[0.15em] uppercase text-zinc-500 border-b ${isArcadeMode ? 'font-press-start border-[#F4C300]' : 'font-bold border-zinc-800'}`}>
            <div className="flex w-full">
              <span className="w-16 md:w-24 shrink-0">POS</span>
              <span className="flex-1">PROTOCOL / INQUIRY</span>
            </div>
            <span className="shrink-0 w-16 text-right">ACTION</span>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group border-b last:border-b-0 ${isArcadeMode ? 'border-[#F4C300]/30 hover:border-[#F4C300]' : 'border-zinc-800 hover:border-zinc-600'} transition-colors duration-300`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between py-6 px-4 text-left focus:outline-none"
                >
                  <div className="flex items-start md:items-center w-full pr-8">
                    <span className={`w-16 md:w-24 shrink-0 text-sm md:text-lg ${isArcadeMode ? 'font-press-start text-[#F4C300] text-xs' : 'font-anton text-zinc-500 group-hover:text-[#0085C7]'} transition-colors duration-300`}>
                      {faq.id}
                    </span>
                    <span className={`flex-1 text-sm md:text-lg text-white ${isArcadeMode ? 'font-press-start text-xs leading-relaxed' : 'font-medium leading-snug'}`}>
                      {faq.question}
                    </span>
                  </div>

                  <span className={`shrink-0 w-8 md:w-16 text-right text-lg md:text-2xl ${isArcadeMode ? 'font-press-start text-[#F4C300] text-xs' : 'font-anton text-zinc-500 group-hover:text-[#DF0024]'} transition-colors duration-300`}>
                    {openId === faq.id ? '[-]' : '[+]'}
                  </span>
                </button>

                {/* Expanded Answer */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`pb-8 pt-2 px-4 flex w-full`}>
                        <div className="w-16 md:w-24 shrink-0" /> {/* Spacer to align with text */}
                        <div className={`flex-1 text-sm md:text-base max-w-3xl leading-relaxed ${isArcadeMode ? 'font-press-start text-xs text-zinc-400 leading-loose' : 'text-zinc-300'}`}>
                          <div className={`p-4 border-l-2 ${isArcadeMode ? 'border-[#F4C300] bg-black/50' : `${borderColors[index % 4]} ${bgColors[index % 4]}`}`}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
