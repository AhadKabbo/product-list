import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import Breadcrumb from "@/components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping App ",
  description: "Shopping site with add to cart functionally ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Breadcrumb />
          {children}
        </Providers>
      </body>
    </html>
  );
}
