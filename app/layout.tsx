import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSide from "@/src/layout/left-side";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Portal DT",
  description: "Portal Web Satu Pintu",
  openGraph: {
    title: "Web Portal DT",
    description: "Portal Web Satu Pintu",
    url: "https://daarut-tauhiid-portal.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/45308862-85e3-454c-9e4a-419df3449bb7.png?token=0L6RWjz87cYvF4KQZBHPWuiZDPKRB4CKPANxu3ZO-fI&height=630&width=1200&expires=33290533714",
        width: 1200,
        height: 630,
        alt: "Web Portal DT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Portal DT",
    description: "Portal Web Satu Pintu",
    site: "https://daarut-tauhiid-portal.vercel.app/",
    images: [
      "https://opengraph.b-cdn.net/production/images/45308862-85e3-454c-9e4a-419df3449bb7.png?token=0L6RWjz87cYvF4KQZBHPWuiZDPKRB4CKPANxu3ZO-fI&height=630&width=1200&expires=33290533714",
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-stone-200 antialiased max-h-screen box-content`}
      >
        {children}
      </body>
    </html>
  );
}
