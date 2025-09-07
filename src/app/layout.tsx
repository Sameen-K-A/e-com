import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import "./globals.css";
import { Footer } from "@/components/others/Footer";
import { Navbar } from "@/components/others/Navbar";

export const metadata: Metadata = {
  title: "Ecom Shop Your Favorites Online",
  description:
    "Discover and shop a wide range of products with Ecom. Enjoy a seamless online shopping experience with secure checkout, fast delivery, and exclusive deals.",
  keywords: [
    "online shopping",
    "buy products online",
    "Ecom store",
    "fashion",
    "electronics",
    "lifestyle",
    "best deals",
    "secure checkout",
    "fast delivery",
    "ecommerce website",
  ],
};

const font = Outfit({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}