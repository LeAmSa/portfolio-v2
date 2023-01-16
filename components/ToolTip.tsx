import React from "react";

interface ToolTipProps {
  title: string;
}

function ToolTip({ title }: ToolTipProps) {
  return (
    <div className="hidden lg:block absolute top-[160%] left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-600 rounded-lg shadow-lg invisible group-hover:visible">
      {title}
    </div>
  );
}

export default ToolTip;
