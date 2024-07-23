"use client";

import { ItemT, getCartData } from "@/shared";

const calculateCartTotalPrice = (): number => {
  const cartData = getCartData();
  if (cartData) {
    return cartData.reduce((total: number, menu: ItemT) => {
      const menuTotal = menu.price * menu.count;
      const optionsTotal = menu.options.reduce(
        (optionTotal, option) => optionTotal + option.additionalPrice,
        0,
      );
      return total + menuTotal + optionsTotal;
    }, 0);
  }
  return 0;
};

export default calculateCartTotalPrice;
