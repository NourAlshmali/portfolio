import React from "react";
import me from "../assets/img/me.png"

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center
      bg-gradient-to-b from-black via-[#05000d] to-[#0c011e] px-4 sm:px-8 lg:px-16"
    >
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-10 tracking-[3px] text-center font-JetBrains">
        Why hire me for your
        <span className="bg-gradient-to-r pl-2 sm:pl-4 font-JetBrains tracking-[3px] from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
          next project?
        </span>
      </h1>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 w-full">
        {/* Image */}
        <div className="border-2 border-purple-400 rounded-3xl p-2 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
          <img
            src={me}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Text & Stats */}
        <div className="flex flex-col mt-8 lg:mt-0 lg:ml-10 w-full max-w-[750px]">
          <p className="text-white tracking-[2px] font-JetBrains mb-6 leading-8 sm:leading-10 text-lg sm:text-xl md:text-3xl">
            I craft clean, modern, and responsive websites where design meets
            logic. Blending creativity with code, I build fast, user-focused
            digital experiences that look great and feel even better on every
            device.
          </p>

          {/* CV Download */}
          <div className="flex justify-start mb-6">
            <a
              href="/NourAlshamaliCV.pdf"
              download
              className="px-6 py-3 rounded-xl font-JetBrains text-white bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:opacity-90 transition cursor-pointer"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-start sm:gap-12 gap-6 mt-6">
            <div className="flex flex-col space-y-2">
              <span className="text-white font-JetBrains text-2xl sm:text-3xl">
                1 year
              </span>
              <span className="text-2xl sm:text-3xl font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Experience
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-white font-JetBrains text-2xl sm:text-3xl">
                +5 Projects
              </span>
              <span className="text-2xl sm:text-3xl font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Github
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
