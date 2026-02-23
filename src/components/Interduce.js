import React from "react";
import { useNavigate } from "react-router-dom";

const identities = [
  { title: "What I Craft", path: "/craft" },
  { title: "What I Explore", path: "/explore" },
  { title: "My Profile", path: "/resume" },
  { title: "Contact Me", path: "/contact" },
];

function Interduce() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 bg-[#F5F5DC] overflow-hidden">

      <div className="max-w-6xl mx-auto px-10 text-center">

        <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 tracking-wide mb-16">
          Who I Am
        </h2>

        <div className="flex flex-wrap justify-center gap-12">

          {identities.map((item) => (
            <div
              key={item.title}
              onClick={() => navigate(item.path)}
              className="
                cursor-pointer
                w-[180px] h-[180px] 
                rounded-full 
                bg-gradient-to-br from-[#F5F5DC]/80 to-white/50 
                border border-gray-300
                backdrop-blur-md 
                shadow-xl 
                flex items-center justify-center 
                text-xl font-serif text-gray-800 
                hover:scale-110 transition-all duration-500 
                hover:shadow-2xl 
                animate-float
                text-center
                p-4
              "
            >
              {item.title}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Interduce;
