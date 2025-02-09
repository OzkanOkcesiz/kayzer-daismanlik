import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kayzer Danışmanlık",
    default: "Kayzer Danışmanlık - Profesyonel Çözüm Ortağınız",
  },
  description: "Kayzer Danışmanlık resmi web sitesi",
  applicationName: "Kayzer Danışmanlık",
  authors: [{ name: "Kayzer Danışmanlık" }],
  generator: "Next.js",
  keywords: ["danışmanlık", "kurumsal", "profesyonel", "hizmet", "çözüm", "iş", "strateji"],
  referrer: "origin-when-cross-origin",
  themeColor: "#43302b",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
