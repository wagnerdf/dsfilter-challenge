import "./styles.css";

export default function ListProductCard() {
  const products = Array.from({ length: 6 });

  return (
    <div className="container">
      <div className="dsf-container-card-prod">
        {products.map((_, index) => (
          <div className="dsf-card-product" key={index}>
            <p className="dsf-product-name">PC Gamer Pro</p>
            <p className="dsf-product-price">R$ 1200.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
