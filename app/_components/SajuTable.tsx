import Image from "next/image";
import SajuCoreTable from "@/components/SajuCoreTable";
import { useGetSaju } from "@/hooks/use-get-saju";
import { useGetProfile } from "@/hooks/use-get-profile";

export default function SajuTable() {
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

  if (!sajuData || !profileData) return null;
  if (sajuLoading || profileLoading) return <div>로딩 중</div>;
  if (sajuError || profileError) return <div>에러</div>;

  return (
    <div className="px-[8px]">
      <div className="relative mt-[-23px] bg-table-bg border-table-border border-[3px] shadow-saju">
        {/* 사주 표 데코 선 */}
        <div className="absolute bg-table-accent w-full h-[1px] top-[8px] left-0" />
        <div className="absolute bg-table-accent w-full h-[1px] bottom-[8px] left-0" />
        <div className="absolute bg-table-accent h-full w-[1px] top-0 left-[8px]" />
        <div className="absolute bg-table-accent h-full w-[1px] top-0 right-[8px]" />

        {/* 사주 표 데코 */}
        <div className="absolute inset-x-[8px] top-[26px]">
          <div className="relative w-full aspect-[334/57]">
            <Image
              src="/images/table_deco.png"
              alt="사주 표 데코"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="size-full flex flex-col items-center pt-[40px] pb-[33.17px] gap-y-[26px] px-[20px] relative z-10">
          {/* 사주 표 제목 */}
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <p className="table-text">{profileData.name}님의 사주</p>
            <p className="table-sub-text">{profileData.birthDate}</p>
          </div>

          {/* 사주 표 */}
          <SajuCoreTable data={sajuData} />
        </div>
      </div>
    </div>
  );
}
