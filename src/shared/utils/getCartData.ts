"use client";
import { CART_KEY } from "@/shared";
import { CartData } from "../types/cart-types";

const getCartData = (): CartData => {
  const data = localStorage.getItem(CART_KEY);
  if (data) {
    return JSON.parse(data) as CartData;
  }
  return [];
};
export default getCartData;
