"use client";

import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DoubleFillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "relative flex items-center justify-center overflow-hidden rounded-full bg-[#8330C2] uppercase text-white",
  {
    variants: {
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const transition = {
  duration: 0.6,
  ease: "easeOut",
};
const delayTransition = { delay: 0.2, duration: 0.6, ease: "easeOut" };

const DoubleFillButton = ({
  children,
  size,
  className,
  ...props
}: DoubleFillButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ x: "-100%" }}
            animate={{
              x: "0%",
              transition,
            }}
            exit={{
              x: "100%",
              transition: delayTransition,
            }}
            className={`absolute size-full rounded-full bg-[#933bd7]`}
          ></motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ x: "-100%" }}
            animate={{
              x: "0%",
              transition: delayTransition,
            }}
            exit={{ x: "100%", transition }}
            className="absolute size-full translate-x-full rounded-full bg-[#9e4cdc]"
          ></motion.span>
        )}
      </AnimatePresence>
      <span className="z-10">{children}</span>
    </button>
  );
};

export default DoubleFillButton;
