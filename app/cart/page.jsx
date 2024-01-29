"use client";
import CartProduct from "@/components/CartProduct";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  // Fetching the cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-gray-600 mx-auto my-3 max-w-7xl px-2 py-8 rounded-md sm:px-6 lg:px-8">
      <div className="border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        {/* Header section for the cart */}
        <div className="bg-amber-50 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 justify-between items-center">
          <div className="col-span-8">
            <h2 className="text-2xl py-2 px-3 uppercase text-[#9ec113] font-semibold">
              Your Cart
            </h2>

            <div className="flex justify-between items-center dark:bg-slate-700 px-4 py-6 border-b border-slate-400 text-slate-500 pb-3 font-semibold text-sm mb-4">
              <h2 className="uppercase">Product</h2>
              <h2 className="uppercase">Quantity</h2>
              {/* <h2 className="uppercase">Price</h2> */}
              <h2 className="uppercase">Cancel</h2>
            </div>

            <div className="">
              {/* Mapping through cart items and rendering CartProduct component for each */}
              {cartItems.map((item, i) => {
                return <CartProduct key={i} cartItem={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
