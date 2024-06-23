import React from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import InstagramIcon from "/public/instagram-white-icon.png";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    icon: LinkedinIcon,
    path: "https://www.linkedin.com/in/soyeon-kim-727147251/",
  },
  {
    icon: GithubIcon,
    path: "https://github.com/ssoyeonisgood",
  },
  {
    icon: InstagramIcon,
    path: "https://www.instagram.com/soyeonisgood/",
  },
];

const Social = () => {
  return (
    <>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrrer"
            className=""
          >
            <Image src={item.icon} width={40} height={40} alt="social"></Image>
          </Link>
        );
      })}
    </>
  );
};

export default Social;
