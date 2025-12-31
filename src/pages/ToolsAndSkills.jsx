// ToolsAndSkills.jsx
import React from "react";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { SiFigma, SiPostman } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import Skills from "../componants/Skills";

const ToolsAndSkills = () => {
  const Tools = [
    { id: 1, icon: <VscCode />, name: "Visual Studio Code" },
    { id: 2, icon: <FaGithub />, name: "GitHub" },
    { id: 3, icon: <SiFigma />, name: "Figma" },
    { id: 4, icon: <SiPostman />, name: "Postman" },
    { id: 5, icon: <TbBrandMongodb />, name: "mongoDB" },
    { id: 6, icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0c011e] via-[#05000d] to-black overflow-hidden">
    
      <div className="relative z-10 flex flex-col items-center pt-10">
       
        <h1 className="text-5xl text-white font-bold mb-16 flex space-x-4">
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Tools
          </span>
          <span className="text-white">And</span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>

      
        <h2 className="text-4xl text-purple-400 mb-8">Tools</h2>
        <div className="grid md:grid-cols-3 gap-10 px-10 w-full max-w-4xl">
          {Tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center justify-center p-5 bg-black/30 rounded-2xl shadow-[0_0_10px_rgba(155,0,255,0.5),0_0_20px_rgba(155,0,255,0.4),0_0_30px_rgba(155,0,255,0.3)] hover:scale-110 transition-transform duration-300"
            >
              <span className="text-[#c77dffff] text-5xl mb-2">
                {tool.icon}
              </span>
              <span className="text-white text-lg text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>


        <h2 className="text-4xl text-purple-400 mt-20 mb-8">Skills</h2>
        <Skills />
      </div>
    </div>
  );
};

export default ToolsAndSkills;
