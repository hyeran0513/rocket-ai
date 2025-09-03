import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const baseClasses =
  "rounded-[12.55px] flex flex-col items-center justify-center aspect-square py-[4px] size-[55.45px]";

const boxVariants = cva(baseClasses, {
  variants: {
    variant: {
      solid: "",
      outline: "bg-white",
    },
    colorScheme: {
      red: "bg-saju-red text-white",
      blue: "bg-saju-blue text-white",
      black: "bg-saju-black text-white",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      colorScheme: "red",
      class: "border border-saju-red text-saju-red bg-white",
    },
    {
      variant: "outline",
      colorScheme: "blue",
      class: "border border-saju-blue text-saju-blue bg-white",
    },
    {
      variant: "outline",
      colorScheme: "black",
      class: "border border-saju-black text-saju-black bg-white",
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "black",
  },
});

export type SajuBoxProps = {
  meaning: string; // 한자 뜻
  hanja: string; // 한자
  element: string; // 오행
  className?: string; // 추가 클래스
} & VariantProps<typeof boxVariants>;

export default function SajuBox({
  meaning,
  hanja,
  element,
  className,
  variant,
  colorScheme,
}: SajuBoxProps) {
  const computedClasses = boxVariants({ variant, colorScheme });

  return (
    <div className={cn(computedClasses, className)}>
      <p className="text-[7.6px]">{meaning}</p>
      <p className="text-[25.11px] mt-[-6px]">{hanja}</p>
      <p className="text-[8.37px] mt-[-6px]">{element}</p>
    </div>
  );
}
