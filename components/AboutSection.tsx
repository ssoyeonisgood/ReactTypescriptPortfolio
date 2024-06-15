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
    <section id="about" className="text-white mt-60 md:mt-60">
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
            src="/soyeon2.jpg"
            alt="about-image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eaque ratione maxime quo natus? Repellendus quam eius laborum
              saepe voluptatum accusantium autem blanditiis suscipit placeat,
              iste velit, quibusdam nesciunt. Nemo.
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
