import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type StackedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "relative flex items-center justify-center border-2 border-black bg-[#FFE00B] uppercase text-black transition-shadow duration-500 before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:origin-right  before:bg-black before:transition-transform before:duration-300 before:ease-in before:[transform:scaleX(0)] hover:text-white hover:before:origin-left hover:before:[transform:scaleX(1)]",
  {
    variants: {
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-lg",
        icon: "size-10",
      },
      shadow: {
        default:
          "shadow-[4px_4px_white,9px_9px_black] hover:shadow-[0px_0px_white,0px_0px_black]",
      },
    },
    defaultVariants: {
      size: "default",
      shadow: "default",
    },
  },
);

const StackedButton = ({
  children,
  size,
  className,
  ...props
}: StackedButtonProps) => {
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
      <span className="z-10 transition-colors duration-500">{children}</span>
    </button>
  );
};

export default StackedButton;
