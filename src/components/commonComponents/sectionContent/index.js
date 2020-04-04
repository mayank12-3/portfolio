import React from 'react'
import './index.scss'

function SectionContent(props) {
  return (
    <p className={'section-content-wrapper ' + (props.className ? props.className : '')}>
      {props.children}
    </p>
  )
}

export default SectionContent
