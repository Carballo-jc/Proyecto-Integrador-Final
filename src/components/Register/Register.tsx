import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='form_container'>
       <h5>CONVIERTE EN UN</h5>
        <h2>ORADOR</h2>
        <p>Anotate como orador para dar una charla ignite. Cuentanos de que quieres hablar!</p>
        <form action="" className='form_group'>
           <div className='input_group'>
           <input type="text" placeholder='Nombre' className='input_text'/>
            <input type="text" placeholder='Apellido' className='input_text'/>
           </div>
            <textarea name="" id="" cols={30} rows={10} placeholder='Sobre que quieres hablar?' className='input_textarea'/>
            <button type='submit' className='btn_submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Register