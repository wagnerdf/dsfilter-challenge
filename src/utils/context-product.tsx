import { createContext } from "react";

export type ProductCountContextType = {
  productCount: number;
  setProductCount: (count: number) => void;
};

export const ProductCountContext = createContext<ProductCountContextType>({
  productCount: 0,
  setProductCount: () => {},
});