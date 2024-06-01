import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative flex items-center justify-center overflow-hidden rounded-full border font-semibold leading-[130%] tracking-tight transition-all duration-200 ease-in-out after:absolute after:inset-0 after:-z-10 after:origin-top-left after:-translate-x-full after:rotate-12 after:rounded-full after:transition-all after:duration-200 after:ease-in-out hover:scale-110 hover:after:translate-x-0",
  {
    variants: {
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-lg",
        icon: "size-10 rounded-full",
      },
      colors: {
        default:
          "border-black bg-black text-[#e6ff00] after:bg-[#e6ff00] hover:border-[#e6ff00] hover:bg-[#e6ff00] hover:text-black",
      },
    },
    defaultVariants: {
      size: "default",
      colors: "default",
    },
  },
);

const FillUpButton3 = ({ children, size, className, ...props }) => {
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
      {children}
    </button>
  );
};

export default FillUpButton3;
