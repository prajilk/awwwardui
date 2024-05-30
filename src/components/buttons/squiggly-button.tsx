import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type SquigglyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "relative flex items-center justify-center text-black rounded-xl border-2 border-black font-medium shadow-[1px_3px_0] transition-[transform_shadow] duration-[50ms] hover:translate-y-[2px] hover:shadow-[1px_1px_0]",
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

const SquigglyButton = ({
  children,
  size,
  className,
  ...props
}: SquigglyButtonProps) => {
  return (
    <div className="animate-squiggly">
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
    </div>
  );
};

export default SquigglyButton;
