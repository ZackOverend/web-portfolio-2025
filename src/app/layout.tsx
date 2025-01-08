import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Chewy, Fira_Mono} from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const chewyMedium = Chewy({
  variable: "--font-chewy", // CSS variable for the font
  subsets: ["latin"],
  weight: "400" // Subset for the font
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "ZO Portfolio",
  description: "Created by Zackary Overend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chewyMedium.variable} ${firaMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
