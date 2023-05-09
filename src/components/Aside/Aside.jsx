/* eslint-disable react/prop-types */
import './Aside.css';
export const Aside = (props) => {

  return (
    <div className="aside">
        <img src={ props && props.src} alt="" className="aside_image"/>
        <aside className='aside_item'>
            <h2>{ props && props.title }</h2>
            <p>{ props && props.description }</p>
        </aside>
    </div>
  )
}
