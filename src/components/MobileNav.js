import React from "react";
import { DiGitBranch } from "react-icons/di";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MobileNav({ showNav, setShowNav }) {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: showNav ? "0%" : "-100%",
        opacity: showNav ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-[68px] left-0 w-full z-50 rounded-b-2xl overflow-hidden"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div
        className="bg-[#F3EFE6]/95 border border-gray-300 shadow-xl flex flex-col items-center text-gray-800 font-serif tracking-wide px-6 pt-10 pb-6"
      >
        {/* Nav Links */}
        <ul className="flex flex-col gap-6 text-lg">
          {["Home", "Explore", "Craft", "Resume","Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setShowNav(false)}
                className="relative cursor-pointer transition-all duration-300 font-light text-gray-800 hover:text-gray-900"
              >
                {item}
                {/* subtle underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </motion.div>
  );
}

export default MobileNav;