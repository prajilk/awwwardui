"use client";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

const buttonVariants = cva(
  "bg-white text-black font-normal uppercase flex items-center gap-3 group",
  {
    variants: {
      size: {
        default: "h-12 p-1 pe-4 text-xs rounded-2xl",
        sm: "h-10 p-1 pe-3 text-[.65rem] rounded-2xl",
        lg: "h-14 p-1 pe-4 text-sm rounded-2xl",
        icon: "size-12 p-1 rounded-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    }
  },
);

const TextShimmerButton = ({
  className,
  children,
  size,
  icon,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

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
        <span className="relative bg-[#ebe6e2] h-full aspect-square rounded-xl py-2 px-3 flex justify-center items-center overflow-hidden">
            <span className="[&>svg]:size-5 group-hover:translate-x-[200%] duration-300">
                {icon}
            </span>
            <span className="[&>svg]:size-5 absolute -left-1/2 group-hover:left-1/2 -translate-x-1/2 duration-300">
                {icon}
            </span>
        </span>
        {children && <span className="whitespace-nowrap">
            {children.split("").map((letter, index) => (
                <i
                    key={index}
                    className={`${isHover && "animate-shimmer-text"} relative inline-block not-italic`}
                    style={{ animationDelay: `calc(0.04s * ${index})` }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </i>
            ))}
        </span>}
    </button>
  );
};

export default TextShimmerButton;