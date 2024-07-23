import { MenuItemT } from "@/entities";

const getMenuListByCategory = (category: string, menuList: MenuItemT[]) => {
  return menuList.filter(menu => menu.category === category);
};
export default getMenuListByCategory;
