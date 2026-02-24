import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm tracking-wide">
          Designed & Developed by{" "}
          <span className="text-[#C6B58E]">Vesper</span>
        </p>

        {/* Center */}
        <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
          © {year} Vesper. All Rights Reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/vesper-yang/"
            target="_blank"
            rel="noreferrer"
            className="group transition-all duration-300"
          >
            <FaLinkedinIn
              size={18}
              className="text-gray-400 group-hover:text-[#C6B58E] group-hover:scale-110 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/vale_vesper/"
            target="_blank"
            rel="noreferrer"
            className="group transition-all duration-300"
          >
            <AiFillInstagram
              size={20}
              className="text-gray-400 group-hover:text-[#C6B58E] group-hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;