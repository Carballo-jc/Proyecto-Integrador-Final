import './Form.css'
export const Form = () => {
  return (
    <div className="formContainer">
      <h2>VALOR DE TICKET $200</h2>
      <form action="" className="form_group">
        <div className="imput_group">
          <input
            className="input_text"
            type="text"
            name="name"
            id=""
            placeholder="Nombre"
          />
          <input
            className="input_text"
            type="text"
            name="lastname"
            id=""
            placeholder="Apellido"
          />
        </div>
        <input type="text" name="email" id="" placeholder="Correo" className="input_text"/>
        <div className="imput_group">
          <input className="input_text" type="text" name="cantidad" id="" placeholder="cantidad" />
          <select className="input_text" name="category" id="" placeholder="Seleccione">
            <option value="estudiante">Estudiante</option>
            <option value="trainee">Trainee</option>
            <option value="junior">Junior</option>
          </select>
        </div>
        <label className='total'>Total a Pagar:${}</label>
      </form>
      <div className="btn_group">
        <button className='btn_item'>Borrar</button>
        <button className='btn_item'>Resumen</button>
      </div>
    </div>
  );
};
