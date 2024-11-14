import { Header } from "@/components/custom/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ scrollbarGutter: "stable" }}>
      <body className="grid min-h-svh grid-rows-[auto_1fr] pb-9 font-mono">
        <Header />
        {children}
      </body>
    </html>
  );
}
