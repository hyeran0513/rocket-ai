// 다이얼로그 아이템
export interface DialogItem {
  chapter?: {
    title: string; // 제목
    subtitle: string; // 부제목
  };
  bubbleText?: string; // 말풍선 텍스트
  image: string; // 이미지
}

// 다이얼로그 조회 응답
export interface DialogsRes {
  firstPanel: DialogItem;
  secondPanel: DialogItem;
  thirdPanel: DialogItem;
}
