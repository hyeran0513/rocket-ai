import Image from "next/image";

export default function SecondPanel() {
  return (
    <div className="pt-[113px] pr-[24px] pb-[40px]">
      {/* 두 번째 패널 */}
      <div className="relative aspect-[351/285]">
        <Image
          src="/images/comic_2panel.png"
          alt="두 번째 패널"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
