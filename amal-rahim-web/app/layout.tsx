import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amal Ramin - Pediatric Nurse",
  description: "Portfolio of Amal Ramin, a dedicated Pediatric Nurse at DHQ Hospital Muzaffargarh.",
  verification: {
    google: "vXBhQHenWw6mExBBSCvpgqEDDCME1tG2OQYYMVR4tCM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
