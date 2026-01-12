import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
};

type Props = {
  onFilter: (min: number, max: number) => void;
};

export default function FilterProductCard({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({
    min: undefined,
    max: undefined,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: Number(value) });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onFilter(formData.min || 0, formData.max || Number.MAX_VALUE);
  }

  return (
    <div className="container">
      <div className="dsf-container-card-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="min"
              value={formData.min || ""}
              type="number"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="max"
              value={formData.max || ""}
              type="number"
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
