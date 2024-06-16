"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Created a portfolio using React and JavaScript",
    image: "/reactPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/Portfolio",
    previewUrl: "https://ssoyeonisgood.github.io/Portfolio/",
  },
  {
    id: 2,
    title: "ToDo list",
    description: "Created a todo list app using JavaScript",
    image: "/todoList.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/ToDoList",
    previewUrl: "https://ssoyeonisgood.github.io/ToDoList/",
  },
  {
    id: 3,
    title: "Recipe App",
    description: "Created a recipe app using JavaScript",
    image: "/recipeApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/RecipeApp",
    previewUrl: "https://ssoyeonisgood.github.io/RecipeApp/",
  },
  {
    id: 4,
    title: "Quiz App",
    description: "Created a quiz app using JavaScript",
    image: "/quizGame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/QuizApp",
    previewUrl: "https://ssoyeonisgood.github.io/QuizApp/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Game",
    description: "Team Project with Android studio",
    image: "/tictactoe.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Terris711/MAD_Assignment1",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Island Builder",
    description: "Island Builder using java",
    image: "/islandBuilder.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ssoyeonisgood/IslandBuilder",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Contact App",
    description: "Contact App using java",
    image: "/contact.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ssoyeonisgood/contactApp",
    previewUrl: "",
  },
];

const ProjectSection: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
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
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
