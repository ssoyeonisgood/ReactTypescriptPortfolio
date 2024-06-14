import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100%)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  selectTab,
  active,
  children,
}) => {
  const buttonClasses = `mr-3 font-semibold ${
    active ? "text-white" : "text-[#ADB7BE] hover:text-white"
  }`;

  return (
    <button onClick={selectTab} className={buttonClasses}>
      {children}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-yellow-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
