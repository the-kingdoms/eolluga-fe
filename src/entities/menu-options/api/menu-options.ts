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

export type { MenuOptionT, MenuOptionContentT };
