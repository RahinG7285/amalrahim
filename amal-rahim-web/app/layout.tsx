import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://amalrahim.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amal Ramin - Pediatric Nurse | Portfolio",
  description: "Portfolio of Amal Ramin, a dedicated Pediatric Nurse at DHQ Hospital Muzaffargarh. Specializing in pediatric care, medication administration, and patient advocacy.",
  keywords: ["Amal Ramin", "Pediatric Nurse", "DHQ Hospital Muzaffargarh", "Nursing Portfolio", "Healthcare Professional"],
  authors: [{ name: "Amal Ramin" }],
  openGraph: {
    title: "Amal Ramin - Pediatric Nurse Portfolio",
    description: "Dedicated Pediatric Nurse at DHQ Hospital Muzaffargarh.",
    url: "/",
    siteName: "Amal Ramin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal Ramin - Pediatric Nurse Portfolio",
    description: "Dedicated Pediatric Nurse at DHQ Hospital Muzaffargarh.",
  },
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
