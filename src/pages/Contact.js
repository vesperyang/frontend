import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black px-8 md:px-20 py-32">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.35em]">
          CONTACT
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl leading-relaxed">
          For collaborations, creative work, or meaningful conversations —
          feel free to reach out.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* Left: Direct Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-12"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
              Email
            </p>
            <a
              href="mailto:your@email.com"
              className="text-lg hover:opacity-60 transition"
            >
              vesperyang0814@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:opacity-60 transition"
            >
              https://www.linkedin.com/in/vesper-yang/
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
              Instagram
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:opacity-60 transition"
            >
              @vale_vesper
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="space-y-10"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-black py-3 focus:outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-black py-3 focus:outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border-b border-black py-3 focus:outline-none bg-transparent placeholder-gray-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 border border-black px-10 py-3 tracking-widest text-sm uppercase hover:bg-black hover:text-white transition-all duration-500"
          >
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
}