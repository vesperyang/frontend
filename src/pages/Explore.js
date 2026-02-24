// src/pages/Explore.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

/* -----------------------
   1️⃣ Travel Section (Auto Horizontal Scroll)
------------------------ */

const travelPhotos = [
  { country: "Egypt", url: "/explore/Egy.jpg" },
  { country: "Jordan", url: "/explore/Jordan.jpg" },
  { country: "Vietnam", url: "/explore/Vietnam.jpg" },
  { country: "Nepal", url: "/explore/Nepal.jpg" },
  { country: "Japan", url: "/explore/Japan.jpg" },
  { country: "China", url: "/explore/China.jpg" },
  { country: "Australia", url: "/explore/Australia.jpg" },
  { country: "Thailand", url: "/explore/Thailand.jpg" },
];

function TravelSection() {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % travelPhotos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 左侧垂直标识 */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 text-white/40 tracking-[0.5em] text-xs rotate-[-90deg] origin-left">
        JOURNEYS
      </div>

      {/* 数字编号 */}
      <div className="absolute top-12 right-12 z-30 text-white/60 text-sm tracking-[0.3em]">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(travelPhotos.length).padStart(2, "0")}
      </div>

      {/* 横向滑动容器（transform方式） */}
      <motion.div
        animate={{ x: `-${index * 100}vw` }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex h-full"
      >
        {travelPhotos.map((item, i) => (
          <div
            key={i}
            className="relative w-screen h-screen flex-shrink-0"
          >
            {/* 背景图改为缓慢横向平移 */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.url})` }}
              animate={{
                scale: 1.1,
                x: index === i ? "0%" : "5%",
              }}
              transition={{ duration: 6 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* 国家名称 */}
            <div className="relative h-full flex items-end justify-center pb-[14vh]">
              <motion.h2
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{
                  opacity: index === i ? 1 : 0,
                  letterSpacing:
                    index === i ? "0.4em" : "0.6em",
                }}
                transition={{ duration: 1.2 }}
                className="
                  text-6xl 
                  md:text-8xl 
                  text-white/90 
                  font-extralight 
                  uppercase
                "
              >
                {item.country}
              </motion.h2>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 底部极细进度条 */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20">
        <motion.div
          className="h-full bg-white"
          animate={{
            width: `${((index + 1) / travelPhotos.length) * 100}%`,
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}

/* -----------------------
   2️⃣ Photography Section
------------------------ */

const photos = [
  "/Photography/balloon.jpg",
  "/Photography/brisbane.jpg",
  "/Photography/sunset.jpg",
  "/Photography/egypt.jpg",
  "/Photography/jordan.jpg",
  "/Photography/roof.jpg",
  "/Photography/vietnam.jpg",
];

function PhotographySection() {
  return (
    <section className="bg-black text-white py-40 px-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extralight tracking-[0.35em] mb-24"
      >
        FRAMES
      </motion.h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
        {photos.map((photo, i) => (
          <motion.img
            key={i}
            src={photo}
            alt=""
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="w-full mb-10 rounded-lg object-cover hover:scale-[1.03] transition duration-700"
          />
        ))}
      </div>
    </section>
  );
}

/* -----------------------
   3️⃣ Fitness Section
------------------------ */

function FitnessSection() {
  return (
    <section className="relative bg-black text-white h-screen flex items-center px-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/fitness.jpg)" }}
      />

      <div className="relative max-w-2xl">
        <h2 className="text-5xl font-light mb-8 tracking-[0.25em]">
          DISCIPLINE
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Strength is not aesthetic.
          <br />
          It is structure.
          <br />
          Training cultivates clarity, control, and resilience.
          <br />
          Discipline becomes architecture.
        </p>
      </div>
    </section>
  );
}

/* -----------------------
   4️⃣ Lifestyle Section
------------------------ */

function LifestyleSection() {
  return (
    <section className="bg-black text-white py-40 px-12 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[180px] font-light select-none tracking-[0.4em]">
        RITUALS
      </div>

      <div className="relative max-w-3xl">
        <h2 className="text-5xl font-light mb-10 tracking-[0.25em]">
          BALANCE
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Learning Spanish expands cognitive rhythm.
          <br />
          Fitness maintains internal order.
          <br />
          Quiet evenings with my cat restore harmony.
        </p>

        <img
          src="/images/cat.jpg"
          alt="cat"
          className="w-full max-w-md mt-10 rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

/* -----------------------
   Main Explore Export
------------------------ */

export default function Explore() {
  return (
    <div className="bg-black">
      <TravelSection />
      <PhotographySection />
      <FitnessSection />
      <LifestyleSection />
    </div>
  );
}