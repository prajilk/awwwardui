import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type RedneckButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "group relative border border-white text-white uppercase after:absolute after:-right-2.5 after:top-1/2 after:h-[1px] after:w-12 after:-translate-y-1/2 after:bg-red-500 after:duration-500 hover:after:right-0",
  {
    variants: {
      size: {
        default: "p-4 text-sm pe-16",
        sm: "p-3 text-xs pe-16",
        lg: "p-5 pe-16",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const RedneckButton = ({
  children,
  size,
  className,
  ...props
}: RedneckButtonProps) => {
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
      <span className="group-hover:animate-text-rollup animate-text-rolldown block">
        {children}
      </span>
    </button>
  );
};

export default RedneckButton;
