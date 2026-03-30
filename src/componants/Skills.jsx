import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const Tabs = ["Front-end", "Back-end", "Web Development"];
  const [selectedTab, setSelectedTab] = useState(Tabs[0]);
  const [renderKey, setRenderKey] = useState(0);

  const Skill = {
    "Web Development": [
      { icon: <FaGitAlt />, name: "Git", level: 85 },
      { icon: <FaNodeJs />, name: "Node.js", level: 80 },
      { icon: <SiExpress />, name: "Express.js", level: 75 },
      { icon: <SiMongodb />, name: "MongoDB", level: 70 },
      { icon: <FaHtml5 />, name: "HTML5", level: 95 },
      { icon: <FaCss3Alt />, name: "CSS", level: 95 },
      { icon: <FaJs />, name: "Javascript", level: 80 },
      { icon: <FaReact />, name: "React", level: 90 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90 },
      { icon: <LuFileJson />, name: "Json", level: 80 },
    ],
    "Front-end": [
      { icon: <FaHtml5 />, name: "HTML5", level: 95 },
      { icon: <FaCss3Alt />, name: "CSS", level: 95 },
      { icon: <FaJs />, name: "Javascript", level: 85 },
      { icon: <FaReact />, name: "React", level: 90 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 80 },
    ],
    "Back-end": [
      { icon: <FaNodeJs />, name: "Node.js", level: 80 },
      { icon: <SiExpress />, name: "Express.js", level: 75 },
      { icon: <SiMongodb />, name: "MongoDB", level: 70 },
    ],
  };

  const onTabClick = (tab) => {
    setSelectedTab(tab);
    setRenderKey((k) => k + 1);
  };

  const currentSkills = Skill[selectedTab] || [];

  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      {/* تعديل حاوية الأزرار لتكون مرنة في الموبايل */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10 px-4">
        {Tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-[14px] sm:text-[18px] cursor-pointer rounded-full w-[110px] sm:w-[150px] md:w-[200px] font-semibold transform transition-all duration-300 ${
              selectedTab === tab
                ? "scale-110 sm:scale-115 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 shadow-[0_0_10px_rgba(255,255,255,0.5)] text-white"
                : "scale-100 bg-black/30 shadow-[0_0_10px_rgba(155,0,255,0.3)] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent border border-purple-500/20"
            }`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <style>{`
        .skill-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-4xl w-full mt-10 px-6 space-y-6" key={renderKey}>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-white">
          {selectedTab} Skills
        </h2>

        {currentSkills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-item bg-[#0b0219] backdrop-blur-3xl border border-white/15 shadow-lg rounded-xl px-4 sm:px-6 py-4 flex flex-col space-y-3 text-white font-JetBrains hover:bg-purple-800/30"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex space-x-3 sm:space-x-4 items-center">
                <span className="text-xl sm:text-2xl text-purple-400">{skill.icon}</span>
                <span className="font-medium text-sm sm:text-base text-white">{skill.name}</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-300">{skill.level}%</span>
            </div>

            <div className="w-full h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#a78bfa] transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;