"use client";

import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useTransform } from "framer-motion";

const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;

  return (value) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const setTransform = (item, event, x, y) => {
  const bounds = item.getBoundingClientRect();
  const relativeX = event.clientX - bounds.left;
  const relativeY = event.clientY - bounds.top;
  const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  x.set(xRange * 10);
  y.set(yRange * 10);
};

const buttonVariants = cva(
  "ease-elastic-out flex justify-center items-center font-semibold rounded-full bg-white px-5 py-3 text-black transition-all duration-1000",
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

function MagneticButton({ size, children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const childX = useTransform(x, (latest) => latest * 0.5);
  const childY = useTransform(y, (latest) => latest * 0.5);

  return (
    <motion.button
      onPointerMove={(event) => setTransform(event.currentTarget, event, x, y)}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
    >
      <motion.span
        style={{ x: childX, y: childY }}
        className="ease-elastic-out inline-block transition-all duration-1000"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export default MagneticButton;
