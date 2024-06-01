import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative flex items-center justify-center text-white overflow-hidden rounded-full bg-teal-400 uppercase after:absolute after:size-full after:translate-y-full after:rounded-[200%] after:bg-black after:opacity-0 after:duration-500 hover:text-teal-400 hover:after:translate-y-0 hover:after:rounded-none hover:after:opacity-100",
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

const FillUpButton1 = ({ children, size, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ size, className }))} {...props}>
      <span className="z-10">{children}</span>
    </button>
  );
};

export default FillUpButton1;
