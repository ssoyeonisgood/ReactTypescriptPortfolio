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
    title: "Recipe Recommender",
    description:
      "An AI web app that recommends recipes based on user-uploaded images, built with Remix, TypeScript, Vercel AI-CDK, and Tailwind.",
    image: "/recipeRecommender.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/recipe-recommender-remix",
    previewUrl: "https://recipe-reco.netlify.app/",
  },
  {
    id: 2,
    title: "Availability and Enrollment Tracker (Capstone Project)",
    description:
      "A web app that tracks course availability and enrollment status, built with React, Javascript, Node.js, Express, and PostpreSQL.",
    image: "/capstone.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://drive.google.com/drive/folders/1N3WLZHC5kn2z_BYL03TsJ5_pV3AY28aF?usp=sharing",
  },
  {
    id: 3,
    title: "Recipe App",
    description:
      "A recipe search app using JavaScript that has bookmarking functionality for easy meal planning.",
    image: "/recipeApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/RecipeApp",
    previewUrl: "https://ssoyeonisgood.github.io/RecipeApp/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    description:
      "A collaborative Tic-Tac-Toe mobile game developed using Android Studio and Java.",
    image: "/tictactoe.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Terris711/MAD_Assignment1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Island Builder",
    description:
      "An Island Builder mobile game developed with Android Studio and Java, featuring drag-and-drop icon placement, map regeneration, and icon deletion.",
    image: "/islandBuilder.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ssoyeonisgood/IslandBuilder",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "YouTube clone Website",
    description:
      "Developed a non-functional YouTube UI clone to practice front-end web development skills",
    image: "/youtube.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ssoyeonisgood/YouTube",
    previewUrl: "https://you-tube-clone-ashen.vercel.app/",
  },
  {
    id: 7,
    title: "Weather Logger",
    description:
      "Developed a Python data pipeline to collect real-time weather data using APIs, storing results in CSV for historical tracking.",
    image: "/weather.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://drive.google.com/drive/folders/1rFWnGi7ojOdxG5ywVKY-vF9bi2U3mhqS?usp=sharing",
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
            transition={{ duration: 0.3, delay: index * 0.1 }}
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
