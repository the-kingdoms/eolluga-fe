import { MenuItemT } from "@/entities";

const getMenuListByCategory = (category: string, menuList: MenuItemT[]) => {
  console.log(category, menuList);
  return menuList.filter(menu => menu.category === category);
};
export default getMenuListByCategory;
