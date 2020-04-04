import React from 'react'
import './index.scss'

function Button(props) {
  return (
    <button className={'btn ' + (props.className ? props.className : '')}>
      {props.children}
    </button>
  )
}

export default Button
