import type { Metadata } from "next";
import "./globals.css";
import QueryClientProvider from "./QueryClientProvider";

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
      <body className="text-[#161616] h-dvh w-screen max-w-[360px] m-auto">
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
