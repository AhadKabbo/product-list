import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import Navbar from "@/components/Navbar";

// Initializing the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the website
export const metadata = {
  title: "Shopping App", // Title of the website
  description: "Shopping site with add to cart functionality",
};

// RootLayout component responsible for wrapping the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        {/* Redux Providers for state management */}
        <Providers>
          {" "}
          <Navbar /> {/* Navbar component for navigation */}
          {children} {/* Main content rendered within Providers */}
        </Providers>
      </body>
    </html>
  );
}
