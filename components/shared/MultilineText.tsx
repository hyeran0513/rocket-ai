import { splitMultilineText } from "@/lib/text";

interface MultilineTextProps {
  text: string; // 텍스트
  userName?: string; // 사용자 이름
  className?: string; // 클래스 이름
}

export default function MultilineText({
  text,
  userName = "OO",
  className = "",
}: MultilineTextProps) {
  const lines = splitMultilineText(text, userName);

  return (
    <>
      {lines.map((line, index) => (
        <span key={index} className={className}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
