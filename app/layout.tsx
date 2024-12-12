import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

const udev_gothic_35 = localFont({
  src: [
    {
      path: "./fonts/UDEVGothic35-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/UDEVGothic35-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/UDEVGothic35-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/UDEVGothic35-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-udev-gothic-35",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkfr26.com"),
  title: {
    default: "nkfr26",
    template: "%s - nkfr26",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={udev_gothic_35.variable}
      style={{ scrollbarGutter: "stable", textDecorationSkipInk: "none" }}
    >
      <body className="grid min-h-dvh grid-rows-[auto_1fr] pb-12 font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Header />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
