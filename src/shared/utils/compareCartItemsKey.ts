import { CartItemT } from "../types/order-cart-types";
import generateUniqueCartItemKey from "./generateUniqueCartKey";

const compareCartItemsKey = (
  cartItem1: CartItemT,
  cartItem2: CartItemT,
): boolean => {
  const key1 = generateUniqueCartItemKey(cartItem1);
  const key2 = generateUniqueCartItemKey(cartItem2);

  return key1 === key2;
};

export default compareCartItemsKey;
