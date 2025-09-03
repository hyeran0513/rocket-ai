import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

const baseClasses = "flex flex-col items-center justify-center text-center";

const cellVariants = cva(baseClasses, {
  variants: {
    rightBorder: {
      strong: "border-r-[2px] border-r-border-strong",
      light: "border-r-[1px] border-r-border-light",
      none: "",
    },
    bottomBorder: {
      strong: "border-b-[2px] border-b-border-strong",
      light: "border-b-[1px] border-b-border-light-alt",
      none: "",
    },
    padding: {
      lg: "py-[8px]",
      md: "py-[5px]",
      none: "",
    },
    background: {
      white: "bg-white",
      transparent: "",
    },
  },
  defaultVariants: {
    rightBorder: "light",
    bottomBorder: "strong",
    padding: "none",
    background: "transparent",
  },
});

export type SajuCoreCellProps = {
  children?: ReactNode; // 자식 요소
  className?: string; // 추가 클래스
} & VariantProps<typeof cellVariants>;

export default function SajuCoreCell({
  children,
  className,
  rightBorder,
  bottomBorder,
  padding,
  background,
}: SajuCoreCellProps) {
  const computedClasses = cellVariants({
    rightBorder,
    bottomBorder,
    padding,
    background,
  });

  return <div className={cn(computedClasses, className)}>{children}</div>;
}
