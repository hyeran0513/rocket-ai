"use client";

import FirstPanel from "./_components/FirstPanel";
import SecondPanel from "./_components/SecondPanel";
import ThirdPanel from "./_components/ThirdPanel";
import SajuTable from "./_components/SajuTable";
import { useGetDialogs } from "@/hooks/use-get-dialogs";

export default function Home() {
  const { data, isLoading, isError } = useGetDialogs();

  if (!data) return null;
  if (isLoading) return <div>로딩 중</div>;
  if (isError) return <div>에러</div>;

  return (
    <div className="max-w-md mx-auto">
      {/* 첫 번째 패널 */}
      <FirstPanel data={data} />

      {/* 두 번째 패널 */}
      <SecondPanel />

      {/* 세 번째 패널 */}
      <ThirdPanel data={data} />

      {/* 사주 표 */}
      <SajuTable />
    </div>
  );
}
