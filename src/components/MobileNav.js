import React from "react";
import { DiGitBranch } from "react-icons/di";
import { Link } from "react-router-dom";

function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={
        showNav
          ? "fixed h-1/2 bg-[#F5F5DC]/95 backdrop-blur-md w-full top-[68px] left-0 rounded-b-2xl border border-gray-300 shadow-xl z-50 transition-all duration-[500ms] overflow-hidden"
          : "fixed h-0 bg-[#F5F5DC]/95 backdrop-blur-md w-full top-[68px] left-0 rounded-b-2xl z-50 transition-all duration-[500ms] overflow-hidden"
      }
    >
      <div className="flex flex-col items-center justify-center text-gray-800 font-serif tracking-wide">

        {/* Nav Links */}
        <ul className="flex flex-col gap-6 mt-10 text-lg">
          {["Home", "About", "Projects", "Resume"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setShowNav(false)}
                className="relative cursor-pointer transition-all duration-200"

              >
                {item}

                {/* subtle underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* GitHub Button */}
        <a
          href="https://github.com/riteshk-007/portfolio"
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex items-center gap-2 px-6 py-2 border border-gray-400 rounded-full text-sm text-gray-800 hover:bg-gray-200 transition-all duration-300"
        >
          <DiGitBranch fontSize={16} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
