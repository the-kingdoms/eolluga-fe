export interface Option {
  title: string;
  description?: string;
  type: "radio" | "checkbox";
  optional: "required" | "optional";
  options: { [key: string]: number };
}

export interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  options: Option[];
}
