import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gapyeongHanseokbong = localFont({
  src: [
    {
      path: "../public/fonts/GapyeongHanseokbongL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GapyeongHanseokbongR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GapyeongHanseokbongB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gapyeong-hanseokbong",
});

export const metadata: Metadata = {
  title: "로켓AI 코딩 테스트",
  description: "김혜란의 로켓AI 코딩 테스트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${gapyeongHanseokbong.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
