import React from "react";

const About = () => {
  return (
    <div
      className="w-full h-lvh flex flex-col items-center
    bg-gradient-to-b from-black via-[#05000d] to-[#0c011e]"
    >
      <h1 className="text-white text-5xl pt-10 tracking-[3px] text-center font-JetBrains   ">
        Why hire me for your
        <span className="bg-gradient-to-r pl-4 font-JetBrains tracking-[3px] from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
          next project?
        </span>
      </h1>
      <div className="relative w-[80%] flex justify-center gap-[10%] items-center mt-[8%] ">
        <div className="border-2 border-purple-400 rounded-text-3xl p-2 w-[450px] h-[600px] flex items-center justify-center">
          <img
            src="public/assets/img/me.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="abslute right-[10%]">
          <p className="text-white tracking-[2px] font-JetBrains mb-8 leading-10 max-w-[750px] w-full text-3xl">
            I craft clean, modern, and responsive websites where design meets
            logic. Blending creativity with code, I build fast, user-focused
            digital experiences that look great and feel even better on every
            device.
          </p>
          <div className="flex gap-6 justify-center">
           <a 
  href="/NourAlshamaliCV.pdf" 
  download
  className="m-3 px-6 py-3 rounded-xl font-JetBrains text-white bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:opacity-90 transition cursor-pointer"
>
  Download CV
</a>

          </div>
          <div className="flex justify-center mt-15 gap-[20%] ">
            <div className="flex flex-col space-y-3">
              <span className="text-white font-JetBrains text-3xl">
                {" "}
                1 year{" "}
              </span>
              <span className="text-3xl font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Experience
              </span>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="text-white font-JetBrains text-3xl">
                {" "}
                + 10 Projects{" "}
              </span>
              <span className="text-3xl font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
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
