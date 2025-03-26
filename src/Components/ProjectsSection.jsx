import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "TAVOLA - Table Reservation System",
    Link: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    tech: "Technologies Used: HTML, CSS, PHP, JavaScript, SQL",
    comments: "Completed",
    image: "src/assets/Tavola.png",
  },
  {
    id: 2,
    title: " ZENOFY E-commerce Web application",
    Link: "Explore the latest design trends for 2024...",
    tech: "Technologies Used: HTML, CSS, PHP, JavaScript, SQL",
    comments: "Ongoing",
    image: "src/assets/zenofy.png",
  },
  {
    id: 3,
    title: "MessageMe mobile application",
    Link: "Minimalist design enhances usability and aesthetics...",
    tech: "Technologies Used: Java, XML ",
    comments: "Completed",
    image: "src/assets/MessageMe.png",
  },
  {
    id: 4,
    title: "SpiritX Login System",
    Link: "Discover why dark mode is preferred by many users...",
    tech: "Technologies Used: React.js, TailwindCSS, SQL",
    comments: "Completed",
    image: "src/assets/Login.png",
  },
  {
    id: 5,
    title: " Serendib flour company Warehouse Project",
    Link: "Learn how colors influence user behavior and perception...",
    tech: "Technologies Used: React.js, Node.js, TailwindCSS, SQL, Roboflow workspace (AI integration)",
    comments: "Ongoing",
    image: "src/assets/Serendib.png",
  },
  {
    id: 6,
    title: "Pet Care Web application",
    Link: "Good typography enhances user engagement...",
    tech: "Technologies Used: HTML, CSS, JavaScript",
    comments: "Completed",
    image: "src/assets/PetCare.png",
  },
  {
    id: 7,
    title: "Human-Resource Management System Login Page ",
    Link: "Good typography enhances user engagement...",
    tech: "Technologies Used: HTML, CSS, JavaScript",
    comments: "Completed",
    image: "src/assets/HRM.png",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Handle responsivenes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProjects(1);
      } else if (window.innerWidth < 1024) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex + visibleProjects < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="projects" className="bg-[#E4E4E4] p-10 flex ">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#2E2D2D] mb-4">My Projects</h2>
        <div className="h-1 w-16 bg-[#D97183] mb-6 "></div>

        {/* Project container */}
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            className="p-3 bg-gray-300 rounded-full disabled:opacity-50"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          {/* Projects */}
          <div className="overflow-hidden w-full max-w-5xl">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
              }}
            >
              {projects.map((project) => (
              <div
                  key={project.id}
                  className="p-4 flex-shrink-0"
                  style={{
                    width: `calc(100% / ${visibleProjects})`,
                  }}>
                {/* Project Card */}
                <div className="bg-[#2E2D2D] text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full">

                  <div className="relative group">  
                    <img
                        src={project.image}
                        alt="Project"
                        className="w-full h-50 object-cover transition duration-300 group-hover:opacity-40"
                      />
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 flex pt-20 h-30 cursor-pointer justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-[#2E2D2D] rounded-full">
                      <FaArrowRight />
                    </button>
                    </div>
                  
                    <div className="p-4 flex flex-col flex-grow pl-2 pr-2 pb-2">
                      <p className="text-sm opacity-70">
                        {project.comments}
                      </p>
                      <h3 className="text-lg font-bold pb-1 transition duration-300 group-hover:text-[#D97183]">{project.title}</h3>
                      <p className="text-sm opacity-70 pb-2">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="p-3 bg-gray-300 rounded-full disabled:opacity-50"
            onClick={nextSlide}
            disabled={currentIndex + visibleProjects >= projects.length}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
