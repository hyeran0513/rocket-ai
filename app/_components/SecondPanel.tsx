import Image from "next/image";
import { DialogsRes } from "@/app/api/dto/dialogs";
import SecondPanelSkeleton from "./skeletons/SecondPanelSkeleton";
import NoData from "@/components/ui/NoData";
import { ImageIcon } from "lucide-react";

interface SecondPanelProps {
  data: DialogsRes | null | undefined;
  isLoading?: boolean;
}

export default function SecondPanel({
  data,
  isLoading = false,
}: SecondPanelProps) {
  if (isLoading) return <SecondPanelSkeleton />;

  if (!data?.secondPanel) {
    return (
      <div className="aspect-[351/285] bg-gray-100">
        <NoData
          message="데이터를 불러올 수 없습니다."
          icon={<ImageIcon className="w-8 h-8" />}
          className="h-full"
        />
      </div>
    );
  }

  return (
    <div className="pt-[113px] pr-[24px] pb-[40px]">
      {/* 두 번째 패널 */}
      <div className="relative aspect-[351/285]">
        <Image
          src={data.secondPanel.image}
          alt="두 번째 패널"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
