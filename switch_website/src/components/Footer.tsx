"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiUnstop } from "react-icons/si";
import { useArcade } from "@/context/ArcadeContext";

const Footer = () => {
  const { isArcadeMode } = useArcade();

  return (
    <footer
      className={
        isArcadeMode
          ? "relative overflow-hidden bg-[#07111F] text-white border-t-4 border-black pixel-grid-dark"
          : "relative overflow-hidden bg-black text-white border-t border-white/10"
      }
    >
      {isArcadeMode ? (
        <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />
      ) : null}

      {/* MARQUEES */}
      <div
        className={
          isArcadeMode
            ? "overflow-hidden border-b-2 border-white/20 bg-black/40"
            : "overflow-hidden border-b border-white/10"
        }
      >
        <div className="py-6 whitespace-nowrap">
          <div
            className={
              isArcadeMode
                ? "animate-marquee flex w-max items-center gap-10 font-press-start text-[3.5rem] md:text-[6rem] uppercase leading-none tracking-wider"
                : "animate-marquee flex w-max items-center gap-10 text-[7rem] md:text-[10rem] font-black uppercase leading-none"
            }
          >
            <span>CODE</span>
            <span className={isArcadeMode ? "text-[#0085C7]" : "text-[#0085C7]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>SOLVE</span>
            <span className={isArcadeMode ? "text-[#F4C300]" : "text-[#F4C300]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>COMPETE</span>
            <span className={isArcadeMode ? "text-[#009F3D]" : "text-[#009F3D]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>WIN</span>
            <span className={isArcadeMode ? "text-[#DF0024]" : "text-[#DF0024]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>CODE</span>
            <span className={isArcadeMode ? "text-[#0085C7]" : "text-[#0085C7]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>SOLVE</span>
            <span className={isArcadeMode ? "text-[#F4C300]" : "text-[#F4C300]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>COMPETE</span>
            <span className={isArcadeMode ? "text-[#009F3D]" : "text-[#009F3D]"}>
              {isArcadeMode ? "★" : "●"}
            </span>

            <span>WIN</span>
            <span className={isArcadeMode ? "text-[#DF0024]" : "text-[#DF0024]"}>
              {isArcadeMode ? "★" : "●"}
            </span>
          </div>
        </div>

        <div
          className={
            isArcadeMode
              ? "py-6 whitespace-nowrap border-t-2 border-white/10 bg-black/60"
              : "py-6 whitespace-nowrap border-t border-white/10"
          }
        >
          <div
            className={
              isArcadeMode
                ? "animate-marquee-reverse flex w-max items-center gap-10 font-press-start text-[3.5rem] md:text-[6rem] uppercase leading-none opacity-20 tracking-widest"
                : "animate-marquee-reverse flex w-max items-center gap-10 text-[7rem] md:text-[10rem] font-black uppercase leading-none opacity-25"
            }
          >
            <span>CPBYTE</span>
            <span>CODERUSH</span>
            <span>3.0</span>

            <span>CPBYTE</span>
            <span>CODERUSH</span>
            <span>2026</span>

            <span>CPBYTE</span>
            <span>CODERUSH</span>
            <span>3.0</span>
          </div>
        </div>
      </div>

      {/* STATS HUD */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-20 text-center">
          <div
            className={
              isArcadeMode
                ? "p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]"
                : ""
            }
          >
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-4xl md:text-6xl text-[#F4C300]"
                  : "text-6xl md:text-8xl font-black"
              }
            >
              900+
            </h3>
            <p
              className={
                isArcadeMode
                  ? "mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70"
                  : "mt-4 text-white/50 uppercase tracking-widest"
              }
            >
              Participants
            </p>
          </div>

          <div
            className={
              isArcadeMode
                ? "p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]"
                : ""
            }
          >
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-4xl md:text-6xl text-[#0085C7]"
                  : "text-6xl md:text-8xl font-black"
              }
            >
              3
            </h3>
            <p
              className={
                isArcadeMode
                  ? "mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70"
                  : "mt-4 text-white/50 uppercase tracking-widest"
              }
            >
              Event Tracks
            </p>
          </div>

          <div
            className={
              isArcadeMode
                ? "p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]"
                : ""
            }
          >
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-4xl md:text-6xl text-[#DF0024]"
                  : "text-6xl md:text-8xl font-black"
              }
            >
              ₹100K+
            </h3>
            <p
              className={
                isArcadeMode
                  ? "mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70"
                  : "mt-4 text-white/50 uppercase tracking-widest"
              }
            >
              Prize Pool
            </p>
          </div>
        </div>
        <div id="venue" />
      </div>

      {/* VENUE / RADAR MAP */}
      <div
        className={
          isArcadeMode
            ? "border-t-2 border-white/20 relative z-10"
            : "border-t border-white/10 relative"
        }
      >
        <div className={isArcadeMode ? "flex h-2" : "flex h-1"}>
          <div className="flex-1 bg-[#0085C7]" />
          <div className="flex-1 bg-[#F4C300]" />
          <div className="flex-1 bg-[#009F3D]" />
          <div className="flex-1 bg-[#DF0024]" />
          <div className="flex-1 bg-white" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr]">
          <div
            className={
              isArcadeMode
                ? "p-8 lg:p-12 border-b lg:border-b-0 lg:border-r-2 border-white/20 flex flex-col justify-center relative bg-black/60"
                : "p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center relative"
            }
          >
            <div
              className={
                isArcadeMode
                  ? "absolute top-4 right-4 text-7xl select-none opacity-10 font-press-start"
                  : "absolute top-4 right-4 text-[8rem] font-black leading-none text-white/[0.02] select-none pointer-events-none"
              }
            >
              📍
            </div>

            <p
              className={
                isArcadeMode
                  ? "font-press-start text-[10px] uppercase tracking-widest text-[#F4C300] mb-3"
                  : "text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold mb-2"
              }
            >
              {isArcadeMode ? "▶ THE ARENA LOCATION" : "The Arena Location"}
            </p>

            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-2xl lg:text-4xl text-white mb-6 leading-tight drop-shadow-[2px_2px_0px_#000]"
                  : "text-4xl lg:text-6xl font-black uppercase mb-6"
              }
            >
              VENUE.
            </h3>

            <div className="flex items-start gap-3 mb-6">
              <FaMapMarkerAlt className="text-[#DF0024] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p
                  className={
                    isArcadeMode
                      ? "font-press-start text-sm md:text-base text-white"
                      : "font-bold text-lg md:text-xl text-white"
                  }
                >
                  KIET Group of Institutions
                </p>
                <p className="font-sans text-white/60 text-sm mt-2 leading-relaxed">
                  Delhi-NCR, Ghaziabad,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            {isArcadeMode ? (
              <div className="flex items-center gap-2 mb-8 font-silkscreen text-xs text-white/40 border-t border-b border-white/10 py-2">
                <span>GPS: 28.7532° N, 77.4971° E</span>
              </div>
            ) : null}

            {isArcadeMode ? (
              <a
                href="https://maps.google.com/?q=KIET+Group+of+Institutions"
                target="_blank"
                rel="noopener noreferrer"
                className="arcade-btn bg-[#0085C7] hover:bg-blue-600 text-white px-6 py-3 text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] w-fit"
              >
                <span>GET DIRECTIONS</span>
                <span className="animate-pixel-blink">▶</span>
              </a>
            ) : (
              <a
                href="https://maps.google.com/?q=KIET+Group+of+Institutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors w-fit group/link"
              >
                Get Directions
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>

          <div
            className={
              isArcadeMode
                ? "relative group overflow-hidden min-h-[300px] lg:min-h-[420px] p-3 lg:p-4 bg-black/80"
                : "relative group overflow-hidden min-h-[300px] lg:min-h-[420px] p-3 lg:p-4 bg-black"
            }
          >
            <div className="absolute inset-3 lg:inset-4 border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none z-20" />

            {isArcadeMode ? (
              <>
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 pointer-events-none z-20 border-t-2 border-l-2 border-[#0085C7]" />
                <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 pointer-events-none z-20 border-t-2 border-r-2 border-[#F4C300]" />
                <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 w-6 h-6 pointer-events-none z-20 border-b-2 border-l-2 border-[#009F3D]" />
                <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-6 h-6 pointer-events-none z-20 border-b-2 border-r-2 border-[#DF0024]" />
              </>
            ) : null}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873898994474!2d77.4970664!3d28.7531817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1781367310153!5m2!1sen!2sin"
              className="relative w-full h-full min-h-[280px] lg:min-h-[390px] grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIET Group of Institutions Map Location"
            />

            {isArcadeMode ? (
              <div className="scanlines-overlay absolute inset-3 lg:inset-4 opacity-40 pointer-events-none z-10" />
            ) : null}
          </div>
        </div>
      </div>

      {/* CTA GRID */}
      <div
        className={
          isArcadeMode
            ? "border-t-2 border-white/20 relative z-10 bg-black/40"
            : "border-t border-white/10"
        }
      >
        <div className="grid lg:grid-cols-3">
          <div
            className={
              isArcadeMode
                ? "p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-2 border-white/20"
                : "p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10"
            }
          >
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-xl md:text-2xl text-white mb-3"
                  : "text-2xl font-black uppercase mb-4"
              }
            >
              REGISTER.
            </h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Enter the arena and compete with the best developers.
            </p>
            {isArcadeMode ? (
              <a
                href="https://unstop.com/competitions/code-rush-30-krishna-institute-of-engineering-and-technology-kiet-ghaziabad-1731472"
                target="_blank"
                rel="noopener noreferrer"
                className="arcade-btn bg-[#DF0024] hover:bg-red-600 text-white px-6 py-3 text-xs inline-flex items-center gap-2 shadow-[3px_3px_0px_#000]"
              >
                <span>REGISTER NOW</span>
                <span className="animate-pixel-blink">▶</span>
              </a>
            ) : (
              <a
                href="https://unstop.com/competitions/code-rush-30-krishna-institute-of-engineering-and-technology-kiet-ghaziabad-1731472"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
              >
                Register Now →
              </a>
            )}
          </div>

          <div
            className={
              isArcadeMode
                ? "p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-2 border-white/20"
                : "p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10"
            }
          >
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-xl md:text-2xl text-white mb-3"
                  : "text-2xl font-black uppercase mb-4"
              }
            >
              TIMELINE.
            </h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Stay ahead with event milestones and submission dates.
            </p>
            {isArcadeMode ? (
              <a
                href="#timeline"
                className="arcade-btn bg-[#0085C7] hover:bg-blue-600 text-white px-6 py-3 text-xs inline-flex items-center gap-2 shadow-[3px_3px_0px_#000]"
              >
                <span>VIEW SCHEDULE</span>
                <span className="animate-pixel-blink">▶</span>
              </a>
            ) : (
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
              >
                View Schedule →
              </a>
            )}
          </div>

          <div className={isArcadeMode ? "p-8 lg:p-10" : "p-8 lg:p-12"}>
            <h3
              className={
                isArcadeMode
                  ? "font-press-start text-xl md:text-2xl text-white mb-3"
                  : "text-2xl font-black uppercase mb-4"
              }
            >
              COMMUNITY.
            </h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Follow announcements and community updates.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cpbyte_kiet/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={
                  isArcadeMode
                    ? "w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#DF0024] hover:border-black shadow-[3px_3px_0px_#000] transition-all"
                    : "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all"
                }
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/company/cpbyte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={
                  isArcadeMode
                    ? "w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#0085C7] hover:border-black shadow-[3px_3px_0px_#000] transition-all"
                    : "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all"
                }
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="https://unstop.com/competitions/code-rush-30-krishna-institute-of-engineering-and-technology-kiet-ghaziabad-1731472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unstop"
                className={
                  isArcadeMode
                    ? "w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#F4C300] hover:text-black hover:border-black shadow-[3px_3px_0px_#000] transition-all"
                    : "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all"
                }
              >
                <SiUnstop className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className={
          isArcadeMode
            ? "border-t-2 border-white/20 relative z-10 bg-black"
            : "border-t border-white/10"
        }
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-black bg-[#0085C7]" />
            <div className="w-3 h-3 border border-black bg-[#F4C300]" />
            <div className="w-3 h-3 border border-black bg-white" />
            <div className="w-3 h-3 border border-black bg-[#009F3D]" />
            <div className="w-3 h-3 border border-black bg-[#DF0024]" />
          </div>

          <p
            className={
              isArcadeMode
                ? "font-silkscreen text-xs text-white/50"
                : "text-xs text-white/40"
            }
          >
            © 2026 CPBYTE CODERUSH 3.0
          </p>

          <div
            className={
              isArcadeMode
                ? "flex gap-6 font-silkscreen text-xs text-white/50"
                : "flex gap-6 text-xs text-white/40"
            }
          >
            <button
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              PRIVACY
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              TERMS
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              CONDUCT
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
