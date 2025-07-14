"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

type TabType = "skills" | "education" | "experience";

interface TabData {
  title: string;
  id: TabType;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Curtind college</li>
        <li>Curtin Univercity</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Super tetsudo</li>
        <li>Gelare</li>
        <li>Sustech</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<TabType>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: TabType) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const getTabContent = (id: TabType) => {
    const tabData = TAB_DATA.find((t) => t.id === id);
    return tabData ? tabData.content : null;
  };

  return (
    <section
      id="about"
      className="text-white justify-center min-h-[100vh] flex align-middle"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/PXL_20250204_100122319.JPG"
            alt="about-image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
          <div className="mt-4 md:mt-0 flex flex-col h-full text-center sm:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
              I&apos;m Soyeon Kim. I recently graduated with a Bachelor&apos;s
              in Software Engineering from Curtin University in Febrary this
              year. During my studies, I built strong skills in software
              development, database management, and web technologies.
            </p>
            <br />
            <p className="text-base md:text-lg">
              In 2024, I completed a 6-month internship at Sustech Engineering,
              where I helped convert Word and Excel forms into web-based formats
              using PHP and Laravel. This experience strengthened my full-stack
              development skills and taught me how to work effectively in a team
              environment. I also created a personal project called Recipe
              Recommender, an AI web app using Remix, Typecript, Tailwind and
              Vercel AI-SDK, which helped me learn how to integrate APIs and
              build full-stack applications.
            </p>
            <br />
            <p className="text-base md:text-lg">
              Outside of tech, I enjoy watching dramas and playing the game TFT.
              It’s a great way for me to relax. I’m currently watching Breaking
              Bad, which is a bit of an older drama but still one of the best
              I’ve seen. The storytelling, character development, and suspense
              make it incredibly engaging—I highly recommend it if you enjoy
              intense, well-written shows.
            </p>
            {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
            >
            Skills
            </TabButton>
            <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
            >
            Education
            </TabButton>
            <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
            >
            Experience
            </TabButton>
          </div>
          <div className="mt-8">{getTabContent(tab)}</div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
