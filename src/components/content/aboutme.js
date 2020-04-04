import React from 'react'
import {
  SectionHeading,
  SectionContent
} from '../commonComponents'
import './index.scss'

function AboutMeComponent() {
  return (
    <section id='aboutme-section-wrapper'>
      <SectionHeading>About Me</SectionHeading><br /><br />
      <div className='aboutme-container'>
        <div className='about-section_image' />
        <SectionContent className='dark-text'>
          Something about myself hmmmmm.......
        </SectionContent>
      </div>
      <div className='tech-stack-wrapper'>
      </div>
    </section>
  )
}

export default AboutMeComponent
