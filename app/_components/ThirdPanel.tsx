import Image from "next/image";
import MultilineText from "@/components/shared/MultilineText";
import { DialogsRes } from "@/app/api/dto/dialogs";
import ThirdPanelSkeleton from "./skeletons/ThirdPanelSkeleton";
import NoData from "@/components/ui/NoData";
import { ImageIcon } from "lucide-react";

interface ThirdPanelProps {
  data: DialogsRes | null | undefined;
  isLoading?: boolean;
}

export default function ThirdPanel({
  data,
  isLoading = false,
}: ThirdPanelProps) {
  if (isLoading) return <ThirdPanelSkeleton />;

  if (!data?.thirdPanel) {
    return (
      <div className="relative">
        <div className="relative aspect-[375/306] bg-gray-100">
          <NoData
            message="데이터를 불러올 수 없습니다."
            icon={<ImageIcon className="w-8 h-8" />}
            className="h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="w-[239px] h-[139px] absolute top-[-104px] left-[24px] z-20">
        {/* 세 번째 패널 말풍선 이미지 */}
        <Image
          src="/images/downward_tail_bubble.png"
          alt="아래쪽 꼬리 말풍선"
          fill
          className="object-contain"
        />

        {/* 세 번째 패널 말풍선 */}
        <p className="absolute top-[34px] left-0 right-0 bubble-text text-center z-30">
          <MultilineText text={data.thirdPanel.bubbleText || ""} />
        </p>
      </div>

      {/* 세 번째 패널 */}
      <div className="relative aspect-[375/306]">
        <Image
          src={data.thirdPanel.image}
          alt="세 번째 패널"
          fill
          className="object-cover"
        />

        {/* 세 번째 패널 오버레이 */}
        <div className="absolute bottom-0 left-0 w-full h-[118px] bg-gradient-to-t from-gradient-cream to-transparent" />
      </div>
    </div>
  );
}
