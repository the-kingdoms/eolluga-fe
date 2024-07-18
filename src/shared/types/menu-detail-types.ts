export interface Option {
  title: string;
  description?: string;
  type: "radio" | "checkbox";
  optional: "required" | "optional";
  options: Record<string, number>;
}

export interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  options: Option[];
}
