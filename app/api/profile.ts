import { PROFILE } from "@/constants/profile";
import { ProfileRes } from "./dto/profile";

// 프로필 조회 목업 데이터
export const getProfile = async (): Promise<ProfileRes> => {
  try {
    return PROFILE;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
