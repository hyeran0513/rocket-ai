import { ProfileRes } from "@/app/api/dto/profile";

export const PROFILE = {
  name: "김로켓",
  birthDate: "1980년 8월27일 08:10",
} as const satisfies ProfileRes;
