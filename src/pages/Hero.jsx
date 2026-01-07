import React, { useEffect, useState } from "react";
import bgImage from "../assets/img/BG-hero.png";

const Hero = () => {
  const messages = ["Web Designer", "Web Developer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentMessage.substring(0, prev.length - 1)
          : currentMessage.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText.length === currentMessage.length) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, messages]);

  return (
   <div
  className="w-full h-screen flex"
  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
      <div className="flex flex-col justify-center items-center w-full h-full space-y-13 px-4 sm:px-8 lg:px-16">
        <h1 className="text-white font-JetBrains font-bold tracking-[5px] text-4xl sm:text-5xl md:text-6xl text-center">
          Hi, I am Nour
        </h1>

        <h1 className="flex items-center text-5xl sm:text-6xl md:text-7xl text-center">
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent font-JetBrains tracking-[3px]">
            {displayText}
          </span>
          <span className="text-white font-JetBrains blinking ml-2">|</span>
        </h1>

        <h1 className="text-white font-JetBrains font-bold tracking-[5px] text-3xl sm:text-4xl md:text-6xl text-center">
          Building your dream
        </h1>

        {/* pixel By pixel */}
        <h1 className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <span className="text-4xl sm:text-5xl md:text-7xl font-JetBrains font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent tracking-[5px]">
            pixel
          </span>
          <span className="text-white font-JetBrains tracking-[5px] font-bold text-3xl sm:text-4xl md:text-7xl">
            By
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold font-JetBrains tracking-[5px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            pixel
          </span>
        </h1>
      </div>

      <style jsx>{`
        .blinking {
          display: inline-block;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
