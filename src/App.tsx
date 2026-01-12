import { useState } from "react";
import FilterProductCard from "./components/FilterProductCard";
import Header from "./components/Header";
import ListProductCard from "./components/ListProductCard";
import * as productService from "./services/product-service";
import type { ProductDTO } from "./models/ProductDTO";
import { ProductCountContext } from "./utils/context-product";

export default function App() {
  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE)
  );

  const [productCount, setProductCount] = useState<number>(
    products.length
  );

  function handleFilter(min: number, max: number) {
    const filteredProducts = productService.findByPrice(min, max);
    setProducts(filteredProducts);
    setProductCount(filteredProducts.length);
  }

  return (
    <ProductCountContext.Provider
      value={{ productCount, setProductCount }}
    >
      <Header />
      <FilterProductCard onFilter={handleFilter} />
      <ListProductCard products={products} />
    </ProductCountContext.Provider>
  );
}
