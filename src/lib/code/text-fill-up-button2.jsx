"use client";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { useState } from "react";

const buttonVariants = cva(
  "text-black border border-black rounded-full uppercase overflow-hidden relative",
  {
    variants: {
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-3 text-xs",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const innerLabelWrapperVariants = {
  initial: { height: 0 },
  animate: { height: "101%" },
};

const innerLabelVariants = {
  initial: { y: "20px", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.05, duration: 0.3, ease: "easeInOut" },
  },
};

const outerLabelVariants = {
  animate: { y: "-20px" },
};

const TextFillUpButton2 = ({
  children,
  size,
  className,
  classNames,
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(buttonVariants({ size, className }))}
    >
      {/* Outer Label */}
      <span className="relative block overflow-hidden">
        <motion.span
          variants={outerLabelVariants}
          animate={
            isHover
              ? "animate"
              : {
                  y: 0,
                  transition: { ease: "easeInOut", delay: 0.05 },
                }
          }
          className="relative flex items-center gap-2"
        >
          {children}
        </motion.span>
      </span>

      {/* Inner Label Wrapper */}
      <motion.span
        variants={innerLabelWrapperVariants}
        initial="initial"
        animate={isHover ? "animate" : ""}
        className={cn(
          "absolute bottom-0 left-0 right-0 flex w-full items-center justify-center overflow-hidden bg-black text-white",
          classNames?.innerWrapper,
        )}
      >
        {/* Inner Label */}
        <span className="overflow-hidden">
          <motion.span
            variants={innerLabelVariants}
            initial="initial"
            animate={isHover ? "animate" : { y: "20px" }}
            className="relative flex items-center gap-2"
          >
            {children}
          </motion.span>
        </span>
      </motion.span>
    </button>
  );
};

export default TextFillUpButton2;
