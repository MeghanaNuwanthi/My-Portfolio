import React from "react";
import { motion } from "framer-motion";
import Navbar from "../src/Components/Navbar";
import HeroSection from "../src/Components/HeroSection";
import AboutSection from "../src/Components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "../src/Components/CertificatesSection";
import ContactSection from "../src/Components/ContactSection";

const App = () => {
  return (
    <div className="bg-[#F2F2F2] pt-20 min-h-screen font-sans">
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ProjectsSection />
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <CertificatesSection />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default App;
