import Image from "next/image";
import SajuCoreTable from "@/components/saju/SajuCoreTable";
import SajuTableSkeleton from "./skeletons/SajuTableSkeleton";
import NoData from "@/components/ui/NoData";
import { TableIcon } from "lucide-react";
import { SajuRes } from "@/app/api/dto/saju";
import { ProfileRes } from "@/app/api/dto/profile";

interface SajuTableProps {
  sajuData: SajuRes | undefined;
  profileData: ProfileRes | undefined;
  isLoading: boolean;
}

export default function SajuTable({
  sajuData,
  profileData,
  isLoading,
}: SajuTableProps) {
  if (isLoading) return <SajuTableSkeleton />;

  if (!sajuData || !profileData) {
    return (
      <div className="px-[8px] relative">
        <div className="flex items-center justify-center mt-[-23px] aspect-[334/500] bg-gray-100">
          <NoData
            message="사주 표 데이터를 불러올 수 없습니다."
            icon={<TableIcon className="w-8 h-8" />}
          />
        </div>
      </div>
    );
  }

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
