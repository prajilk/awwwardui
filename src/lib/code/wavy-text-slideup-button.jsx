"use client";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { motion } from "framer-motion";

const buttonVariants = cva("uppercase border border-black text-black", {
  variants: {
    size: {
      default: "px-5 py-3 text-sm",
      sm: "px-4 py-3 text-xs",
      lg: "px-6 py-4 text-lg",
      icon: "size-10 rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const delay = (index) => {
  return index * 0.03;
};

const WavyTextSlideUpButton = ({ children, size, className, ...props }) => {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(buttonVariants({ size, className }))}
    >
      <span className="relative block overflow-hidden">
        {/* Top text */}
        <Label
          animate={{
            y: isHover ? "-150%" : "0%",
          }}
          initial={{ y: "0%" }}
          isHover={isHover}
          letters={letters}
        />

        {/* Bottom text */}
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <Label
            animate={{
              y: isHover ? "0%" : "200%",
            }}
            initial={{ y: "200%" }}
            isHover={isHover}
            letters={letters}
          />
        </span>
      </span>
    </button>
  );
};

export default WavyTextSlideUpButton;

const Label = ({ letters, initial, animate }) => {
  return letters.map((letter, index) => (
    <motion.span
      key={index}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.5,
        delay: delay(index),
      }}
      className={`relative inline-block`}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));
};
