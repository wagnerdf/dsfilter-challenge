import { useState } from "react";
import FilterProductCard from "./components/FilterProductCard";
import Header from "./components/Header";
import ListProductCard from "./components/ListProductCard";
import * as productService from "./services/product-service";
import type { ProductDTO } from "./models/ProductDTO";

function App() {
  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE)
  );

  function handleFilter(min: number, max: number) {
    const filteredProducts = productService.findByPrice(min, max);
    setProducts(filteredProducts);
  }

  return (
    <>
      <Header total={products.length} />
      <FilterProductCard onFilter={handleFilter} />
      <ListProductCard products={products} />
    </>
  );
}

export default App;
