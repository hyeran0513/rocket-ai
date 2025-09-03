"use client";

import FirstPanel from "./_components/FirstPanel";
import SecondPanel from "./_components/SecondPanel";
import ThirdPanel from "./_components/ThirdPanel";
import SajuTable from "./_components/SajuTable";
import { useGetDialogs } from "@/hooks/use-get-dialogs";
import { useGetSaju } from "@/hooks/use-get-saju";
import { useGetProfile } from "@/hooks/use-get-profile";
import NoData from "@/components/ui/NoData";
import { MonitorOff } from "lucide-react";

export default function Home() {
  const {
    data: dialogsData,
    isLoading: dialogsLoading,
    isError: dialogsError,
  } = useGetDialogs();
  const {
    data: sajuData,
    isLoading: sajuLoading,
    isError: sajuError,
  } = useGetSaju();
  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfile();

  const isLoading = dialogsLoading || sajuLoading || profileLoading;
  const isError = dialogsError || sajuError || profileError;

  if (isError) {
    return (
      <div className="max-w-md mx-auto min-h-screen flex items-center justify-center">
        <NoData
          message="데이터를 불러올 수 없습니다."
          icon={<MonitorOff className="size-12" />}
        />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {/* 첫 번째 패널 */}
      <FirstPanel data={dialogsData} isLoading={isLoading} />

      {/* 두 번째 패널 */}
      <SecondPanel data={dialogsData} isLoading={isLoading} />

      {/* 세 번째 패널 */}
      <ThirdPanel data={dialogsData} isLoading={isLoading} />

      {/* 사주 표 */}
      <SajuTable
        sajuData={sajuData}
        profileData={profileData}
        isLoading={isLoading}
      />
    </div>
  );
}
