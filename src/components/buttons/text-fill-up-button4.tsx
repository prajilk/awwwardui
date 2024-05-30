import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type TextFillUpButton4Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "group relative flex items-center justify-center overflow-hidden rounded border transition-all duration-300 before:absolute before:inset-0 before:h-[400%] before:w-[300%] before:-rotate-45 before:duration-300 before:ease-in-out hover:shadow-[0_0_16px]",
  {
    variants: {
      size: {
        default:
          "px-4 py-2 text-sm before:-translate-x-2 hover:before:-translate-x-40",
        sm: "px-3.5 py-2 text-xs before:-translate-x-2 hover:before:-translate-x-32",
        lg: "px-5 py-3 text-lg hover:before:-translate-x-48",
      },
      colors: {
        default:
          "border-[#8a5cf5] text-white before:bg-[#8a5cf5] hover:text-white hover:shadow-[#8a5cf5]/75",
        red: "border-red-500 text-black before:bg-red-500 hover:text-white hover:shadow-red-500/75",
      },
    },
    defaultVariants: {
      size: "default",
      colors: "default",
    },
  },
);

const TextFillUpButton4 = ({
  children,
  size,
  colors,
  className,
  ...props
}: TextFillUpButton4Props) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          size,
          colors,
          className,
        }),
      )}
    >
      <span className="relative z-10 translate-y-0 transition-transform duration-300 group-hover:-translate-y-[150%]">
        {children}
      </span>
      <span className="absolute z-10 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </button>
  );
};

export default TextFillUpButton4;
