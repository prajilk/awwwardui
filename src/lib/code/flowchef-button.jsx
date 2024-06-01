import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative z-10 flex translate-x-0 translate-y-0 items-center justify-center rounded-md bg-white/30 capitalize text-black shadow-[1px_1px_1rem_rgb(26_26_26/15%)] backdrop-blur-md duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px]",
  {
    variants: {
      size: {
        default: "p-4",
        sm: "p-3 text-sm",
        lg: "p-5 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const FlowchefButton = ({ children, size, className, ...props }) => {
  return (
    <button
      className="relative duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px]"
      {...props}
    >
      <div
        className={cn(
          buttonVariants({
            size,
            className,
          }),
        )}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-md bg-[linear-gradient(20deg,rgba(241,85,76,1)_0%,rgba(247,225,150,1)_100%)] bg-cover bg-[0_0]"></div>
    </button>
  );
};

export default FlowchefButton;
