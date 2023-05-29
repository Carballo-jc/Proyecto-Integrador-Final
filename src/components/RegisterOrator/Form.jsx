import { Context } from "../context";
import "./Form.css";
import { useContext, useState } from "react";

export const Form = () => {
  const { getPrice } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    cantidad: 0,
    category: "",
    total: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let total = getPrice(200, formData.category) * formData.cantidad;
    setFormData((prev) => ({ ...prev, total: total }));
    console.log(formData);
  };

  return (
    <div className="formContainer">
      <h2>VALOR DE TICKET $200</h2>
      <form onSubmit={handleSubmit} className="form_register">
        <div className="imput_group">
          <input
            className="input_text"
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="input_text"
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Correo"
          className="input_text"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="imput_group">
          <div className="group">
            <p>Cantidad</p>
            <input
              className="input_text2"
              type="number"
              name="cantidad"
              placeholder="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
              min={0}
            />
          </div>

          <div className="group">
            <p>Categoria</p>
            <select
              className="input_text2"
              name="category"
              placeholder="Seleccione"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value={80}>Estudiante</option>
              <option value={50}>Trainee</option>
              <option value={15}>Junior</option>
            </select>
          </div>
        </div>
        <label className="total">Total a Pagar: ${formData.total}</label>
        <div className="btn_group">
          <button className="btn_item" type="reset">
            Borrar
          </button>
          <button className="btn_item" type="submit">
            Resumen
          </button>
        </div>
      </form>
    </div>
  );
};
