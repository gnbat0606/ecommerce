import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopHeader } from "@/components/TopHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
