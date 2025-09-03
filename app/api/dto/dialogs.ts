// 다이얼로그 조회 응답
export interface DialogsRes {
  firstPanel: {
    chapter: {
      title: string; // 제목
      subtitle: string; // 부제목
    };
    bubbleText: string; // 말풍선 텍스트
  };
  thirdPanel: {
    bubbleText: string; // 말풍선 텍스트
  };
}
