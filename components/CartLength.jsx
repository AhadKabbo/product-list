"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function CartLength() {
  // Fetching the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);

  // Calculating the length of the cart items array
  const cartLength = cartItems.length;

  // Rendering the length of the cart items
  return <span>{cartLength}</span>;
}
