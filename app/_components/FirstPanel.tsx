import Image from "next/image";
import MultilineText from "@/components/shared/MultilineText";
import { DialogsRes } from "@/app/api/dto/dialogs";
import FirstPanelSkeleton from "./skeletons/FirstPanelSkeleton";
import NoData from "@/components/ui/NoData";
import { ImageIcon } from "lucide-react";

interface FirstPanelProps {
  data: DialogsRes | null | undefined;
  isLoading?: boolean;
}

export default function FirstPanel({
  data,
  isLoading = false,
}: FirstPanelProps) {
  if (isLoading) return <FirstPanelSkeleton />;

  if (!data?.firstPanel) {
    return (
      <div className="relative aspect-[375/652] bg-gray-100">
        <NoData
          message="데이터를 불러올 수 없습니다."
          icon={<ImageIcon className="w-8 h-8" />}
          className="h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* 첫 번째 패널 상단 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-[261px] bg-gradient-to-b from-gradient-black to-transparent z-10" />

      <div className="flex flex-col items-center justify-center gap-y-[12px] absolute top-[84px] left-1/2 -translate-x-1/2 z-20">
        {/* 첫 번째 패널 제목 */}
        <p className="chapter-text text-white">
          {data.firstPanel.chapter?.title}
        </p>

        {/* 첫 번째 패널 제목 데코 */}
        <Image
          src="/images/chapter_deco.png"
          alt="chapter_deco"
          width={157}
          height={20}
        />

        {/* 첫 번째 패널 부제목 */}
        <p className="chapter-text text-white">
          {data.firstPanel.chapter?.subtitle}
        </p>
      </div>

      <div className="relative aspect-[375/652]">
        {/* 첫 번째 패널 이미지 */}
        <Image
          src={data.firstPanel.image}
          alt="첫 번째 패널"
          fill
          className="object-cover"
        />

        {/* 첫 번째 패널 오버레이 */}
        <div className="absolute bottom-0 left-0 w-full h-[195px] bg-gradient-to-t from-gradient-cream to-transparent" />
      </div>

      <div className="absolute bottom-[-94px] left-[24px] w-[215px] h-[139px] z-20">
        {/* 첫 번째 패널 말풍선 이미지 */}
        <Image
          src="/images/upward_tail_bubble.png"
          alt="위쪽 꼬리 말풍선"
          fill
          className="object-contain"
        />

        {/* 첫 번째 패널 말풍선 */}
        <p className="absolute bottom-[22px] left-0 right-0 bubble-text text-center z-30">
          <MultilineText text={data.firstPanel.bubbleText || ""} />
        </p>
      </div>
    </div>
  );
}
