"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Westminster Shopping Management System",
    image: "/images/projects/shop.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/d1nushi/Westminster-Shopping-Manager",
    
  },
  {
    id: 2,
    title: "Movie Web Application",
    image: "/images/projects/movie.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/d1nushi/Movie-Website",
    
  },
  {
    id: 3,
    title: "Mock-Interview Application",
    image: "/images/projects/interview.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DinuliJay/SDGP-CS-01-FINAL",
    
  },
  {
    id: 4,
    title: "Foodies Fav Food Management System",
    image: "/images/projects/queue.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/d1nushi/Westminster-Shopping-Manager",
    
  },
  {
    id: 5,
    title: "Progression Outcome System",
    image: "/images/projects/progress.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/d1nushi/Student-Progression-Outcome-System",
    
  },
  {
    id: 6,
    title: "Percolation",
    image: "/images/projects/percolation.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/d1nushi/Percolation",
    
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
