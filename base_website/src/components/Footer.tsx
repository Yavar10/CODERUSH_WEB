"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiUnstop } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07111F] text-white border-t-4 border-black pixel-grid-dark">
      {/* Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />

      {/* MARQUEES */}
      <div className="overflow-hidden border-b-2 border-white/20 bg-black/40">
        <div className="py-6 whitespace-nowrap">
          <div className="animate-marquee flex w-max items-center gap-10 font-press-start text-[3.5rem] md:text-[6rem] uppercase leading-none tracking-wider">
            <span>CODE</span>
            <span className="text-[#0085C7]">★</span>

            <span>SOLVE</span>
            <span className="text-[#F4C300]">★</span>

            <span>COMPETE</span>
            <span className="text-[#009F3D]">★</span>

            <span>WIN</span>
            <span className="text-[#DF0024]">★</span>

            <span>CODE</span>
            <span className="text-[#0085C7]">★</span>

            <span>SOLVE</span>
            <span className="text-[#F4C300]">★</span>

            <span>COMPETE</span>
            <span className="text-[#009F3D]">★</span>

            <span>WIN</span>
            <span className="text-[#DF0024]">★</span>
          </div>
        </div>

        <div className="py-6 whitespace-nowrap border-t-2 border-white/10 bg-black/60">
          <div className="animate-marquee-reverse flex w-max items-center gap-10 font-press-start text-[3.5rem] md:text-[6rem] uppercase leading-none opacity-20 tracking-widest">
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
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]">
            <h3 className="font-press-start text-4xl md:text-6xl text-[#F4C300]">500+</h3>
            <p className="mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70">
              Participants
            </p>
          </div>

          <div className="p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]">
            <h3 className="font-press-start text-4xl md:text-6xl text-[#0085C7]">3+</h3>
            <p className="mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70">
              Event Tracks
            </p>
          </div>

          <div className="p-6 border-2 border-white/20 bg-black/60 shadow-[4px_4px_0px_#000]">
            <h3 className="font-press-start text-4xl md:text-6xl text-[#DF0024]">₹50K+</h3>
            <p className="mt-3 font-silkscreen text-xs uppercase tracking-widest text-white/70">
              Prize Pool
            </p>
          </div>
        </div>
        <div id="venue" />
      </div>

      {/* VENUE / RADAR MAP */}
      <div className="border-t-2 border-white/20 relative z-10">
        <div className="flex h-2">
          <div className="flex-1 bg-[#0085C7]" />
          <div className="flex-1 bg-[#F4C300]" />
          <div className="flex-1 bg-[#009F3D]" />
          <div className="flex-1 bg-[#DF0024]" />
          <div className="flex-1 bg-white" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr]">
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r-2 border-white/20 flex flex-col justify-center relative bg-black/60">
            <div className="absolute top-4 right-4 text-7xl select-none opacity-10 font-press-start">
              📍
            </div>

            <p className="font-press-start text-[10px] uppercase tracking-widest text-[#F4C300] mb-3">
              ▶ THE ARENA LOCATION
            </p>

            <h3 className="font-press-start text-2xl lg:text-4xl text-white mb-6 leading-tight drop-shadow-[2px_2px_0px_#000]">
              VENUE.
            </h3>

            <div className="flex items-start gap-3 mb-6">
              <FaMapMarkerAlt className="text-[#DF0024] mt-1 flex-shrink-0 text-xl" />
              <div>
                <p className="font-press-start text-sm md:text-base text-white">
                  KIET Group of Institutions
                </p>
                <p className="font-sans text-white/60 text-sm mt-2 leading-relaxed">
                  Delhi-NCR, Ghaziabad,<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8 font-silkscreen text-xs text-white/40 border-t border-b border-white/10 py-2">
              <span>GPS: 28.7532° N, 77.4971° E</span>
            </div>

            <a
              href="https://maps.google.com/?q=KIET+Group+of+Institutions"
              target="_blank"
              rel="noopener noreferrer"
              className="arcade-btn bg-[#0085C7] hover:bg-blue-600 text-white px-6 py-3 text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000] w-fit"
            >
              <span>GET DIRECTIONS</span>
              <span className="animate-pixel-blink">▶</span>
            </a>
          </div>

          <div className="relative group overflow-hidden min-h-[300px] lg:min-h-[420px] p-3 lg:p-4 bg-black/80">
            <div className="absolute inset-3 lg:inset-4 border-2 border-white/30 group-hover:border-white/60 transition-colors duration-500 pointer-events-none z-20" />

            {/* Radar Corner Brackets */}
            <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 pointer-events-none z-20 border-t-2 border-l-2 border-[#0085C7]" />
            <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 pointer-events-none z-20 border-t-2 border-r-2 border-[#F4C300]" />
            <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 w-6 h-6 pointer-events-none z-20 border-b-2 border-l-2 border-[#009F3D]" />
            <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-6 h-6 pointer-events-none z-20 border-b-2 border-r-2 border-[#DF0024]" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873898994474!2d77.4970664!3d28.7531817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1781367310153!5m2!1sen!2sin"
              className="relative w-full h-full min-h-[280px] lg:min-h-[390px] grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-80 transition-all duration-700 ease-out"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIET Group of Institutions Map Location"
            />

            <div className="scanlines-overlay absolute inset-3 lg:inset-4 opacity-40 pointer-events-none z-10" />

            <div className="absolute top-6 left-6 lg:top-7 lg:left-7 z-20 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/80 px-2 py-1 border border-white/20 font-silkscreen text-[9px] text-red-400">
                <span className="w-2 h-2 bg-[#DF0024] animate-pixel-blink" />
                <span>RADAR ONLINE</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 lg:bottom-7 lg:right-7 z-20 pointer-events-none">
              <div className="px-3 py-1.5 bg-black/90 border-2 border-white/20 flex items-center gap-3 font-press-start text-[9px] text-[#F4C300]">
                <span>KIET · GZB · IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA GRID */}
      <div className="border-t-2 border-white/20 relative z-10 bg-black/40">
        <div className="grid lg:grid-cols-3">
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-2 border-white/20">
            <h3 className="font-press-start text-xl md:text-2xl text-white mb-3">REGISTER.</h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Enter the arena and compete with the best developers.
            </p>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="arcade-btn bg-[#DF0024] hover:bg-red-600 text-white px-6 py-3 text-xs inline-flex items-center gap-2 shadow-[3px_3px_0px_#000]"
            >
              <span>REGISTER NOW</span>
              <span className="animate-pixel-blink">▶</span>
            </a>
          </div>

          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r-2 border-white/20">
            <h3 className="font-press-start text-xl md:text-2xl text-white mb-3">TIMELINE.</h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Stay ahead with event milestones and submission dates.
            </p>
            <a
              href="#timeline"
              className="arcade-btn bg-[#0085C7] hover:bg-blue-600 text-white px-6 py-3 text-xs inline-flex items-center gap-2 shadow-[3px_3px_0px_#000]"
            >
              <span>VIEW SCHEDULE</span>
              <span className="animate-pixel-blink">▶</span>
            </a>
          </div>

          <div className="p-8 lg:p-10">
            <h3 className="font-press-start text-xl md:text-2xl text-white mb-3">COMMUNITY.</h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Follow announcements and community updates.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#DF0024] hover:border-black shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#0085C7] hover:border-black shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unstop"
                className="w-12 h-12 border-2 border-white bg-black flex items-center justify-center text-white hover:bg-[#F4C300] hover:text-black hover:border-black shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              >
                <SiUnstop className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t-2 border-white/20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-black bg-[#0085C7]" />
            <div className="w-3 h-3 border border-black bg-[#F4C300]" />
            <div className="w-3 h-3 border border-black bg-white" />
            <div className="w-3 h-3 border border-black bg-[#009F3D]" />
            <div className="w-3 h-3 border border-black bg-[#DF0024]" />
          </div>

          <p className="font-silkscreen text-xs text-white/50">
            © 2026 CPBYTE CODERUSH 3.0
          </p>

          <div className="flex gap-6 font-silkscreen text-xs text-white/50">
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">PRIVACY</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">TERMS</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">CONDUCT</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
