import React from "react";
import { motion } from "framer-motion";
import Type from "./Type";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F6F3EE] overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#D8C9A3]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#000]/5 blur-[140px] rounded-full" />
      </div>

      {/* Left content */}
      <div className="relative z-10 w-full lg:w-1/2 px-10 lg:px-28 text-center lg:text-left">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Portfolio 2026
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl lg:text-7xl font-extralight text-gray-900 leading-tight"
        >
          Hi, I’m{" "}
          <span className="italic font-light tracking-wide text-[#C6B58E]">
            Vesper
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-8 text-lg lg:text-xl text-gray-600 font-light max-w-md leading-relaxed"
        >
          Business-minded analyst with technical awareness —
focused on structure, clarity, and scalable execution.
Open to cross-functional and international environments.
        </motion.p>

        {/* Type animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-xl lg:text-2xl text-[#C6B58E] font-light tracking-wide"
        >
          <Type />
        </motion.div>

      </div>

      {/* Right image */}
      <div className="hidden lg:flex w-1/2 justify-center items-center pr-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="relative"
        >
          <img
            src="/me.jpg"
            alt="Vesper"
            className="w-[800px] h-[400px] object-cover rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] transition-all duration-700 hover:scale-[1.02]"
          />

          {/* subtle frame border */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-black/10 pointer-events-none" />
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;