import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mahesh's portfolio",
  description:
    "Welcome to my portfolio! Explore my projects, skills, and experience in web development. I'm currently on the journey to becoming a software engineer. Discover my progress and the work I'm passionate about.",
  verification: {
    google: "N_RRRw2MotI1UYegfbmG6DZUaJX8gHchMS-tr9v0sZ0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
