import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tavs Projekts",
  description: "Apraksts šeit...",
  icons: {
    icon: "/favicon.png", // atsauce uz tavu attēlu mapē /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv" className={roboto.variable}>
      <head />
      <body className="antialiased font-sans font-roboto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}