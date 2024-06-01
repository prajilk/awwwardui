import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "before:animate-glowing relative flex items-center justify-center rounded-lg uppercase text-white before:absolute before:-left-[2px] before:-top-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-md before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 before:ease-in-out before:[background-size:400%] after:absolute after:left-0 after:top-0 after:size-full after:rounded-md after:bg-[#111] hover:before:opacity-100 active:after:bg-transparent",
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

const GradientGlowButton = ({ children, size, className, ...props }) => {
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
      <span className="z-10">{children}</span>
    </button>
  );
};

export default GradientGlowButton;
