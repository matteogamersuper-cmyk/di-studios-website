import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DI Studios",
  description: "DI Studios - Studios di Bot Discord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}