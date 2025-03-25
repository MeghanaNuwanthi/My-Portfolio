import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Eight Reasons why Innovation beats Efficiency",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    date: "Jan 20, 2019",
    comments: "2 Comments",
    image: "https://source.unsplash.com/300x200/?office,desk",
  },
  {
    id: 2,
    title: "UI/UX Design Trends in 2024",
    description: "Explore the latest design trends for 2024...",
    date: "Feb 10, 2024",
    comments: "5 Comments",
    image: "https://source.unsplash.com/300x200/?technology,desk",
  },
  {
    id: 3,
    title: "How Minimalism Improves User Experience",
    description: "Minimalist design enhances usability and aesthetics...",
    date: "Mar 15, 2023",
    comments: "3 Comments",
    image: "https://source.unsplash.com/300x200/?minimalist,design",
  },
  {
    id: 4,
    title: "Dark Mode: A Trend or a Necessity?",
    description: "Discover why dark mode is preferred by many users...",
    date: "Apr 5, 2023",
    comments: "7 Comments",
    image: "https://source.unsplash.com/300x200/?darkmode,technology",
  },
  {
    id: 5,
    title: "The Psychology of Colors in UI/UX",
    description: "Learn how colors influence user behavior and perception...",
    date: "May 12, 2023",
    comments: "4 Comments",
    image: "https://source.unsplash.com/300x200/?colors,uiux",
  },
  {
    id: 6,
    title: "Typography: The Secret to Better Readability",
    description: "Good typography enhances user engagement...",
    date: "Jun 8, 2023",
    comments: "6 Comments",
    image: "https://source.unsplash.com/300x200/?typography,design",
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
                  }}
                >
                  <div className="bg-[#2E2D2D] text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
                    <img src={project.image} alt="Project" className="w-full h-40 object-cover" />
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="text-sm opacity-70">
                        {project.date} - {project.comments}
                      </p>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm flex-grow">{project.description}</p>
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
