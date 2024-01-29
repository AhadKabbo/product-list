import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    console.log(product);
    dispatch(addToCart(product));
  }
  return (
    <div className="rounded-lg mx2 mt-5 mb-14 p-2   dark:bg-slate-900 overflow-hidden border shadow">
      <Link href="/">
        <Image
          src={product.image}
          alt={product.title}
          width={556}
          height={556}
          className="w-full h-48 object-cover  "
        />
      </Link>
      <div className="px-4">
        <Link href={`/`}>
          <h2 className="text-center truncate dark:text-slate-200 text-slate-800 my-4 font-semibold">
            {product.title}
          </h2>
        </Link>
        <div className="my-2 flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p className="text-red-600">$ {product.price}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#A4BC46] to-[#85A019] px-4 py-2 rounded-md text-white">
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
