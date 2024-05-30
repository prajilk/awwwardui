import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type MarqueeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

const buttonVariants = cva(
  "group relative flex items-center justify-center overflow-hidden rounded-full border border-black bg-black font-bold capitalize text-white transition-colors duration-200 ease-out hover:bg-[#feed01] hover:text-black",
  {
    variants: {
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-lg",
        icon: "size-10 [&>span]:![animation-duration:0.7s]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const MarqueeButton = ({
  children,
  size,
  className,
  ...props
}: MarqueeButtonProps) => {
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
      <span className="group-hover:animate-text-marquee flex transition-transform duration-1000">
        {children}
        <span className="absolute translate-x-[125%]">{children}</span>
      </span>
    </button>
  );
};

export default MarqueeButton;
