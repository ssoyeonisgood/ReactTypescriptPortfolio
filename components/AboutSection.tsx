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
            src="/soyeon2.jpg"
            alt="about-image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
          <div className="mt-4 md:mt-0 flex flex-col h-full text-center sm:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
              I&apos;m Soyeon Kim, currently in my third year of Software
              Engineering at Curtin University. Over the past three years,
              I&apos;ve learned Python, C, Java, MySQL, and data structures and
              algorithms, completing various school assignments with these
              technologies.
            </p>
            <br />
            <p className="text-base md:text-lg">
              During my recent vacation, I took the initiative to learn
              TypeScript and React by working on self-directed projects.
              Additionally, I gained valuable experience in PHP and Laravel
              during an internship at Sustech Engineering Company. After my
              internship, I continued working there as a casual employee, which
              allowed me to further develop my skills and understand how to
              collaborate effectively within a team.
            </p>
            <br />
            <p className="text-base md:text-lg">
              Looking ahead, I aim to keep learning and growing in software
              engineering. My goal is to acquire advanced skills and expertise,
              leading to a fulfilling career in the industry.
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
