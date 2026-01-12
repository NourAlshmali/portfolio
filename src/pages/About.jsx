import React from "react";
import me from "../assets/img/me.png";
import MagicBento from "../componants/MagicBento";

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center
      bg-gradient-to-b from-black via-[#05000d] to-[#0c011e] px-4 sm:px-8 lg:px-10"
    >
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl tracking-[3px] text-center font-JetBrains mt-16">
        Why hire me for your
        <span className="bg-gradient-to-r pl-2 sm:pl-4 font-JetBrains tracking-[3px] from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
          next project?
        </span>
      </h1>

      {/* Main Content */}
      <div className="relative flex flex-col pl-20 lg:flex-row justify-center items-center gap-10 mt-10 w-full h-[80vh]">
        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="border-2 border-purple-400 rounded-3xl p-1 w-[90%] sm:w-[350px] md:w-[380px] lg:w-[480px] h-[450px] sm:h-[480px] lg:h-[500px] flex items-center justify-center">
            <img
              src={me}
              alt="Profile"
              className="w-[94%] h-[98%] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* MagicBento */}
        <div className="w-full lg:w-2/3">
          <MagicBento />
        </div>
      </div>
    </div>
  );
};

export default About;
