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

// const about = {
//   title: "About me",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui maiores deserunt illo, voluptatum porro illum error voluptates esse repellat quae est veritatis sed dignissimos quam non ipsam. Modi, sint!",
//   info: [
//     {
//       fieldName: "Name",
//       fieldValue: "Soyeon Kim",
//     },
//     {
//       fieldName: "Phone",
//       fieldValue: "0434 400 656",
//     },
//     {
//       fieldName: "Experience",
//       fieldValue: "6 Months",
//     },
//     {
//       fieldName: "Nationality",
//       fieldValue: "South Korea",
//     },
//     {
//       fieldName: "Email",
//       fieldValue: "haikyu5123@gmail.com",
//     },
//     {
//       fieldName: "Languages",
//       fieldValue: "English, Korean",
//     },
//   ],
// };

const experience = {
  icon: "/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui maiores deserunt illo, voluptatum porro illum error voluptates esse repellat quae est veritatis sed dignissimos quam non ipsam. Modi, sint!",
  items: [
    {
      company: "Super Tetsudo",
      position: "Sushi maker",
      duration: "2020-2022",
    },
    {
      company: "Gelare",
      position: "Barista",
      duration: "2022-2024",
    },
    {
      company: "Sustech",
      position: "Intern",
      duration: "2023-2024",
    },
  ],
};

const education = {
  icon: "/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui maiores deserunt illo, voluptatum porro illum error voluptates esse repellat quae est veritatis sed dignissimos quam non ipsam. Modi, sint!",
  items: [
    {
      institution: "Curtin College",
      degree: "Deploma of IT",
      duration: "2021 -2022",
    },
    {
      institution: "Curtin University",
      degree: "Bachelor of Software engineering",
      duration: "2022 -2024",
    },
  ],
};

const Skills = {
  title: "My Skill",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui maiores deserunt illo, voluptatum porro illum error voluptates esse repellat quae est veritatis sed dignissimos quam non ipsam. Modi, sint!",
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
      name: "Javascript",
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
  ],
};

const Resume = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
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
              {/* <TabsTrigger value={"about"}>About me</TabsTrigger> */}
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full text-white">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto-xl:mx-0">
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
              <TabsContent value="education" className="w-full text-white">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto-xl:mx-0">
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
              {/* <TabsContent
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
              </TabsContent> */}
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
