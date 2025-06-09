// lokasi: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Jockey_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Konfigurasi font Inter - kita akan gunakan .className-nya langsung
const inter = Inter({ subsets: ["latin"] });

// Konfigurasi font Jockey One - kita tetap gunakan .variable-nya
const jockeyOne = Jockey_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jockey-one", // Ini sudah benar
});

export const metadata: Metadata = {
  title: "Fashion Wood",
  description: "Nature's Touch in Every Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* PERUBAHAN UTAMA ADA DI SINI */}
      <body className={`${inter.className} ${jockeyOne.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
