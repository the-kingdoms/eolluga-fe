import { MenuT } from "@/entities";

const getMenuListByCategory = (category: string, menuList: MenuT[]) => {
  return menuList.filter((menu) => menu.category === category);
};
export default getMenuListByCategory;
