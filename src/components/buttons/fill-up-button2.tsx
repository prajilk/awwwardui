import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type FillUpButton2Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "relative flex items-center justify-center overflow-hidden rounded-full border border-black bg-black font-bold uppercase text-white after:absolute after:size-full after:translate-y-full after:bg-white after:duration-500 hover:text-black hover:after:translate-y-0",
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

const FillUpButton2 = ({
  children,
  size,
  className,
  ...props
}: FillUpButton2Props) => {
  return (
    <button className={cn(buttonVariants({ size, className }))} {...props}>
      <span className="z-10">{children}</span>
    </button>
  );
};

export default FillUpButton2;
