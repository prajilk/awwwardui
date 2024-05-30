import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

type TextFillUpButton3Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "group relative flex items-center justify-center overflow-hidden rounded-full bg-[#0A3CCE] uppercase text-white [transition:background_.6s,color_cubic-bezier(.87,0,.13,1)_.6s]",
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

const TextFillUpButton3 = ({
  children,
  size,
  className,
  ...props
}: TextFillUpButton3Props) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
    >
      <span className="absolute size-full overflow-hidden rounded-full [transform:translateZ(0)] before:absolute before:left-0 before:top-0 before:size-full before:origin-bottom before:scale-y-0 before:bg-black before:transition-transform before:duration-500 group-hover:before:scale-y-100"></span>
      <span className="relative size-full scale-100 transition-transform duration-500 ease-[cubic-bezier(.87,0,.13,1)] group-hover:scale-x-105">
        <span className="absolute block w-full text-white transition-transform duration-500 ease-[cubic-bezier(.87,0,.13,1)] [transform:translateY(-160%)_rotateX(180deg)] group-hover:[transform:translateY(0)_rotateX(0)]">
          {children}
        </span>
        <span className="relative block text-white transition-transform duration-500 ease-[cubic-bezier(.87,0,.13,1)] [transform:translateY(0)_rotateX(0)] group-hover:[transform:translateY(160%)_rotateX(180deg)]">
          {children}
        </span>
      </span>
    </button>
  );
};

export default TextFillUpButton3;
