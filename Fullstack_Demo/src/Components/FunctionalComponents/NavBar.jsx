import React from 'react'
import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><Link to='/' className='Link'>Home</Link></li>
          <li><Link to='/about' className='Link' target='_blank'>About</Link></li>
          <li><Link to='/contact' className='Link'>Contact</Link></li>
          <li><Link to='/gallary' className='Link'>Gallery</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar