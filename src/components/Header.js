import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";

function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const name = ["VESPER"];

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        scroll
          ? "flex items-center justify-between px-6 z-50 bg-[#F5F5DC]/80 backdrop-blur-md rounded-b-2xl border border-gray-300 shadow-xl relative lg:sticky top-0 transition-all duration-300"
          : "flex items-center justify-between px-6 z-50 relative lg:sticky top-0 bg-[#F5F5DC]"
      }
    >
      {/* Logo */}
      <span className="md:w-1/3 lg:w-1/2 flex items-center py-5">
        <h1
          className="cursor-pointer text-xl lg:text-3xl font-serif font-bold tracking-widest uppercase text-gray-300"
          onClick={() => navigate("/")}
        >
          {name}
        </h1>
      </span>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-12 text-gray-800 font-serif tracking-wide">

        {["CRAFT", "EXPLORE", "RESUME", "CONTACT"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="relative group text-lg"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}

      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center cursor-pointer">
        {showNav ? (
          <MdClose
            size={26}
            className="text-gray-800"
            onClick={() => setShowNav(false)}
          />
        ) : (
          <RiMenu3Fill
            size={26}
            className="text-gray-800"
            onClick={() => setShowNav(true)}
          />
        )}

        <MobileNav showNav={showNav} setShowNav={setShowNav} />
      </div>
    </div>
  );
}

export default Header;
