import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const buttonVariants = cva(
  "hover:after:animate-glow text-black after:pointer-event-none group relative flex items-center justify-center rounded-md bg-[#00E2ED] font-bold uppercase after:absolute after:size-full after:rounded-md after:opacity-50 after:shadow-[0_0_32px_0_rgba(0,226,237,.8)]",
  {
    variants: {
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-3 text-xs",
        lg: "px-6 py-4 text-lg",
        icon: "size-10 rounded-full after:rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const GlowingTextSlideUpButton = ({ children, size, className, ...props }) => {
  return (
    <button
      className={cn(
        buttonVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="block duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute bottom-0 block translate-y-full duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </button>
  );
};

export default GlowingTextSlideUpButton;
