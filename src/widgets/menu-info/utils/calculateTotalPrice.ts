import { Menu } from "@/shared/types/menu-detail-types";

export const calculateTotalPrice = (
  menu: Menu,
  selectedOptions: { [key: string]: string[] },
  count: number
): number => {
  const basePrice = menu.price;
  const toppingPrice = menu.options.reduce((total, option) => {
    const selectedOptionValues = selectedOptions[option.title] || [];
    const optionTotal = selectedOptionValues.reduce(
      (sum, value) => sum + option.options[value],
      0
    );
    return total + optionTotal;
  }, 0);
  return (basePrice + toppingPrice) * count;
};
