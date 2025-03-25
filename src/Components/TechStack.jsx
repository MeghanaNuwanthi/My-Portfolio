import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "HTML 5", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "PHP", level: "45%" },
  { name: "Python", level: "55%" },
  { name: "Java", level: "50%" },
  { name: "C", level: "40%" },
  { name: "SQL", level: "85%" },
];

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
    <div ref={ref} className="mt-5">
      <h2 className="text-xl font-medium text-[#E4E4E4] mb-4">Technology Stack</h2>
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-300 gap-4 ">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#2E2D2D] p-4 rounded-md ">
            <p className="text-[#E4E4E4] mb-2">{skill.name}</p>
            <div className="w-full bg-[#E4E4E4] h-2 relative">
            <motion.div
                className="bg-[#D97183] h-2"
                initial={{ width: "0%" }} 
                animate={isInView ? { width: skill.level } : { width: "0%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </motion.div>
  );
};

export default TechStack;