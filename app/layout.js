import { Geist, Geist_Mono, Gowun_Batang } from "next/font/google";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "THX! AHAMD - YANCEY CLUB",
  description: "멀티미디어 앨범 - 음악, 글, 그림",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${gowunBatang.className} antialiased`}>{children}</body>
    </html>
  );
}
