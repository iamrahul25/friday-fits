export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  isNew: boolean;
  isTrending: boolean;
  description?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type ThemeId = "olive" | "blush" | "midnight";
