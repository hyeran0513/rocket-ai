import SajuBox from "@/components/SajuBox";
import SajuTextPair from "./SajuTextPair";
import { getColorSchemeByElement, getVariantByElement } from "@/utils/saju";
import type {
  SajuColumn as SajuColumnType,
  SajuColumnTriple,
  SajuColumnItems,
} from "@/app/api/dto/saju";

interface SajuColumnProps {
  column: SajuColumnType;
}

// Triple 타입 체크
const isSajuColumnTriple = (
  column: SajuColumnType,
): column is SajuColumnTriple => {
  return "meaning" in column && "hanja" in column && "element" in column;
};

// Items 타입 체크
const isSajuColumnItems = (
  column: SajuColumnType,
): column is SajuColumnItems => {
  return "items" in column && Array.isArray(column.items);
};

// Empty 타입 체크
const isEmptyColumn = (column: SajuColumnType): boolean => {
  return Object.keys(column).length === 0;
};

export default function SajuColumn({ column }: SajuColumnProps) {
  // Empty 타입
  if (isEmptyColumn(column)) {
    return <SajuTextPair meaning="없음" />;
  }

  // Triple 타입
  if (isSajuColumnTriple(column)) {
    return (
      <SajuBox
        meaning={column.meaning}
        hanja={column.hanja}
        element={column.element}
        colorScheme={getColorSchemeByElement(column.element)}
        variant={getVariantByElement(column.element)}
      />
    );
  }

  // Items 타입
  if (isSajuColumnItems(column)) {
    return (
      <div className="flex flex-col gap-y-1">
        {column.items.map((item, itemIndex) => (
          <SajuTextPair
            key={itemIndex}
            hanja={item.hanja}
            meaning={item.meaning}
          />
        ))}
      </div>
    );
  }

  return null;
}
