import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="bg-gray-600  mx-auto my-3 max-w-7xl px-2 rounded-md sm:px-6 lg:px-8">
      <nav
        className="flex md:justify-around md:-space-x-40 py-6 px-8 md:px-10"
        aria-label="Breadcrumb">
        <ol className="inline-flex items-center ">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="px-7 py-3 inline-flex items-center text-2xl font-medium text-amber-100  hover:text-[#a2c907] dark:text-gray-400 dark:hover:text-white">
              <Home className="w-5 h-5 me-2.5" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Link
                href="/cart"
                className="px-7 py-3 inline-flex items-center text-2xl font-medium text-amber-100 hover:text-[#a2c907] dark:text-gray-400 dark:hover:text-white">
                My Cart
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
