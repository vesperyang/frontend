import React from "react";
import { motion } from "framer-motion";

/* =========================
   DATA
========================= */

const featured = {
  title: "Music Streaming Platform",
  role: "Frontend Developer Intern",
  stack: ["React", "Redux", "REST API"],
  description:
    "Contributed to a production-level music application, improving playback stability and state reliability while collaborating with senior engineers through structured pull requests.",
  link: "https://apps.apple.com/us/app/distrosub/id6751633808",
  image: "/distrosub.png",
};

const career = [
  {
    period: "2025 – Present",
    role: "Software Developer",
    company: "Brisbane",
    location: "Brisbane, Australia",
    region: "Oceania",
    image: "/distrosub.jpg",
  },
  {
    period: "2025 – Present",
    role: "Gaming Supervisor (Part-time)",
    company: "The Star Brisbane",
    location: "Brisbane, Australia",
    region: "Oceania",
    image: "/casino.jpg",
  },
  {
    period: "2024",
    role: "Mobile App Developer Intern (Remote)",
    company: "Mega Bliss",
    location: "Auckland, New Zealand",
    region: "Oceania",
    image: "/challanz.png",
  },
  {
    period: "2023 – 2025",
    role: "Promotion Host",
    company: "The Star Brisbane",
    location: "Brisbane, Australia",
    region: "Oceania",
    image: "/promotion.jpg",
  },
  {
    period: "2020 – 2022",
    role: "Project Manager – R&D",
    company: "Chengdu Yaguang Electronic Co., Ltd.",
    location: "Chengdu, China",
    region: "Asia",
    image: "/chengdu.png",
  },
  {
    period: "2019 – 2020",
    role: "General Manager Assistant",
    company: "Ocean Star International Cargo",
    location: "Kathmandu, Nepal",
    region: "Asia",
    image: "/Kathmandu.jpg",
  },
  {
    period: "2018",
    role: "Manager Assistant Intern",
    company: "Ping An Bank",
    location: "Qingdao, China",
    region: "Asia",
    image: "/qingdao.jpg",
  },
];

const projects = [
  {
    name: "Cocktail World",
    stack: ["Next.js", "React", "Expo"],
    desc: "Cocktail search application displaying ingredients and preparation details.",
    github: "https://github.com/vesperyang/Cocktail-world",
  },
  {
    name: "Movie System Design",
    stack: ["C#", ".NET"],
    desc: "Console-based movie inventory and membership management system.",
    github: "https://github.com/vesperyang/Movie-system-design",
  },
  {
    name: "Let's Eat",
    stack: ["Next.js", "Redis", "API"],
    desc: "Full-stack BMI calculator and recipe search with Redis caching.",
    github: "https://github.com/vesperyang/let-s-eat",
  },
  {
    name: "Zip File Creation",
    stack: ["AWS", "Redis", "JavaScript"],
    desc: "Implemented file compression with Redis caching and AWS storage.",
    github: "https://github.com/vesperyang/Zip-file-creation",
  },
];

/* =========================
   COMPONENT
========================= */

export default function Craft() {
  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-40 text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            Digital products, crafted with clarity.
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
            Frontend-focused development shaped by structure, usability and long-term maintainability.
          </p>

          <p className="text-gray-500 text-sm mt-4 tracking-wide">
            Brisbane based — Internationally mobile
          </p>
        </motion.div>

        {/* FEATURED WORK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-40"
        >
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-6">
              Featured Experience
            </p>

            <h2 className="text-3xl font-light mb-4">
              {featured.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {featured.role}
            </p>

            <p className="text-gray-400 leading-relaxed max-w-md">
              {featured.description}
            </p>

            <div className="flex gap-6 text-xs text-gray-500 mt-6">
              {featured.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm text-gray-400 hover:text-white transition"
            >
              View on App Store →
            </a>
          </div>

          <div>
            <img
              src={featured.image}
              alt="Featured Project"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* CAREER PATH */}
        <div className="mb-40">
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-12 text-center">
            Career Path
          </p>

          <div className="space-y-20">
            {career.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-10 items-center border-b border-white/10 pb-14"
              >
                <img
                  src={c.image}
                  alt={c.company}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1 text-center md:text-left">
                  <p className="text-white font-light text-lg">{c.role}</p>
                  <p className="text-gray-400 text-sm mt-2">{c.company}</p>
                  <p className="text-gray-600 text-xs mt-2 tracking-wide uppercase">{c.location}</p>
                  <p className="text-gray-700 text-[11px] mt-1 tracking-widest">{c.region}</p>
                </div>

                <p className="text-gray-500 text-sm whitespace-nowrap">{c.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GLOBAL FOOTPRINT */}
        <section className="mb-40 text-center">
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-10">
            Global Footprint
          </p>

          <div className="flex justify-center gap-10 text-gray-400 text-sm tracking-wide">
            <span>🇦🇺 Australia</span>
            <span>🇳🇿 New Zealand</span>
            <span>🇨🇳 China</span>
            <span>🇳🇵 Nepal</span>
          </div>

          <p className="text-gray-600 text-xs mt-8 max-w-md mx-auto leading-relaxed">
            Experience across Asia-Pacific markets with adaptability to multicultural teams and distributed workflows.
          </p>
        </section>

        {/* PROJECTS */}
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-12">
            Selected Projects
          </p>

          <div className="space-y-16">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-b border-white/10 pb-10"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-light">{p.name}</h3>
                    <p className="text-gray-500 text-sm mt-3 max-w-md">{p.desc}</p>
                    <div className="flex gap-4 text-xs text-gray-600 mt-4">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    View →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}