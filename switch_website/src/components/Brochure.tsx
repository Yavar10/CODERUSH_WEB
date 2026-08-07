"use client";

import { useArcade } from "@/context/ArcadeContext";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Maximize } from "lucide-react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Brochure() {
  const { isArcadeMode } = useArcade();
  const fileId = "1v4vdtV5Wrv_gccL2juJYjjpzzz2ip-0T";
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      if (numPages && newPageNumber >= 1 && newPageNumber <= numPages) {
        return newPageNumber;
      }
      return prevPageNumber;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-black relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-6xl mb-12 text-center tracking-wide ${isArcadeMode ? "font-press-start text-[#F4C300]" : "font-anton text-white"
            }`}
        >
          EVENT BROCHURE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-2xl flex flex-col items-center bg-zinc-900/50 rounded-2xl border-2 border-white/10 shadow-2xl p-4 md:p-6"
        >
          <div className="relative w-full flex justify-center items-center min-h-[250px] md:min-h-[400px]">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-bold animate-pulse">
                LOADING PDF...
              </div>
            )}
            <Document
              file="/CodeRush_Brochure.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
              className="flex justify-center w-full"
            >
              {numPages ? (
                Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                  <div key={page} style={{ display: page === pageNumber ? "block" : "none" }}>
                    <Page
                      pageNumber={page}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="max-w-full drop-shadow-2xl shadow-black overflow-hidden bg-transparent"
                      width={windowWidth > 0 ? Math.min(windowWidth - 40, 450) : undefined}
                    />
                  </div>
                ))
              ) : (
                <div className="min-h-[250px] md:min-h-[400px]" />
              )}
            </Document>

            {/* Left Arrow Button */}
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full flex items-center justify-center transition-all z-20 ${pageNumber <= 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-110 active:scale-95"
                } ${isArcadeMode
                  ? "bg-[#0085C7] text-white border-2 border-white hover:shadow-[0_0_15px_#0085C7]"
                  : "bg-white text-black hover:bg-gray-200 shadow-xl"
                }`}
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={nextPage}
              disabled={pageNumber >= (numPages || 1)}
              className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full flex items-center justify-center transition-all z-20 ${pageNumber >= (numPages || 1)
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-110 active:scale-95"
                } ${isArcadeMode
                  ? "bg-[#0085C7] text-white border-2 border-white hover:shadow-[0_0_15px_#0085C7]"
                  : "bg-white text-black hover:bg-gray-200 shadow-xl"
                }`}
            >
              <ChevronRight size={28} strokeWidth={3} />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-white/70 font-mono tracking-widest text-sm z-10">
            <span>PAGE {pageNumber} OF {numPages || '-'}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-6 mt-10 justify-center"
        >
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${isArcadeMode
                ? "font-press-start text-xs bg-[#009F3D] text-white hover:shadow-[0_0_15px_#009F3D]"
                : "bg-white text-black hover:bg-gray-200"
              }`}
          >
            <Maximize size={20} strokeWidth={2.5} />
            VIEW FULL SCREEN
          </a>
          <a
            href={downloadUrl}
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${isArcadeMode
                ? "font-press-start text-xs bg-[#DF0024] text-white hover:shadow-[0_0_15px_#DF0024]"
                : "bg-[#0085C7] text-white hover:bg-[#0074b0]"
              }`}
          >
            <Download size={20} strokeWidth={2.5} />
            DOWNLOAD PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
