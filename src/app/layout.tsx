import type { Metadata } from "next";
// import { Lexend as FontSans } from "next/font/google"
import { JetBrains_Mono as FontSans } from "next/font/google"

import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "savi -laying the road for the future of DATA DAOs",
  description: "a DKG Protocol only on Stellar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
