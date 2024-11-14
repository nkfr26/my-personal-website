import { Header } from "@/components/custom/header";
import "./globals.css";
import localFont from "next/font/local";

const lf = localFont({
  src: "./fonts/UDEVGothic35-Regular.ttf",
  variable: "--font-lf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={lf.variable}
      style={{ scrollbarGutter: "stable" }}
    >
      <body className="grid min-h-svh grid-rows-[auto_1fr] pb-9 font-mono">
        <Header />
        {children}
      </body>
    </html>
  );
}
