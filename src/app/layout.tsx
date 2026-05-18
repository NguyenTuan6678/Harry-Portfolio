import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Portfolio",
  description: "Harry Nguyen's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
