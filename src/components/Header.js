import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Craft", path: "/craft" },
    { name: "Explore", path: "/explore" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  /* 滚动检测 */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 打开 mobile nav 时锁滚动 */
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNav]);

  return (
    <>
      <header
        className={`flex items-center justify-between px-6 z-[100] top-0 transition-all duration-300
        ${
          scrolled
            ? "bg-[#F5F5DC]/80 backdrop-blur-md border-b border-gray-300 shadow-md"
            : "bg-[#F5F5DC]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center py-5">
          <h1
            className="cursor-pointer text-xl lg:text-3xl font-serif font-bold tracking-widest uppercase text-gray-800"
            onClick={() => navigate("/")}
          >
            VESPER
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 font-serif tracking-wide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-lg transition-all duration-300 ${
                  isActive ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name.toUpperCase()}

                <span
                  className={`absolute left-0 -bottom-1 h-[1px] bg-gray-800 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center">
          {showNav ? (
            <MdClose
              size={26}
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowNav(false)}
            />
          ) : (
            <RiMenu3Fill
              size={26}
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowNav(true)}
            />
          )}
        </div>
      </header>

      {/* MobileNav 必须在 Header 外面 */}
      <MobileNav
        navItems={navItems}
        showNav={showNav}
        setShowNav={setShowNav}
      />
    </>
  );
}

export default Header;