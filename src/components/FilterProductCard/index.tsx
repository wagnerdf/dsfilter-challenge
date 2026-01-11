import { useState } from "react";
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
};

export default function FilterProductCard() {
  const [formData, setFormData] = useState<FormData>({
    min: undefined,
    max: undefined,
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any){
    event.preventDefault();
    console.log(formData.min || 0);
    console.log(formData.max || Number.MAX_VALUE);
  }

  return (
    <div className="container">
      <div className="dsf-container-card-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="min"
              value={formData.min || ""}
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="max"
              value={formData.max || ""}
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
