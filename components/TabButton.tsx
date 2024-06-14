import React from "react";

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  selectTab,
  active,
  children,
}) => {
  const buttonClasses = `mr-3 font-semibold ${
    active
      ? "text-white border-b border-purple-500"
      : "text-[#ADB7BE] hover:text-white"
  }`;

  return (
    <button onClick={selectTab} className={buttonClasses}>
      {children}
    </button>
  );
};

export default TabButton;
