import React from 'react'
import './index.scss'

function Layout(props) {
  return (
    <div className='page-layout'>
      {props.children}
    </div>
  )
}

export default Layout
