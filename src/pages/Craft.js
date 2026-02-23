import React from "react";
import { motion } from "framer-motion";

const internship = {
  title: "Music Streaming App",
  role: "Frontend Developer Intern",
  stack: ["React", "Redux", "REST API", "GitHub"],
  description:
    "Contributed to a production-level music application by debugging UI and state management issues, fixing playback-related bugs, and collaborating with senior engineers via pull requests. Focused on improving application stability and overall user experience.",
  status: "Live on App Store",
};

const projects = [
  {
    name: "Cocktail World",
    stack: ["Next.js", "React", "Expo"],
    desc: "Academic project — cocktail search app displaying ingredients and recipes.",
    github: "https://github.com/vesperyang/Cocktail-world",
  },
  {
    name: "Movie System Design",
    stack: ["C sharp"],
    desc: "A console-based application that allows staff to manage movie inventory and customer memberships. Features include adding/removing DVDs, registering members, and querying rental information through an interactive menu-driven interface.",
    github: "https://github.com/vesperyang/Movie-system-design",
  },
  {
    name: "Let's eat",
    stack: ["Next.js", "Redis","API","React"],
    desc: "A full-stack web application that provides BMI calculation and recipe search functionality via integrated APIs. Demonstrates API integration, real-time state tracking, and efficient caching using Redis.",
    github: "https://github.com/vesperyang/let-s-eat",
  },
  {
    name: "Zip File Creation",
    stack: ["AWS", "Redis","JS"],
    desc: "Implemented file compression (ZIP) with Redis caching and AWS storage integration.",
    github: "https://github.com/vesperyang/Zip-file-creation",
  },
];


const careerTimeline = [

  {
    period: "2025–Present",
    location: "Brisbane",
    img: "/distrosub.jpg",
    roles: [
      {
        title: "Software Developer",
        company: "Brisbane",
       
        primary: true,
        bullets: [
          "Supporting frontend development and internal systems",
          "Assisting with debugging and feature implementation",
        ],
      },
    ],
  },
  {
    period: "2025–Present",
    location: "Brisbane",
    img: "/casino.jpg",
    roles: [
      {
        title: "Gaming Supervisor (Part-time)",
        company: "The Star Brisbane",
        primary: false,
        bullets: [
          "Managing daily floor operations in a high-volume environment",
          "Leading staff while maintaining service and compliance standards",
        ],
      },
    ],
  },
  {
    period: "2024",
    location: "Aucland, New Zealand",
    img: "/challanz.png",
    roles: [
      {
        title: "Mobile app developer internship (remote)",
        company: "Mega Bliss",
        primary: true,
        bullets: [
          "Developed an admin dashboard with features for managing"
        ],
      },
    ],
  },
  {
    period: "2023-2025",
    location: "Brisbane",
    img: "/promotion.jpg",
    roles: [
      {
        title: "Promotion Host",
        company: "The Star Brisbane",
        primary: true,
        bullets: [
          "Applied strong interpersonal and communication skills to identify customer preferences, enhancing guest satisfaction",
          "Collaborated effectively with cross-functional teams to streamline operational processes and manage customer relations proactively"
        ],
      },
    ],
  },
  {
    period: "2020-2022",
    location: "Chengdu, China",
    img: "/chengdu.png",
    roles: [
      {
        title: "Project Manager – Research & Development Department",
        company: "Chengdu Yaguang Electronic Co.,Ltd.",
        primary: true,
        bullets: [
          "Conducted comprehensive data analysis to support decision-making processes and ensure timely delivery of projects",
          "Managed detailed project documentation and utilized Agile methodologies to improve team productivity and project outcomes"
        ],
      },
    ],
  },
  {
    period: "2019-2020",
    location: "Kathmandu, Nepal",
    img: "/Kathmandu.jpg",
    roles: [
      {
        title: "General Manager Assistant",
        company: "Ocean Star International Cargo",
        primary: true,
        bullets: [
          "Optimized logistics operations through process analysis,improving efficiency and reducing operational costs",
          "Supervised and processed customs clearance documentation, ensuring regulatory compliance and seamless import/exportoperations"
        ],
      },
    ],
  },
  {
    period: "2018",
    location: "Qingdao, China",
    img: "/qingdao.jpg",
    roles: [
      {
        title: "Manager Assistant Intership",
        company: "Ping An Bank, Qingdao, China",
        primary: true,
        bullets: [
          "Assisted in talent acquisition efforts, updating job descriptions,coordinating interviews, and managing recruitment documentation",
          "Maintained personnel records, tracked employee attendance, and facilitated HR administrative processes"
        ],
      },
    ],
  },
];

function CareerTimeline() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/3 mb-60">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl font-large mb-20 text-center"
      >
        Career Timeline
      </motion.h4>

      {/* 中线 */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-32 bottom-0 w-[1px] bg-white/30 origin-top -translate-x-1/2"
      />

      <div className="max-w-6xl mx-auto space-y-10">
        {careerTimeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          const imgSrc = item.img || "/default-company.png";


          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative grid grid-cols-2 items-center gap-4"
            >
              {/* 左边 */}
              <div className={`pr-16 flex justify-end ${isLeft ? "text-right" : "text-left"}`}>
                {isLeft ? (
                  <TimelineContent item={item} />
                ) : (
                  <img
                   src={imgSrc}
                   alt={item.roles[0].company}
                   className="w-40 aspect-square object-cover rounded-2xl shadow-lg"
                  />

                )}
              </div>

              {/* 右边 */}
              <div className={`pl-16 flex ${!isLeft ? "text-left" : "text-right"}`}>
                {!isLeft ? (
                  <TimelineContent item={item} />
                ) : (
                  <img
                   src={imgSrc}
                   alt={item.roles[0].company}
                   className="w-40 aspect-square object-cover rounded-2xl shadow-lg"
                  />

                )}
              </div>

              {/* DOT */}
              <div className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-3 rounded-full border border-white bg-[#0b0b0b]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function TimelineContent({ item }) {
  return (
    <div>

      <p className="text-sm text-gray-400 mb-6">
        {item.period} · {item.location}
      </p>

      {item.roles.map((role, r) => (
        <div key={r} className="mb-6">

          <p
            className={`font-medium ${
              role.primary ? "text-white" : "text-gray-300"
            }`}
          >
            {role.title}
          </p>

          <p className="text-gray-400 text-sm mb-2">
            {role.company}
          </p>

          <ul className="space-y-1 text-sm text-gray-400">
            {role.bullets.map((b, i) => (
              <li key={i}>— {b}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}


export default function Craft() {
  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            What I Craft
          </h1>

          <p className="text-gray-400 mt-3 max-w-xl">
            Professional experience and selected academic / personal projects.
          </p>
        </motion.div>

        {/* Internship Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-10 mb-28"
        >
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
            Professional Experience
          </p>

          <h2 className="text-2xl font-medium mb-1">{internship.title}</h2>
          <p className="text-gray-300">{internship.role}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {internship.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-6 leading-relaxed text-gray-300 max-w-3xl">
            {internship.description}
          </p>

          <div className="flex items-center gap-6 mt-8">
            <span className="text-xs px-3 py-1 border border-white/20 rounded-full">
              {internship.status}
            </span>

            <a
              href="https://apps.apple.com/us/app/distrosub/id6751633808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/distrosub.png"
                alt="Download on App Store"
                className="h-10 hover:opacity-80 transition"
              />
            </a>
          </div>
        </motion.div>
        
        {/* Academic Projects */}
        <h3 className="text-xl font-medium mb-10">
          Selected Academic & Personal Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-lg font-medium">{p.name}</h4>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 border border-white/20 rounded-full text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed text-sm">
                {p.desc}
              </p>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm underline hover:text-white transition"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}

<CareerTimeline />


        </div>
      </div>
    </section>
    
    
  );
 

}
