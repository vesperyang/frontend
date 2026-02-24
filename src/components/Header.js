import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { addPageView, getStats } from "../api"; // 注意这里导入 getStats
import { animate } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pageViews, setPageViews] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Craft", path: "/craft" },
    { name: "Explore", path: "/explore" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  /* 页面访问计数 + 获取最新计数 */
  useEffect(() => {
    // 先获取当前计数
    getStats()
      .then(data => setPageViews(data.pageViews))
      .catch(console.error);

    // 然后增加一次访问量
    addPageView()
      .then(data => setPageViews(data.pageViews))
      .catch(console.error);
  }, []);

  /* 动画显示点击量 */
  useEffect(() => {
    const controls = animate(0, pageViews, {
      duration: 1,
      onUpdate(value) {
        setDisplayValue(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [pageViews]);

  /* 滚动检测 */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 打开 mobile nav 时锁滚动 */
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  }, [showNav]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }
        flex items-center justify-between px-6 lg:px-24 py-5`}
      >
        {/* Logo */}
        <h1
          className="cursor-pointer text-xl lg:text-3xl font-serif font-light tracking-[0.3em] uppercase text-white hover:text-[#C6B58E] transition-colors duration-400"
          onClick={() => navigate("/")}
        >
          VESPER
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 font-light tracking-[0.25em] uppercase text-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group transition-colors duration-400 ${
                  isActive ? "text-[#C6B58E]" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-[#C6B58E] transition-all duration-400 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* 浏览量 */}
          <div className="hidden lg:flex items-center gap-1 text-[#C6B58E]">
            <AiOutlineEye size={18} />
            <span className="text-sm tracking-wide">{displayValue}</span>
          </div>

          {/* Mobile button */}
          <div className="lg:hidden flex items-center text-white">
            {showNav ? (
              <MdClose
                size={26}
                className="cursor-pointer hover:text-[#C6B58E] transition-colors"
                onClick={() => setShowNav(false)}
              />
            ) : (
              <RiMenu3Fill
                size={26}
                className="cursor-pointer hover:text-[#C6B58E] transition-colors"
                onClick={() => setShowNav(true)}
              />
            )}
          </div>
        </div>
      </header>

      <MobileNav navItems={navItems} showNav={showNav} setShowNav={setShowNav} />
    </>
  );
}

export default Header;