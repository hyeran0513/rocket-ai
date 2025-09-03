import SajuCoreCell from "@/components/SajuCoreCell";
import SajuRow from "./SajuRow";
import type { SajuRes } from "@/app/api/dto/saju";
import { SAJU_HEADERS } from "@/constants/saju";

interface SajuCoreTableProps {
  data: SajuRes; // 사주 데이터
}

export default function SajuCoreTable({ data }: SajuCoreTableProps) {
  return (
    <div className="grid grid-cols-[16%_repeat(4,_minmax(0,_1fr))] w-full">
      {/* 헤더 행 */}
      {SAJU_HEADERS.map((header, index) => (
        <SajuCoreCell
          key={index}
          padding="lg"
          className="text-[20.92px] font-semibold"
          rightBorder={
            index === SAJU_HEADERS.length - 1 || index === 0
              ? "strong"
              : undefined
          }
        >
          {header}
        </SajuCoreCell>
      ))}

      {/* 바디 행들 */}
      {data.map((row, rowIndex) => (
        <SajuRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          isLastRow={rowIndex === data.length - 1}
        />
      ))}
    </div>
  );
}
