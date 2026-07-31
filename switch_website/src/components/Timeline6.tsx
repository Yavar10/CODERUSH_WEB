"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useArcade } from "@/context/ArcadeContext";

gsap.registerPlugin(ScrollTrigger);

interface EventItem {
  lane: string;
  time: string;
  title: string;
}

const events: EventItem[] = [
  { lane: "01", time: "10:00 AM", title: "Registration" },
  { lane: "02", time: "12:00 PM", title: "Inaugural Ceremony" },
  { lane: "03", time: "2:00 PM", title: "Relay Race" },
  { lane: "04", time: "6:00 PM", title: "Elimination (3v3)" },
  { lane: "05", time: "12:00 AM", title: "Jamming Session" },
  { lane: "06", time: "9:00 AM", title: "Javelin" },
  { lane: "07", time: "4:00 PM", title: "Closing Ceremony" },
];

export default function Timeline6() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isArcadeMode } = useArcade();

  useEffect(() => {
    const checkpoints = document.querySelectorAll<HTMLElement>(".checkpoint");

    const handlers: { element: HTMLElement; enter: () => void; leave: () => void }[] = [];

    checkpoints.forEach((cp) => {
      const enter = () => {
        cp.classList.add("checkpoint-fire");
      };

      const leave = () => {
        cp.classList.remove("checkpoint-fire");
      };

      cp.addEventListener("mouseenter", enter);
      cp.addEventListener("mouseleave", leave);

      handlers.push({ element: cp, enter, leave });
    });

    return () => {
      handlers.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".track-lane", {
        x: -100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".checkpoint").forEach((point) => {
        gsap.to(point, {
          boxShadow:
            "0 0 20px rgba(212,175,55,.6),0 0 50px rgba(212,175,55,.4)",
          repeat: -1,
          yoyo: true,
          duration: 1.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isArcadeMode]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#07111F] py-20 md:py-32 ${
        isArcadeMode ? "pixel-grid-dark" : ""
      }`}
    >
      {isArcadeMode ? (
        <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />
      ) : null}

      <div className="absolute -top-40 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <Image
        src="/laurel-gold.png"
        alt=""
        width={800}
        height={800}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[300px] md:w-[800px] h-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="mb-14 md:mb-24 text-center">
          <p
            className={
              isArcadeMode
                ? "mb-4 font-press-start text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37]"
                : "mb-4 text-xs sm:text-sm uppercase tracking-[0.35em] md:tracking-[0.5em] text-[#D4AF37]"
            }
          >
            {isArcadeMode ? "▶ CODERUSH EVENTS SCHEDULE" : "CodeRush Events Schedule"}
          </p>

          <h2
            className={
              isArcadeMode
                ? "font-press-start text-3xl sm:text-5xl md:text-7xl uppercase text-white tracking-tight drop-shadow-[4px_4px_0px_#DF0024]"
                : "text-4xl sm:text-5xl md:text-8xl font-black uppercase text-white"
            }
          >
            RACE TRACK
          </h2>
        </div>

        <div
          className={
            isArcadeMode
              ? "relative mx-auto max-w-6xl overflow-hidden border-4 border-black bg-[#8B3527] shadow-[8px_8px_0px_#000] pixel-dither"
              : "relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[4rem] border-4 border-white/20 bg-[#A64B3C] shadow-[0_0_80px_rgba(0,0,0,.35)]"
          }
        >
          {isArcadeMode ? (
            <div className="bg-black/60 border-b-2 border-white/30 px-6 py-2 flex items-center justify-between font-press-start text-[9px] text-[#F4C300]">
              <span>STAGES: 07</span>
              <span className="animate-pixel-blink">PROGRESSION MAP</span>
              <span>MODE: RELAY</span>
            </div>
          ) : (
            <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:18px_18px]" />
          )}

          <div className="relative z-10">
            {events.map((event) => (
              <div
                key={event.lane}
                className={
                  isArcadeMode
                    ? "track-lane relative border-b-2 border-white/20 px-4 py-6 md:min-h-[150px] md:px-12 md:py-0 md:flex md:items-center hover:bg-black/20 transition-colors duration-200"
                    : "track-lane relative border-b-2 border-white/30 px-4 py-6 md:min-h-[170px] md:px-16 md:py-0 md:flex md:items-center"
                }
              >
                <div
                  className={
                    isArcadeMode
                      ? "absolute right-3 top-2 font-press-start text-4xl md:text-9xl leading-none text-white/5 select-none pointer-events-none"
                      : "absolute right-2 top-2 text-[4rem] md:text-[12rem] font-black leading-none text-white/5 select-none"
                  }
                >
                  {event.lane}
                </div>

                <div className="md:hidden relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={
                        isArcadeMode
                          ? "checkpoint h-5 w-5 border-2 border-black bg-[#F4C300] shadow-[2px_2px_0px_#000] shrink-0"
                          : "checkpoint h-5 w-5 rounded-full border-2 border-white bg-[#D4AF37] shrink-0"
                      }
                    />
                    <span
                      className={
                        isArcadeMode
                          ? "font-press-start text-[10px] tracking-wider text-[#F5D57A] uppercase"
                          : "text-xs tracking-[0.2em] text-[#F5D57A] uppercase"
                      }
                    >
                      {event.time}
                    </span>
                  </div>

                  <h3
                    className={
                      isArcadeMode
                        ? "font-press-start text-lg uppercase text-white tracking-wide"
                        : "text-xl font-black uppercase text-white"
                    }
                  >
                    {event.title}
                  </h3>
                </div>

                <div className="hidden md:flex relative z-10 w-full items-center gap-6">
                  <span
                    className={
                      isArcadeMode
                        ? "min-w-[100px] font-press-start text-base tracking-widest text-white/80"
                        : "min-w-[90px] text-lg font-black tracking-[0.25em] text-white/80"
                    }
                  >
                    {isArcadeMode ? `LANE_${event.lane}` : event.lane}
                  </span>

                  <div
                    className={
                      isArcadeMode
                        ? "h-[3px] flex-1 border-b-2 border-dashed border-white/50"
                        : "h-[3px] flex-1 bg-white/60"
                    }
                  />

                  <div
                    className={
                      isArcadeMode
                        ? "checkpoint h-6 w-6 border-2 border-black bg-[#F4C300] shadow-[2px_2px_0px_#000] shrink-0 animate-pixel-pulse"
                        : "checkpoint h-6 w-6 rounded-full border-2 border-white bg-[#D4AF37]"
                    }
                  />

                  <div className={isArcadeMode ? "min-w-[320px]" : "min-w-[280px]"}>
                    <h3
                      className={
                        isArcadeMode
                          ? "font-press-start text-xl lg:text-2xl uppercase text-white tracking-wide drop-shadow-[2px_2px_0px_#000]"
                          : "text-2xl lg:text-4xl font-black uppercase text-white"
                      }
                    >
                      {event.title}
                    </h3>

                    <p
                      className={
                        isArcadeMode
                          ? "mt-2 font-silkscreen text-xs tracking-widest text-[#F5D57A] font-bold"
                          : "mt-2 tracking-[0.25em] text-[#F5D57A]"
                      }
                    >
                      {isArcadeMode ? `⏰ TIME: ${event.time}` : event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={
              isArcadeMode
                ? "relative flex min-h-[180px] md:h-44 items-center justify-center overflow-hidden border-t-4 border-black bg-black/80 px-4 py-10"
                : "relative flex min-h-[180px] md:h-44 items-center justify-center overflow-hidden px-4 py-10"
            }
          >
            <div className="text-center">
              <div
                className={
                  isArcadeMode
                    ? "mb-3 text-4xl md:text-5xl animate-pixel-float"
                    : "mb-4 text-5xl md:text-6xl"
                }
              >
                🏆
              </div>

              <h3
                className={
                  isArcadeMode
                    ? "font-press-start text-2xl md:text-4xl uppercase text-white tracking-wider drop-shadow-[3px_3px_0px_#D4AF37]"
                    : "text-3xl md:text-6xl font-black uppercase text-white"
                }
              >
                FINISH LINE
              </h3>

              <p
                className={
                  isArcadeMode
                    ? "mt-3 font-silkscreen text-xs md:text-sm tracking-widest text-[#F5D57A] uppercase font-bold"
                    : "mt-3 text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] text-[#F5D57A] uppercase"
                }
              >
                {isArcadeMode
                  ? "★ CLOSING CEREMONY & FELICITATION ★"
                  : "Closing Ceremony & Felicitation"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
