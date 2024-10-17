import type { Metadata } from "next";
import localFont from "next/font/local";

import QueryClientProvider from "./QueryClientProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eolluga",
};
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} mx-auto h-dvh w-screen text-[#161616]`}
      >
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
