import { CartMenuOptionT, MenuOptionT } from "@/shared";

export const getCartOptionsByMenuOptions = (
  options: MenuOptionT[],
  selectedOptions: { [key: string]: string[] },
): CartMenuOptionT[] => {
  return options.reduce((result, option) => {
    const selectedOptionValues = selectedOptions[option.title] || [];
    const optionTotal = selectedOptionValues.reduce((sum, value) => {
      const selectedOption = option.content.find(item => item.name === value);
      return selectedOption ? sum + selectedOption.price : sum;
    }, 0);
    return [
      ...result,
      {
        categoryName: option.title,
        name: selectedOptionValues.join(", "),
        price: optionTotal,
      },
    ];
  }, [] as CartMenuOptionT[]);
};
