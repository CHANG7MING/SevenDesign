import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "CA7 Design Showcase",
  description: "A Next.js showcase built from the CA7-DESIGN library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
