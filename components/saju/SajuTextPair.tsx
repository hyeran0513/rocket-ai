import { cn } from "@/lib/utils";

export interface SajuTextPairProps {
  hanja?: string; // 한자
  meaning?: string; // 한자 뜻
  hanjaClassName?: string; // 메인 텍스트 클래스
  meaningClassName?: string; // 서브 텍스트 클래스
}

export default function SajuTextPair({
  hanja,
  meaning,
  hanjaClassName = "",
  meaningClassName = "",
}: SajuTextPairProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 한자 */}
      {hanja && (
        <p className={cn("text-[14.67px] font-semibold", hanjaClassName)}>
          {hanja}
        </p>
      )}

      {/* 한자 뜻 */}
      {meaning && (
        <p className={cn("text-[9.78px]", meaningClassName)}>({meaning})</p>
      )}
    </div>
  );
}
