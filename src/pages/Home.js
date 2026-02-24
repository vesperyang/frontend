import React, { useEffect, useState } from "react";
import { addPageView, getStats } from "../api";
import Hero from "../components/Hero";
import Interduce from "../components/Interduce";
import { AiOutlineEye } from "react-icons/ai";

function Home() {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    addPageView()
      .then((data) => setPageViews(data.pageViews))
      .catch((err) => console.error(err));

    getStats()
      .then((data) => setPageViews(data.pageViews))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative">
      {/* 页面顶部浏览量，保持背景透明，只加深小眼睛颜色 */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 z-50">
        <AiOutlineEye size={16} className="text-gray/80" />
        <span className="text-gray/80 text-sm">{pageViews}</span>
      </div>

      <Hero />

      <Interduce />
    </div>
  );
}

export default Home;