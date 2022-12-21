import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h3 className="absolute top-24 uppercase tracking-[20px] translate-x-[10px] text-gray-500 text-2xl">
      {children}
    </h3>
  );
}

export default SectionTitle;
