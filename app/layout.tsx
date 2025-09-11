import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { Josefin_Sans, Stylish } from "next/font/google";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Mahesh's portfolio",

  description:
    "Welcome to my portfolio! Explore my projects, skills, and experience in web development. I'm currently on the journey to becoming a software engineer. Discover my progress and the work I'm passionate about.",
};

const stylish = Stylish({
  subsets: ["latin"],
  variable: "--font-stylish",
  weight: "400",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: "400",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en" className={stylish.variable + " " + josefin_sans.variable}>
      <body
        className={`${
          theme ? theme.value : " dark "
        } dark:text-white dark:bg-dark bg-light duration-150 font-josefin-sans px-2 relative h-[2000px]`}
      >
        {children}
      </body>
    </html>
  );
}
