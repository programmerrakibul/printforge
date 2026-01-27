import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { type ReactNode, type JSX } from "react";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrintForge",
  description: "Discover what’s possible with 3D printing",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
