import { CART_KEY } from "../constants/localStorage";
import { CartItemT, CartItemsT } from "../types/order-cart-types";
import generateUniqueCartItemKey from "./generateUniqueCartKey";

export const getCartData = (): CartItemsT => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(CART_KEY);
    if (data) {
      return JSON.parse(data) as CartItemsT;
    }
  }
  return [];
};

export const saveCartItems = (items: CartItemsT) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }
};

export const removeAllItemsFromCart = () => {
  saveCartItems([]);
};

export const removeItemFromCart = (uniqueKey: string) => {
  const items = getCartData();
  const filteredItems = items.filter(
    item => generateUniqueCartItemKey(item) !== uniqueKey,
  );
  saveCartItems(filteredItems);
};

export const updateItemCount = (uniqueKey: string, count: number) => {
  const items = getCartData();
  const updatedItems = items.map(item =>
    generateUniqueCartItemKey(item) === uniqueKey ? { ...item, count } : item,
  );
  saveCartItems(updatedItems);
};

export const addItemToCart = (newItem: CartItemT) => {
  const items = getCartData();
  const uniqueKey = generateUniqueCartItemKey(newItem);
  const itemIndex = items.findIndex(
    item => generateUniqueCartItemKey(item) === uniqueKey,
  );

  if (itemIndex > -1) {
    items[itemIndex].count += newItem.count;
  } else {
    items.push(newItem);
  }

  saveCartItems(items);
};

export const calculateCartTotalPrice = (): number => {
  const cartData = getCartData();
  if (cartData) {
    return cartData.reduce((total: number, menu: CartItemT) => {
      const optionsPrice = menu.options.reduce(
        (acc, option) => acc + option.price,
        0,
      );
      const itemPrice = menu.price + optionsPrice;
      return total + itemPrice * menu.count;
    }, 0);
  }
  return 0;
};
