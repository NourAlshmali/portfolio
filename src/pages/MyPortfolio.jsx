import React, { useState } from "react";
import p1 from "../assets/img/theraQ.png";
import p2 from "../assets/img/Harmoni.png";
import p3 from "../assets/img/e-commerce.png";
import {
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const MyPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: p1,
      projectName: "THERAQ Appointment",
      description:
        "THERAQ is a platform for easily booking medical appointments, allowing users to find doctors, view their availability, and schedule visits quickly and conveniently",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <LuFileJson />, name: "JSON" },
      ],
      demoLink: "https://theraq-appointment-scheduling-platf.vercel.app/",
    },
    {
      id: 2,
      image: p2,
      projectName: "Harmoni-Spotify-Clone",
      description:
        "A modern, high-performance e-commerce platform for a seamless and responsive shopping experience",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <LuFileJson />, name: "JSON" },
      ],
      demoLink: "https://harmoni-spotify-clone.vercel.app/",
    },
    {
      id: 3,
      image: p3,
      projectName: "exlusive-e-commerce",
      description:
        "A modern, high-performance e-commerce platform for a seamless and responsive shopping experience",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaJs />, name: "JavaScript" },
      ],
      demoLink: "https://exlusive-e-commerce.vercel.app/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-[#05000d] to-[#0c011e] py-20">
      <h1 className="text-center text-5xl mb-[70px] tracking-[2px] font-JetBrains bg-gradient-to-r from-[#c084fc] via-[#9333ea] to-[#6b21a8] bg-clip-text text-transparent">
        My Projects
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((tab) => (
          <li
            key={tab.id}
            className="bg-white/5 backdrop-blur-xl border border-[#c77dff]/30 rounded-xl p-5 shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <img
              src={tab.image}
              alt={tab.projectName}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-[26px] p-[10px] font-semibold text-center mb-4">
              {tab.projectName}
            </h3>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href={tab.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#c77dff] font-JetBrains flex justify-center items-center gap-3 text-white cursor-pointer px-6 py-3 rounded-xl border border-[#c77dff] hover:bg-transparent hover:text-[#c77dff] transition duration-300"
              >
                <FaGlobe className="text-xl" /> Live Site
              </a>
              <button
                onClick={() => setSelectedProject(tab)}
                className="w-full sm:w-auto bg-transparent font-JetBrains flex justify-center items-center gap-3 text-[#c77dff] px-6 py-3 cursor-pointer rounded-xl border border-[#c77dff] hover:bg-[#c77dff] hover:text-white transition duration-300"
              >
                <FiEye className="text-xl" /> View More
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#0f051d] border border-[#c77dff]/50 rounded-2xl p-5 md:p-8 max-w-[95%] sm:max-w-md md:max-w-2xl w-full relative shadow-[0_0_40px_rgba(199,125,255,0.2)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-[#c77dff] hover:text-white bg-[#c77dff]/10 hover:bg-[#c77dff] p-1.5 md:p-2 rounded-full transition duration-300 cursor-pointer z-10"
            >
              <IoClose size={18} className="md:w-6 md:h-6" />
            </button>

            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center font-JetBrains tracking-wide px-6">
              {selectedProject.projectName}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.projectName}
              className="w-full h-40 md:h-72 object-cover rounded-xl mb-4 md:mb-6 border border-white/10"
            />

            <p className="text-sm md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <h3 className="text-md md:text-xl font-semibold mb-3 text-[#c77dff]">
              Skills Used:
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {selectedProject.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 md:gap-2 bg-white/5 border border-white/10 text-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg"
                >
                  <span className="text-[#c77dff] text-sm md:text-base">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] md:text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#c77dff] font-JetBrains flex justify-center items-center gap-3 text-white cursor-pointer px-6 py-3 md:py-4 rounded-xl hover:bg-transparent border border-[#c77dff] hover:text-[#c77dff] transition duration-300 shadow-[0_4px_15px_rgba(199,125,255,0.3)] text-sm md:text-base"
            >
              <FaGlobe className="text-lg md:text-xl" /> Visit Live Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPortfolio;
