import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Mahesh's portfolio",

  description:
    "Welcome to my portfolio! Explore my projects, skills, and experience in web development. I'm currently on the journey to becoming a software engineer. Discover my progress and the work I'm passionate about.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
