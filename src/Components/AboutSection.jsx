import React from "react";
import TechStack from "./TechStack";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#2E2D2D] p-10">
      {/*title*/}
      <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
      <div className="h-1 w-16 bg-[#D97183] mb-6"></div>

      {/*about*/}
      <p className="text-[#fff] mt-4 font-medium">
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
