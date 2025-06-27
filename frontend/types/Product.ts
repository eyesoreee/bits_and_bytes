import type { Category } from "./Category";
import type { Manufacturer } from "./Manufacturer";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image?: string;
  rating: number;
  reviews: number;
  category: Category;
  manufacturer: Manufacturer;
  stock: number;
  description: string;
  isSale?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
