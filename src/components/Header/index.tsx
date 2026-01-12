import { useContext } from "react";
import "./styles.css";
import { ProductCountContext } from "../../utils/context-product";

export default function Header() {
  const { productCount } = useContext(ProductCountContext);

  return (
    <div className="container dsf-title-header">
      <h1>DSFilter</h1>
      <p>{productCount} Produto(s)</p>
    </div>
  );
}

