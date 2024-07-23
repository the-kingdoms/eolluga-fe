"use client";

/* eslint-disable import/no-cycle */
import { CART_KEY } from "@/shared";

import { CartDataT } from "../types/cart-types";

const getCartData = (): CartDataT => {
  const data = localStorage.getItem(CART_KEY);
  if (data) {
    return JSON.parse(data) as CartDataT;
  }
  return [];
};
export default getCartData;
