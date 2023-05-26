import React, { useContext } from 'react'
import { Context } from '../context';
import './Footer.css';

const Footer = () => {
    const { state } = useContext(Context);
    const links = state.data?.footer;
  return (
    <div className='footer'>
        <ul className='footer_item'>
            {links?.map((link) =>{
                return(
                    <li key={link.label} className='link_item_footer'>{link.label}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Footer