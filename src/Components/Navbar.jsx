import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "certificates", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#E4E4E4] shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-[#000000] px-6">MN</div>
      <div className="space-x-2 flex text-sm lg:text-lg lg:space-x-4">
        {["home", "about", "projects", "certificates", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              activeSection === section ? "bg-[#D97183] text-white" : "text-[#675D78] hover:text-[#392F4B]"
            }`}
          >
            {section.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
