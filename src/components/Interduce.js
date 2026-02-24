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
    <section className="relative py-32 bg-[#111] overflow-hidden">

      <div className="max-w-6xl mx-auto px-10 text-center">

        <h2 className="text-3xl lg:text-4xl font-serif text-white tracking-wide mb-16">
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
                bg-black/40 
                border border-white/20
                backdrop-blur-md 
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                flex items-center justify-center 
                text-center
                text-lg lg:text-xl font-serif text-[#C6B58E] 
                hover:scale-105 transition-all duration-500 
                hover:shadow-[0_30px_80px_rgba(198,181,142,0.4)]
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