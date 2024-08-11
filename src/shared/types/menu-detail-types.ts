interface MenuOptionContentT {
  name: string;
  price: number;
}

interface MenuOptionT {
  menuOptionId: string;
  menuId: string;
  title: string;
  content: MenuOptionContentT[];
  required: "REQUIRED" | "NOT_REQUIRED";
  choice: "SINGLE" | "MULTIPLE";
  min?: number | null;
  max?: number | null;
}

interface MenuT {
  menuId: string;
  storeId: string;
  category: string;
  name: string;
  content: string;
  price: number;
  image: string;
}

export type { MenuT, MenuOptionT };
