import React, { useContext } from 'react'
import { Context } from '../context';
import './NavBar.css'

const NavBar = () => {
  const { state } = useContext(Context);
  const links = state.data?.links;
  return (
    <div className="header-nav">
      <div className='header_logo'>
        <img src="images/codoacodo.png" alt="logo" className='logo' />
        <label className='label_logo'>Conf Bs As</label>
      </div>
      <div>
        <ul className='links'>
          {links?.map((link) => (
            <li key={link.label} className='link_item'>{link.label}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar