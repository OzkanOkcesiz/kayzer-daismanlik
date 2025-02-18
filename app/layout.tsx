import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#43302b',
              color: '#fff',
            },
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
