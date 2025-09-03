// 테이블 헤더
export const SAJU_HEADERS = ["", "時", "日", "月", "年"];

// 사주 데이터
export const SAJU = [
  {
    label: { hanja: "十星", meaning: "십성" },
    columns: [
      { items: [{ hanja: "傷官", meaning: "상관" }] },
      { items: [{ hanja: "比肩", meaning: "비견" }] },
      { items: [{ hanja: "傷官", meaning: "상관" }] },
      { items: [{ hanja: "傷官", meaning: "상관" }] },
    ],
  },
  {
    label: { hanja: "十星", meaning: "십성" },
    columns: [
      { meaning: "임", hanja: "壬", element: "陽水" },
      { meaning: "정", hanja: "丁", element: "陰火" },
      { meaning: "계", hanja: "癸", element: "陰水" },
      { meaning: "계", hanja: "癸", element: "陰水" },
    ],
  },
  {
    label: { hanja: "地支", meaning: "지지" },
    columns: [
      { meaning: "인", hanja: "寅", element: "陽木" },
      { meaning: "사", hanja: "巳", element: "陰火" },
      { meaning: "해", hanja: "亥", element: "陰水" },
      { meaning: "유", hanja: "酉", element: "陰金" },
    ],
  },
  {
    label: { hanja: "十星", meaning: "십성" },
    columns: [
      { items: [{ hanja: "比肩", meaning: "비견" }] },
      { items: [{ hanja: "劫財", meaning: "겁재" }] },
      { items: [{ hanja: "食神", meaning: "식신" }] },
      { items: [{ hanja: "偏財", meaning: "편재" }] },
    ],
  },
  {
    label: { hanja: "十二神殺", meaning: "십이운성" },
    columns: [
      { items: [{ hanja: "死", meaning: "사" }] },
      { items: [{ hanja: "帝旺", meaning: "제왕" }] },
      { items: [{ hanja: "胎", meaning: "태" }] },
      { items: [{ hanja: "長生", meaning: "장생" }] },
    ],
  },
  {
    label: { hanja: "十二神殺", meaning: "십이신살" },
    columns: [
      { items: [{ hanja: "劫殺", meaning: "겁살" }] },
      { items: [{ hanja: "地殺", meaning: "지살" }] },
      { items: [{ hanja: "驛馬殺", meaning: "역마살" }] },
      { items: [{ hanja: "將星殺", meaning: "장성살" }] },
    ],
  },
  {
    label: { hanja: "貴人", meaning: "귀인" },
    columns: [
      {},
      {},
      { items: [{ hanja: "天乙", meaning: "천을귀인" }] },
      {
        items: [
          { hanja: "天乙", meaning: "천을귀인" },
          { hanja: "太極", meaning: "태극귀인" },
          { hanja: "文昌", meaning: "문창귀인" },
        ],
      },
    ],
  },
];
