import { DIALOGS } from "@/constants/dialogs";
import { DialogsRes } from "./dto/dialogs";

// 다이얼로그 조회 목업 데이터
export const getDialogs = async (): Promise<DialogsRes> => {
  try {
    return DIALOGS;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
