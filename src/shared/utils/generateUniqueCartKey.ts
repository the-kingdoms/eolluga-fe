import { CartItemT } from "../types/order-cart-types";

const generateUniqueCartItemKey = (cartItem: CartItemT): string => {
  const sortedOptions = cartItem.options.sort((a, b) => {
    const categoryNameComparison = a.categoryName.localeCompare(b.categoryName);
    if (categoryNameComparison !== 0) return categoryNameComparison;
    return a.name.localeCompare(b.name);
  });

  const optionsKey = sortedOptions
    .map(option => `${option.categoryName}:${option.name}`)
    .join("|");

  return `${cartItem.name}-${optionsKey}`;
};

export default generateUniqueCartItemKey;
