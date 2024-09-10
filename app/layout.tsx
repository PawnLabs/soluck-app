import type { Metadata } from "next";

import "./globals.css";
import { ContentLayout } from "./content.layout";
import { Lexend } from "next/font/google"; // Add this import

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "SoLuck",
  description: "SoLuck's Solana Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${lexend.className} antialiased`}>
        <ContentLayout> {children}</ContentLayout>
      </body>
    </html>
  );
}
