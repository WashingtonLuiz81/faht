import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "FAht - Futebol de Aspirantes",
  description: "Site de entretenimento para gerenciamento de futebol online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${oswald} antialiased h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
