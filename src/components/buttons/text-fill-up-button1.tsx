"use client";

import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";

type TextFillUpButton1Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    classNames?: {
      filler: string;
    };
  };

const buttonVariants = cva(
  "relative group flex justify-center items-center text-black rounded-xl border border-black overflow-hidden",
  {
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
  },
);

const TextFillUpButton1 = ({
  children,
  size,
  className,
  classNames,
  ...props
}: TextFillUpButton1Props) => {
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
      className={cn(buttonVariants({ size, className }))}
    >
      <motion.span
        animate={isHover ? { y: "-200%" } : { y: "0%" }}
        transition={{
          ease: "easeOut",
        }}
        className="block"
      >
        {children}
      </motion.span>

      {/* Filler */}
      <motion.span
        initial={{ bottom: "-100%" }}
        animate={isHover ? { bottom: "0%" } : { bottom: "-100%" }}
        transition={{
          ease: "easeOut",
        }}
        className={cn(
          "absolute flex size-full items-center justify-center rounded-xl bg-black text-white",
          classNames?.filler,
        )}
      >
        {children}
      </motion.span>
    </button>
  );
};

export default TextFillUpButton1;
