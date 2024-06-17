"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import React from "react";
import { Section } from "lucide-react";
import { link } from "fs";
import Image from "next/image";

const about = {
  title: "About me",
  description:
    "I have six months of experience in my field. I am from South Korea and speak both English and Korean. I am dedicated to my work and always eager to learn and improve.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Soyeon Kim",
    },
    {
      fieldName: "Phone",
      fieldValue: "0434 400 656",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South Korea",
    },
    {
      fieldName: "Email",
      fieldValue: "haikyu5123@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Korean",
    },
  ],
};

const experience = {
  icon: "/badge.svg",
  title: "My Experience",
  description:
    "I have diverse work experience ranging from roles in the food and beverage industry to positions in software engineering. My journey includes working as a barista, sushi maker, and software assistant, giving me a well-rounded skill set and a strong work ethic.",
  items: [
    {
      company: "Coffee code",
      position: "Barista",
      duration: "2024.06 - present",
    },
    {
      company: "Sustech Engineering Pty Ltd",
      position: "Software assistant",
      duration: "2024.03 - 2024.06",
    },
    {
      company: "Sustech Engineering Pty Ltd",
      position: "Software Engineer Intern",
      duration: "2023.12 - 2024.03",
    },
    {
      company: "Gelare",
      position: "Barista",
      duration: "2022.12 - 2024.03",
    },
    {
      company: "Super Tetsudo",
      position: "Sushi maker",
      duration: "2020.05 - 2022.12",
    },
  ],
};

const education = {
  icon: "/cap.svg",
  title: "My Education",
  description:
    "I have pursued my education in the field of IT and software engineering, starting with a Diploma of IT from Curtin College, where I achieved a grade of 85.50. I am currently completing my Bachelor's degree in Software Engineering at Curtin University.",
  items: [
    {
      institution: "Curtin University",
      degree: "Bachelor of Software engineering",
      grade: "",
      duration: "2022 - present",
    },
    {
      institution: "Curtin College",
      degree: "Deploma of IT",
      grade: "(Grade: 85.50)",
      duration: "2021 - 2022",
    },
  ],
};

const Skills = {
  title: "My Skill",
  description:
    "I have developed a strong skill set in web development technologies, including CSS, HTML, JavaScript, TypeScript, React, Tailwind, Next.js and so on. These skills enable me to create responsive and dynamic web applications.",
  skillList: [
    {
      icon: "/css.svg",
      name: "CSS",
    },
    {
      icon: "/html.svg",
      name: "HTML",
    },
    {
      icon: "/js.svg",
      name: "JavaScript",
    },
    {
      icon: "/react.svg",
      name: "React",
    },
    {
      icon: "/tailwind.svg",
      name: "Tailwind",
    },
    {
      icon: "/next.svg",
      name: "Next",
    },
    {
      icon: "/typescript.png",
      name: "TypeScript",
    },
    {
      icon: "/php.png",
      name: "PHP",
    },
    {
      icon: "/laravel.png",
      name: "Laravel",
    },
    {
      icon: "/python.png",
      name: "Python",
    },
    {
      icon: "/mysql.png",
      name: "MySQL",
    },
  ],
};

const Resume = () => {
  return (
    <section id="info">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value={"experience"}>Experience</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"about"}>About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full text-white">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 roinded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-yellow-200">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-yellow-200"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full text-white ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 roinded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-yellow-200">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                              <p className="text-sm mt-2">{item.grade}</p>
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-yellow-200"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full text-white">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{Skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {Skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {Skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] hover:bg-yellow-500 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl  transition-all duration-300">
                                  <Image
                                    src={skill.icon}
                                    width={60}
                                    height={60}
                                    alt={skill.name}
                                  ></Image>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-white text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
