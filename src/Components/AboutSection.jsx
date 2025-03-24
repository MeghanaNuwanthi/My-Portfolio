import React from "react";
import TechStack from "./TechStack";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#ffffff] p-10">
      <h2 className="text-2xl font-bold text-[#000000]">About Me</h2>
      <p className="text-[#392F4B] mt-4 font-medium">
        Hello! I'm Meghana Nuwanthi Siriwardhana, a passionate Software Engineering undergraduate
        at CINEC Campus with a keen interest in creating intuitive and visually appealing digital experiences.
        Aspiring to be a UI/UX designer, I strive to combine creativity with technical expertise to craft designs
        that resonate with users. Welcome to my portfolio, where I showcase my journey and projects!
      </p>
      <TechStack/>
    </section>
  );
};

export default AboutSection;
