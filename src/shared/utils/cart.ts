import { CART_KEY } from "../consts/localStorage";
import { CartDataT, CartItemT } from "../types/order-cart-types";

export const getCartData = (): CartDataT => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(CART_KEY);
    if (data) {
      return JSON.parse(data) as CartDataT;
    }
  }
  return [];
};

export const saveCartItems = (items: CartDataT): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }
};

export const removeItemFromCart = (id: string): void => {
  const items = getCartData();
  const filteredItems = items.filter(item => item.id !== id);
  saveCartItems(filteredItems);
};

export const updateItemCount = (id: string, count: number): void => {
  const items = getCartData();
  const updatedItems = items.map(item =>
    item.id === id ? { ...item, count } : item,
  );
  saveCartItems(updatedItems);
};

export const addItemToCart = (newItem: CartItemT): void => {
  const items = getCartData();
  const itemIndex = items.findIndex(item => item.id === newItem.id);

  if (itemIndex > -1) {
    items[itemIndex].count += newItem.count;
  } else {
    items.push(newItem);
  }

  saveCartItems(items);
};
