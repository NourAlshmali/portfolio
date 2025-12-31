import React, { useState } from "react";
import p1 from "/public/assets/img/1.png";
import p2 from "/public/assets/img/2.png";
import p3 from "/public/assets/img/3.jpeg";
import {
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const MyPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: p1,
      projectName: "Project One",
      description: "Description of Project One",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      id: 2,
      image: p2,
      projectName: "Project Two",
      description: "Description of Project Two",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      id: 3,
      image: p3,
      projectName: "Project Three",
      description: "Description of Project Three",
      skills: [
        { icon: <FaGitAlt />, name: "JavaScript" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-[#05000d] to-[#0c011e] py-20">
      <h1 className="text-center text-5xl mb-[70px] tracking-[2px] font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-10">
        My Projects
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {projects.map((tab) => (
          <li
            key={tab.id}
            className="bg-white/10 backdrop-blur-xl border border-[#c77dffff] rounded-xl p-5 shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <img
              src={tab.image}
              alt={tab.projectName}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h3 className="text-white text-[30px] p-[10px] font-semibold text-center mb-4">
              {tab.projectName}
            </h3>

            <div className="flex justify-center space-x-4">
              <button className="bg-[#c77dffff] font-JetBrains flex items-center gap-3 text-white cursor-pointer px-6 py-3 rounded-xl border border-[#c77dffff] hover:bg-white/40 transition">
                <FaGlobe className="text-2xl" /> Demo
              </button>

              <button
                onClick={() => setSelectedProject(tab)}
                className="bg-[#c77dffff] font-JetBrains flex items-center gap-3 text-white px-6 py-3 cursor-pointer rounded-xl border border-[#c77dffff] hover:bg-white/40 transition"
              >
                <FiEye className="text-2xl" /> View More
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-10 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-4xl font-bold mb-6 text-center">
              {selectedProject.projectName}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.projectName}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />

            <p className="text-xl text-gray-700 mb-6">
              {selectedProject.description}
            </p>

            {/* Skills List */}
            <h3 className="text-2xl font-semibold mb-4">Skills Used:</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {selectedProject.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-lg"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#c77dffff] font-JetBrains justify-center flex items-center gap-3 mt-[25px] text-white cursor-pointer px-6 py-3 rounded-xl border border-[#c77dffff] hover:bg-white/40 transition">
              <FaGlobe className="text-2xl" /> Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPortfolio;
