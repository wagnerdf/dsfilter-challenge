import "./styles.css";
import type { ProductDTO } from "../../models/ProductDTO";
import * as productService from "../../services/product-service";
import { useState } from "react";

export default function ListProductCard() {
  const [products] = useState<ProductDTO[]>(() =>
    productService.findByPrice(0, Number.MAX_VALUE)
  );

  return (
    <div className="container">
      <div className="dsf-container-card-prod">
        {products.map((product) => (
          <div className="dsf-card-product" key={product.id}>
            <p className="dsf-product-name">{product.name}</p>
            <p className="dsf-product-price">
              R$ {product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
