import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eolluga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="text-[#161616]">{children}</body>
    </html>
  );
}
