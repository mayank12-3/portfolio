import React from 'react'
import logo from '../../assets/logo.jpg'
import './index.scss'

function toggleMobileNavBar(value) {
  document.getElementById("mobile-view-navbar").style.height = value
  if (value === '100%') {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}

function Header() {
  const headerTabs = [
    { tabName: 'Home', href: '#' },
    { tabName: 'Experience', href: '#experience-section-wrapper' },
    { tabName: 'Work', href: '#work-section-wrapper' },
    { tabName: 'Bio', href: '#aboutme-section-wrapper' },
  ]
  return (
    <React.Fragment>
      <div id='mobile-view-navbar' className='toggle-dark-mode'>
        <div className='mobile-view-navbar__close-icon toggle-dark-mode' onClick={() => toggleMobileNavBar('0%')}>
          &times;
        </div>
        <ul>
          {headerTabs.map((tab, index) =>
            <li key={index}>
              <a className='nav-link toggle-dark-mode' href={tab.href} data-text={tab.tabName}>{tab.tabName}</a>
            </li>
          )}
        </ul>
      </div>
      <nav className='navbar fixed-top dark-mode'>
        <div id='nav-light-icon' className='dark-mode'>☼</div>
        <a className='navbar-brand dark-mode' href='#'><img src={logo} alt='logo' /></a>
        <ul className='nav justify-content-end overlay-content'>
          {headerTabs.map((tab, index) =>
            <li key={index} className='nav-item'>
              <a className='nav-link dark-mode' href={tab.href} data-text='Home'>{tab.tabName}</a>
            </li>
          )}
          <li className='nav-item nav-drop-button nav-last-item' onClick={() => toggleMobileNavBar('100%')}>
            {[1, 2, 3].map((val) => <div key={val} className='toggle-dark-mode' />)}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header
