import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const travelPhotos = [
  { country: "Egypt", url: "/explore/Egy.jpg" },
  { country: "Jordan", url: "/explore/Jordan.jpg" },
  { country: "Vietnam", url: "/explore/Vietnam.jpg" },
  { country: "Nepal", url: "/explore/Nepal.jpg" },
  { country: "Japan", url: "/explore/japanese.jpg" },
  { country: "China", url: "/explore/China.jpg" },
  { country: "Australia", url: "/explore/Australia.jpg" },
  { country: "Thailand", url: "/explore/Thailand.jpg" },
];

function TravelSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % travelPhotos.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? travelPhotos.length - 1 : prev - 1));

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-[#111] text-white py-32 px-12">
      <div className="max-w-5xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extralight tracking-[0.25em] mb-6"
        >
          PLACES I HAVE BEEN
        </motion.h2>
        <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
          Exposure across diverse regions and cultures. Open to international
          roles requiring frequent travel.
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto h-[80vh] overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex h-full"
        >
          {travelPhotos.map((item, i) => (
            <div
              key={i}
              className="relative min-w-full h-full flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${item.url})` }}
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl" />
              <h3 className="relative text-6xl md:text-7xl font-light tracking-[0.25em] uppercase">
                {item.country}
              </h3>
            </div>
          ))}
        </motion.div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}

function PhotographySection() {
  const photos = [
    "/Photography/balloon.jpg",
    "/Photography/brisbane.jpg",
    "/Photography/sunset.jpg",
    "/Photography/egypt.jpg",
    "/Photography/jordan.jpg",
    "/Photography/roof.jpg",
    "/Photography/vietnam.jpg",
  ];

  return (
    <section className="bg-[#111] text-white py-40 px-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extralight tracking-[0.25em] mb-6"
      >
        THINGS I SEE
      </motion.h2>
      <p className="text-gray-400 max-w-xl mb-16 text-sm leading-relaxed">
        I enjoy observing structure, light, and composition in daily life.
        Photography sharpens attention to detail and perspective.
      </p>

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

function LifestyleSection() {
  return (
    <section className="bg-[#111] text-white py-40 px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-light mb-8 tracking-[0.25em]"
      >
        THINGS I DO
      </motion.h2>
      <p className="text-gray-400 max-w-xl mb-20 text-sm leading-relaxed">
        Fitness builds discipline and mental clarity. Personal routines create
        balance and resilience.
      </p>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/gym.jpg"
          alt="gym"
          className="rounded-xl object-cover"
        />
        <img
          src="/cat.jpg"
          alt="cat"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export default function Explore() {
  return (
    <div className="bg-[#111]">
      <TravelSection />
      <PhotographySection />
      <LifestyleSection />
    </div>
  );
}