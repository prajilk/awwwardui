"use client";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

const buttonVariants = cva(
  "bg-black text-white rounded-full relative after:absolute after:size-full after:inset-0 after:opacity-0 after:block after:transition-all after:duration-500 after:rounded-full active:after:shadow-[0_0_0_0_black] active:after:opacity-100 active:after:transition-none",
  {
    variants: {
      size: {
        default: "px-5 py-3 font-semibold after:shadow-[0_0_0_15px_black]",
        sm: "px-4 py-2 text-sm font-semibold after:shadow-[0_0_0_10px_black]",
        lg: "px-6 py-4 font-bold text-lg after:shadow-[0_0_0_20px_black]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const WavyButton = ({ className, children, size, ...props }) => {
  const [isHover, setIsHover] = useState(false);
  const letters = Array.from(children);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      {...props}
      className={cn(buttonVariants({ size, className }))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover
        ? letters.map((letter, index) => (
            <span
              key={index}
              className={`${isHover && "animate-wavy"} relative inline-block`}
              style={{ animationDelay: `calc(0.05s * ${index})` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))
        : children}
    </button>
  );
};

export default WavyButton;
