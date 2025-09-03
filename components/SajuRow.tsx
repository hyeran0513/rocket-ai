import SajuCoreCell from "@/components/SajuCoreCell";
import SajuTextPair from "./SajuTextPair";
import SajuColumn from "./SajuColumn";
import type {
  SajuRow as SajuRowType,
  SajuColumn as SajuColumnType,
  SajuColumnItems,
} from "@/app/api/dto/saju";

interface SajuRowProps {
  row: SajuRowType; // 사주 행
  rowIndex: number; // 행 인덱스
  isLastRow: boolean; // 마지막 행인지
}

// Items 타입 체크
const isSajuColumnItems = (
  column: SajuColumnType,
): column is SajuColumnItems => {
  return "items" in column && Array.isArray(column.items);
};

export default function SajuRow({ row, rowIndex, isLastRow }: SajuRowProps) {
  const isRowOne = rowIndex === 1;

  return (
    <div className="contents">
      {/* 라벨 셀 */}
      <SajuCoreCell
        padding="md"
        rightBorder="strong"
        bottomBorder={isLastRow ? "strong" : isRowOne ? "light" : "strong"}
      >
        <SajuTextPair
          hanja={row.label.hanja}
          meaning={row.label.meaning}
          hanjaClassName={rowIndex >= 4 ? "text-[9.78px]" : "text-[12px]"}
          meaningClassName={
            rowIndex >= 4
              ? "text-[7.82px]"
              : rowIndex === 6
                ? "text-[9.78px]"
                : "text-[7.82px]"
          }
        />
      </SajuCoreCell>

      {/* 컬럼 셀들 */}
      {row.columns.map((column: SajuColumnType, colIndex: number) => (
        <SajuCoreCell
          key={colIndex}
          padding="md"
          background="white"
          bottomBorder={isRowOne ? "light" : undefined}
          className={`${isSajuColumnItems(column) ? "gap-y-[4px]" : ""}`}
          rightBorder={
            colIndex === row.columns.length - 1 ? "strong" : undefined
          }
        >
          <SajuColumn column={column} />
        </SajuCoreCell>
      ))}
    </div>
  );
}
