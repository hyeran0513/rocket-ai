// 오행에 따라 SajuBox의 colorScheme를 결정
export const getColorSchemeByElement = (element: string) => {
  const normalizedText = element.normalize();

  switch (normalizedText) {
    case "陽水":
      return "black";
    case "陰火":
      return "red";
    case "陽木":
      return "blue";
    case "陰金":
      return "black";
    default:
      return "black";
  }
};

// 오행에 따라 SajuBox의 variant를 결정
export const getVariantByElement = (element: string) => {
  const normalizedText = element.normalize();

  switch (normalizedText) {
    case "陰金":
      return "outline";
    default:
      return "solid";
  }
};
