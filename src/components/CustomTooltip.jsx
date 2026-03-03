import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

const CustomTooltip = ({ children, title, side = "bottom" }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>

      <TooltipContent
        side={side}
        sideOffset={6}
        className="
          bg-white
          text-black
          border border-gray-200
          shadow-md
          rounded-lg
          px-3 py-2
          data-[state=closed]:animate-none
        "
      >
        <p className="text-sm font-medium">{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CustomTooltip;