import { DialogsRes } from "@/app/api/dto/dialogs";

export const DIALOGS = {
  firstPanel: {
    chapter: {
      title: "제 1장",
      subtitle: "나의 사주 팔자",
    },
    bubbleText: "이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.",
  },
  thirdPanel: {
    bubbleText: "제가 oo님의 사주를\n보기 쉽게 표로 정리했어요",
  },
} as const satisfies DialogsRes;
