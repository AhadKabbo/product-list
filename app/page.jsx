import CartLength from "@/components/CartLength";
import ProductList from "@/components/ProductList";
import { getData } from "@/lib/getData";
import Link from "next/link";
import React from "react";

// HomePage component fetches products from an external API and renders them along with a link to the cart page
const HomePage = async () => {
  // Fetch products from the external API using getData function
  const products = (await getData("https://fakestoreapi.com/products")) ?? [];

  return (
    <div className="bg-gray-600 mx-auto my-3 max-w-7xl px-2 py-8 rounded-md sm:px-6 lg:px-8">
      {/* Container for the main content */}
      <div className="border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        {/* Header section */}
        <div className="bg-amber-50 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
          {/* Title */}
          <h2 className="text-2xl py-2 px-3 rounded-lg uppercase text-[#9ec113] font-semibold">
            Products
          </h2>
          {/* Link to the cart page */}
          <Link
            className="bg-gradient-to-r from-[#A4BC46] to-[#85A019] py-2 px-3 rounded-lg uppercase text-white font-semibold"
            href="/cart">
            {/* Text and CartLength component indicating the number of items in the cart */}
            View Cart (<CartLength />)
          </Link>
        </div>
        {/* Product list section */}
        <div className="bg-white dark:bg-slate-700 px-4 py-6">
          {/* Render the ProductList component with the fetched products */}
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
