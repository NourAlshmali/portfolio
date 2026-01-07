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
      <div className="flex justify-center gap-10">
        {Tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-[18px] cursor-pointer rounded-full w-[160px] font-semibold transform transition-all duration-300 ${
              selectedTab === tab
                ? "scale-115 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.4),0_0_30px_rgba(245,245,245,0.3)] text-white"
                : "scale-100 bg-black/30 shadow-[0_0_10px_rgba(155,0,255,0.5),0_0_20px_rgba(155,0,255,0.4),0_0_30px_rgba(155,0,255,0.3)] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
            }`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* أنماط CSS داخل الكومبوننت */}
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

      <div className="max-w-3xl w-full mt-10 px-6 space-y-6" key={renderKey}>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {selectedTab} Skills
        </h2>

        {currentSkills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-item bg-[#0b0219] backdrop-blur-3xl backdrop-saturate-150 backdrop-contrast-125 border border-white/15 shadow-lg rounded-xl px-6 py-4 flex flex-col space-y-3 text-white font-JetBrains hover:bg-purple-800/30"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <span className="text-2xl text-purple-400">{skill.icon}</span>
                <span className="font-medium text-white">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-300">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#a78bfa] shadow-[0_4px_12px_rgba(124,58,237,0.25)] transition-all duration-700 ease-out"
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
