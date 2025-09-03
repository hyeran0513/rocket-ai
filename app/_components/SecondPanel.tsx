import Image from "next/image";
import { DialogsRes } from "@/app/api/dto/dialogs";
import SecondPanelSkeleton from "./skeletons/SecondPanelSkeleton";

interface SecondPanelProps {
  data: DialogsRes;
  isLoading?: boolean;
}

export default function SecondPanel({
  data,
  isLoading = false,
}: SecondPanelProps) {
  if (isLoading) {
    return <SecondPanelSkeleton />;
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
