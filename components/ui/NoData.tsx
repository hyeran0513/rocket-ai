import { ReactNode } from "react";

interface NoDataProps {
  message?: string; // 메시지
  icon?: ReactNode; // 아이콘
  className?: string; // 추가 클래스
}

export default function NoData({
  message = "데이터가 없습니다",
  icon,
  className = "",
}: NoDataProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
    >
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <p className="text-gray-500 text-sm font-medium">{message}</p>
    </div>
  );
}
