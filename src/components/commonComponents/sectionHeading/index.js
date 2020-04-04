import React from 'react'
import './index.scss'

function SectionHeading(props) {
  return (
    <div className={'section-heading ' + (props.className ? props.className : '')}>
      {props.children}
    </div>
  )
}

export default SectionHeading
