import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: 'swap' });

export const metadata: Metadata = {
  title: "Ulindu Dakshitha Bandara | Software Engineer",
  description: "Portfolio of Ulindu Dakshitha Bandara, a Software Engineer passionate about AI/ML, DevOps, and Full-Stack Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <div className="blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
