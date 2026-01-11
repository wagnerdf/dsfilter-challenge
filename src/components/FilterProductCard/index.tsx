import { useState } from "react";
import "./styles.css";

type FormData = {
  numberMin?: number;
  numberMax?: number;
};

export default function FilterProductCard() {
  const [formData, setFormData] = useState<FormData>({
    numberMin: undefined,
    numberMax: undefined,
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any){
    event.preventDefault();
    console.log(formData.numberMin || 0);
    console.log(formData.numberMax || Number.MAX_VALUE);
  }

  return (
    <div className="container">
      <div className="dsf-container-card-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="numberMin"
              value={formData.numberMin || ""}
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="numberMax"
              value={formData.numberMax || ""}
              type="text"
              placeholder="Preço máximo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button>Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
