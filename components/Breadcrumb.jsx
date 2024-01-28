import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <Home className="w-3 h-3 me-2.5" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <Link
              href="/cart"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              My Cart
            </Link>
          </div>
        </li>
        {/* <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Flowbite
            </span>
          </div>
        </li> */}
      </ol>
    </nav>
  );
}
