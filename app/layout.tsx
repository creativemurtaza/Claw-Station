import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { HomeShell } from "@/components/layout/HomeShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-figma",
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Claw Station",
  description: "Tactical AI Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable} antialiased`}
      >
        <HomeShell>{children}</HomeShell>
      </body>
    </html>
  );
}
