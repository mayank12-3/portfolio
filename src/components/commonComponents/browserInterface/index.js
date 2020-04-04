import React from 'react'
import './index.scss'

function BrowserInterface(props) {
  return (
    <div className='browser-wrapper'>
      <div className='browser-wrapper___nav-bar'>
        <div className='close-btn'>×</div>
        <div className='minmize-btn'>−</div>
        <div className='maxmix-btn'>+</div>
        <div className='url-container' />
      </div>
      <div className='browser-wrapper___content-wrapper'>
        <iframe title='test' src={props.src} />
      </div>
    </div>
  )
}

export default BrowserInterface
