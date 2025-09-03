export interface SajuLabel {
  hanja: string; // 한자
  meaning: string; // 한자 뜻
}

export interface SajuColumnTriple {
  meaning: string; // 한자 뜻
  hanja: string; // 한자
  element: string; // 오행
}

export interface SajuColumnItems {
  items: {
    hanja: string; // 한자
    meaning: string; // 한자 뜻
  }[];
}

export interface SajuColumnEmpty {}

export type SajuColumn = SajuColumnTriple | SajuColumnItems | SajuColumnEmpty;

export interface SajuRow {
  label: SajuLabel; // 라벨
  columns: SajuColumn[]; // 칼럼
}

// 사주 데이터 조회 응답
export type SajuRes = SajuRow[];
