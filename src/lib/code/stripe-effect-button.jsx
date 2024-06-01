import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative flex items-center justify-center overflow-hidden bg-orange-500 text-white before:absolute before:left-0 before:right-0 before:top-0 before:h-1/2 before:origin-right before:bg-[#1c2d4f] before:transition-transform before:duration-300 before:[transform:scaleX(0)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:origin-right after:bg-[#1c2d4f] after:transition-transform after:delay-150 after:duration-300 after:[transform:scaleX(0)] hover:before:origin-left hover:before:[transform:scaleX(1)] hover:after:origin-left hover:after:[transform:scaleX(1)]",
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

const StripeEffectButton = ({ children, size, className, ...props }) => {
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

export default StripeEffectButton;
