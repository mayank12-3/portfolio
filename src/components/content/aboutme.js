import React from 'react'
import {
  SectionHeading,
  SectionContent
} from '../commonComponents'
import facebook from './icons/facebook.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import mail from './icons/mail.png'
import './index.scss'

const AboutMeComponent = () => {
  return (
    <section id='aboutme-section-wrapper'>
      <SectionHeading>Bio</SectionHeading><br /><br />
      <div className='aboutme-container'>
        <div className='about-section_image'>
          <div />
        </div>
        <SectionContent className='dark-text'>
          Something about myself hmmmmm.......
          <div className='social-links-container'>
            {[facebook, github, linkedin, mail].map(imageSrc => (
              <div class='img-wrapper' >
                <div class='imageBox'>
                    <img src={imageSrc} alt='social-img' />
                </div>
              </div>
            ))}
          </div>
        </SectionContent>
      </div>
      <div className='tech-stack-wrapper'>
        <div className='secondary-heading'>Tech Stack</div>
        <div className='tech-stack-container'>
          <div>
            <div className='tech-heading-label'>Language</div>
            <ul>
              <li style={{ color: '#f0db4f' }}>Javascript</li>
              <li style={{ color: '#f06529' }}>HTML5</li>
              <li style={{ color: '#2965f1' }}>CSS3</li>
            </ul>
          </div>
          <div>
            <div className='tech-heading-label'>Frameworks</div>
            <ul>
              <li style={{ color: '#61DBFB' }}>React</li>
              <li style={{ color: '#764abc' }}>Redux</li>
              <li style={{ color: '#080135' }}>Bootstrap</li>
              <li style={{ color: '#3498db' }}>Material UI</li>
            </ul>
          </div>
          <div>
            <div className='tech-heading-label'>WebAPI</div>
            <ul>
              <li style={{ color: '' }}>Web Speech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeComponent
