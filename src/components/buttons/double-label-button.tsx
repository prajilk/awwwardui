"use client";

import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

type DoubleLabelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    classNames?: {
      innerWrapper: string;
    };
  };

const buttonVariants = cva(
  "relative flex items-center justify-center overflow-hidden rounded-md border border-black uppercase text-black",
  {
    variants: {
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-3 text-xs",
        lg: "px-6 py-4 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const innerLabelWrapperVariants = {
  initial: { height: 0, marginBottom: "4px", width: "80%" },
  animate: { height: "101%", marginBottom: 0, width: "101%" },
};

const innerLabelVariants = {
  initial: { y: "20px" },
  animate: { y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const outerLabelVariants = {
  animate: { y: "-20px" },
};

const DoubleLabelButton = ({
  children,
  size,
  className,
  classNames,
  ...props
}: DoubleLabelButtonProps) => {
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
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
    >
      {/* Outer Label */}
      <span className="relative block overflow-hidden">
        <motion.span
          variants={outerLabelVariants}
          animate={isHover ? "animate" : { y: 0, transition: { delay: 0.1 } }}
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
          "absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center justify-center overflow-hidden rounded-md bg-black text-white",
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

export default DoubleLabelButton;
