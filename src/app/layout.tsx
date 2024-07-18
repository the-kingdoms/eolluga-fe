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
      <body>
        <div className="text-[#161616] w-screen h-full max-w-[360px] m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
