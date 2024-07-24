import type { Metadata } from "next";

import QueryClientProvider from "./QueryClientProvider";
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
      <body className="mx-auto h-dvh w-screen text-[#161616]">
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
