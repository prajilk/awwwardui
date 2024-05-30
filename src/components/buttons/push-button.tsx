import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type PushButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    classNames?: {
      depth: string;
    };
  };

const buttonVariants = cva(
  "flex justify-center items-center border-2 border-indigo-500 rounded-full bg-white group-hover:translate-y-0 duration-300 text-indigo-500",
  {
    variants: {
      size: {
        default: "px-5 py-3 -translate-y-2",
        sm: "px-4 py-3 text-sm -translate-y-2",
        lg: "px-6 py-4 text-lg -translate-y-2",
        icon: "size-10 rounded-full -translate-y-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const PushButton = ({
  children,
  size,
  className,
  classNames,
  ...props
}: PushButtonProps) => {
  return (
    <button
      className={cn("group rounded-full bg-indigo-500", classNames?.depth)}
      {...props}
    >
      <span className={cn(buttonVariants({ size, className }))}>
        {children}
      </span>
    </button>
  );
};

export default PushButton;
