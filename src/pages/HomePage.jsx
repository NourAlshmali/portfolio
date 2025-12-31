import React from "react";
import Hero from "./Hero";
import About from "./About";
import ToolsAndSkills from "./ToolsAndSkills";
import MyPortfolio from "./MyPortfolio";
import Contact from "./Contact";

const HomePage = () => {
  return (
   <div>
      <section id="home" className="scroll-mt-32">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-32">
        <About />
      </section>

      <section id="skills" className="scroll-mt-32">
        <ToolsAndSkills />
      </section>

      <section id="projects" className="scroll-mt-32">
        <MyPortfolio />
      </section>

      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
