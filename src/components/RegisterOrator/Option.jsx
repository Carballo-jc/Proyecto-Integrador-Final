/* eslint-disable react/prop-types */
import './styles.css'
export const Option = ({title, percentaje, clasess}) => {

    return (
    <div className='option' style={clasess}>
        <h3>{title}</h3>
        <p>Tiene un descuento</p>
        <h4>{percentaje}%</h4>
        <span className='option_item'>* presentar documentación</span>
    </div>
  )
}
