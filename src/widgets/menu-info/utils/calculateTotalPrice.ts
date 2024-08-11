import { MenuOptionT, MenuT } from "@/shared";

export const calculateTotalPrice = (
  menu: MenuT,
  selectedOptions: { [key: string]: string[] },
  options: MenuOptionT[],
  count: number,
): number => {
  const basePrice = menu.price;
  const toppingPrice = options.reduce((total, option) => {
    const selectedOptionValues = selectedOptions[option.title] || [];
    const optionTotal = selectedOptionValues.reduce((sum, value) => {
      const selectedOption = option.content.find(item => item.name === value);
      return selectedOption ? sum + selectedOption.price : sum;
    }, 0);
    return total + optionTotal;
  }, 0);
  return (basePrice + toppingPrice) * count;
};
