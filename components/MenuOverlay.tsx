import React from "react";
import NavLink from "./NavLink";

interface NavLinkType {
  title: string;
  path: string;
}

const MenuOverlay = ({ links }: { links: NavLinkType[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-zinc-950 bg-opacity-90">
      {links.map((link, index) => (
        <li key={index} className="py-2">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
