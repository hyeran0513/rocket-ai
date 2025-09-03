import { SAJU } from "@/constants/saju";
import { SajuRes } from "./dto/saju";

// 사주 데이터 조회 목업 데이터
export const getSaju = async (): Promise<SajuRes> => {
  try {
    return SAJU;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
