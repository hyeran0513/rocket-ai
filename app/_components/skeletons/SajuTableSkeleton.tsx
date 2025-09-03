import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SajuTableSkeleton() {
  return (
    <div className="px-[8px]">
      <div className="inset-x-[8px] mt-[-23px]">
        <Skeleton className="aspect-[334/500]" />
      </div>
    </div>
  );
}
