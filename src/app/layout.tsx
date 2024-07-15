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
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
