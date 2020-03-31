import React from 'react'
import logo from '../../assets/logo.jpg'
import './index.scss'

function toggleMobileNavBar(value) {
  document.getElementById("mobile-view-navbar").style.height = value
}

function Header() {
  return (
    <React.Fragment>
      <div id='mobile-view-navbar' className='toggle-dark-mode'>
        <div className='mobile-view-navbar__close-icon toggle-dark-mode' onClick={() => toggleMobileNavBar('0%')}>
          &times;
        </div>
        <ul>
          <li>
            <a className='nav-link toggle-dark-mode' href='#' data-text='Home'>Home</a>
          </li>
          <li>
            <a className='nav-link toggle-dark-mode' href='#' data-text='Work'>Work</a>
          </li>
          <li>
            <a className='nav-link toggle-dark-mode' href='#' data-text='About Me'>About Me</a>
          </li>
        </ul>
      </div>
      <nav className='navbar fixed-top dark-mode'>
        <a className='navbar-brand dark-mode' href='#'><img src={logo} alt='logo' /></a>
        <ul className='nav justify-content-end overlay-content'>
          <li className='nav-item'>
            <a className='nav-link dark-mode' href='#' data-text='Home'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link dark-mode' href='#' data-text='Work'>Work</a>
          </li>
          <li className='nav-item nav-last-item'>
            <a className='nav-link dark-mode' href='#' data-text='About Me'>About Me</a>
          </li>
          <li className='nav-item nav-drop-button nav-last-item' onClick={() => toggleMobileNavBar('100%')}>
            {[1, 2, 3].map((val) => <div key={val} className='toggle-dark-mode' />)}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header
