import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myimg from "../assets/I.png";

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-row items-center justify-center">
      {/* Text Section */}
      <div className="text-right lg:text-right lg:mr-10 ">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#2E2D2D]">
          Hello, I’m{" "}
          <span className="text-[#D97183]">
            <Typewriter
              words={["Meghana"]}
              loop={false}
              typeSpeed={170}
              cursor
              cursorStyle="."
            />
          </span>
        </h1>
        <p className="text-xl lg:text-3xl text-[#2E2D2D] mt-2">
          Professional UI/UX Designer
        </p>
      </div>

      {/* Image Section with Animated Circle */}
      <div className="mt-5 ml-10">
        <img
          src={myimg} alt="Meghana" className="rounded-lg w-80 lg:w-100"
        />
      </div>
      
    </section>
  );
};

export default HeroSection;
