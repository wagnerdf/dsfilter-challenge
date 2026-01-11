import "./styles.css";

export default function FilterProductCard() {
  return (
    <div className="container">
      <div className="dsf-container-card-form">
        <form>
          <div>
            <input
              id="dsf-inpt"
              name="min"
              type="text"
              placeholder="Preço mínimo"
            />
          </div>
          <div>
            <input
              id="dsf-inpt"
              name="max"
              type="text"
              placeholder="Preço máximo"
            />
          </div>
          <div>
            <button className="dsf-btn">Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
