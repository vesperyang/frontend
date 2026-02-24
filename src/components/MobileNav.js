import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function MobileNav({ navItems, showNav, setShowNav }) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: showNav ? "0%" : "-100%",
        opacity: showNav ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-[68px] left-0 w-full z-[99] rounded-b-2xl overflow-hidden"
      style={{
        backdropFilter: "blur(12px)",
        pointerEvents: showNav ? "auto" : "none",
      }}
    >
      <div className="bg-[#F3EFE6]/95 border border-gray-300 shadow-xl flex flex-col items-center text-gray-800 font-serif tracking-wide px-6 pt-10 pb-8">
        <ul className="flex flex-col gap-8 text-lg">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  onClick={() => setShowNav(false)}
                  className={`relative transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-gray-700 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default MobileNav;