import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping App",
  description: "Shopping site with add to cart functionally ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Breadcrumb />
        {children}
      </body>
    </html>
  );
}
