import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ scrollbarGutter: "stable" }}>
      <body className="grid min-h-dvh grid-rows-[auto_1fr] pb-12 font-mono">
        <Header />
        {children}
      </body>
    </html>
  );
}
