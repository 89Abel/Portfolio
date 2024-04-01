import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>Eyu_Pics.</Link>
          <div className="menu-icon" onClick={handleClick}>
            <ion-icon name={click ? "close" : "menu"}></ion-icon>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/Gallery' className='nav-links' onClick={closeMenu}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className='nav-links' onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar;