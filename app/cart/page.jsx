"use client";
import Breadcrumb from "@/components/Breadcrumb";
import CartProduct from "@/components/CartProduct";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  // const totalPrice = cartItems.reduce((accumulator, currentItem) => {
  //   return accumulator + currentItem.price * currentItem.qty;
  // }, 0);
  // console.log(cartItems);
  return (
    <div className="px-20 py-16">
      {/* <Breadcrumb /> */}
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {cartItems.map((item, i) => {
              return <CartProduct key={i} cartItem={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
