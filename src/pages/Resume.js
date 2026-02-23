import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-[0.3em] font-light mb-6"
      >
        RESUME
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-sm tracking-widest uppercase mb-12"
      >
        Selected Experience & Background
      </motion.p>

      {/* PDF Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="shadow-2xl"
      >
        <Document file="/CV.pdf">
          <Page pageNumber={1} scale={width > 768 ? 1.6 : 0.6} />
        </Document>
      </motion.div>

      {/* Download Button */}
     {/* Download Button */}
     <motion.a
     href="/CV.pdf"
     download="CV.pdf"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 1.2, duration: 1 }}
     className="mt-12 flex items-center gap-2 border border-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500"
>
  <BiDownload />
  Download CV
</motion.a>

    </div>
  );
}

export default Resume;