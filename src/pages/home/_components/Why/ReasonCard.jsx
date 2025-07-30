import React from "react";
import { cn } from "../../../../libs/utils/utils";

export default function ReasonCard({ className, children }) {
  return (
    <div
      className={cn(
        "relative font-inria-serif bg-[#46465D6B] rounded-3xl border-2 border-[#46465D] backdrop-blur-[65px] p-8 mx-auto w-full overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 noise-bg z-0"></div>
      <div className="relative text-white">{children}</div>
    </div>
  );
}
