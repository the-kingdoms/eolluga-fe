import { MenuItemT } from "@/entities";

const getMenuListByCategory = (category: string, menuList: MenuItemT[]) => {
  return menuList.filter(menu => menu.categories.includes(category));
};
export default getMenuListByCategory;
