// 사용자 이름을 동적으로 변경
export const formatDialog = (dialog: string, userName: string = "OO") => {
  return dialog.replace(/OO|oo/g, userName);
};

// 줄바꿈이 포함된 텍스트를 줄별로 분리
export const splitMultilineText = (text: string, userName: string = "OO") => {
  const formattedText = formatDialog(text, userName);
  return formattedText.split("\n");
};
