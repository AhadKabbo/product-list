"use client";
import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

// Importing Redux actions
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();

  // Function to handle removing a cart item
  function handleRemoveCartItem(cartId) {
    dispatch(removeFromCart(cartId)); // Dispatching removeFromCart action with cartId
  }

  // Function to handle incrementing the quantity of a cart item
  function handleIncrementQty(cartId) {
    dispatch(incrementQty(cartId)); // Dispatching incrementQty action with cartId
  }

  // Function to handle decrementing the quantity of a cart item
  function handleDecrementQty(cartId) {
    dispatch(decrementQty(cartId)); // Dispatching decrementQty action with cartId
  }

  return (
    <div className="mx-3 flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center gap-3">
        {/* Displaying product image */}
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          {/* Displaying product title */}
          <h2 className="tracking-wide max-w-xl">{cartItem.title}</h2>
        </div>
      </div>
      <div className="sm:rounded-xl sm:border border-gray-400 flex gap-3 items-center sm:gap-1 md:max-w-2xl">
        {/* Buttons to increment and decrement quantity */}
        <button
          onClick={() => handleDecrementQty(cartItem.id)}
          className="border-r border-gray-400 py-2 px-4">
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4">{cartItem.qty ?? 1}</p>
        <button
          onClick={() => handleIncrementQty(cartItem.id)}
          className="border-l border-gray-400 py-2 px-4">
          <Plus />
        </button>
      </div>
      <div className="mr-3 flex items-center gap-2">
        {/* Button to remove the cart item */}
        <button onClick={() => handleRemoveCartItem(cartItem.id)}>
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
