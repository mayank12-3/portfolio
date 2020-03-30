import React from 'react'
import logo from '../../assets/logo.jpg'
import './index.scss'

function Header() {
  return (
    <nav className='navbar fixed-top dark-mode'>
      <a className='navbar-brand dark-mode' href='#'><img src={logo} alt='logo' /></a>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <a className='nav-link dark-mode' href='#' data-text='Home'>Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link dark-mode' href='#' data-text='Work'>Work</a>
        </li>
        <li className='nav-item nav-last-item'>
          <a className='nav-link dark-mode' href='#' data-text='About Me'>About Me</a>
        </li>
        <li className='nav-item nav-drop-button nav-last-item'>
          {[1, 2, 3].map((val) => <div key={val} className='toggle-dark-mode' />)}
        </li>
      </ul>
    </nav>
  )
}

export default Header
