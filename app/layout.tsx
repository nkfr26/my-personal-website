import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ scrollbarGutter: "stable" }}>
      <body className="grid min-h-svh grid-rows-1 font-mono">{children}</body>
    </html>
  );
}
