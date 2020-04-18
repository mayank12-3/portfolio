import React from 'react'
import ExperienceTimelineComponent from './timelineExp'
import ProjectsComponent from './projects'
import AboutMeComponent from './aboutme'
import {
  Button,
  SectionHeading,
  SectionContent
} from '../commonComponents'
import './index.scss'

const Content = () => {
  return (
    <div className='main-content-wrapper'>
      <div className='right-sidebar marquee-sidebar'>
        <marquee direction='up'>
          R<br/>
          e<br/>
          t<br/>
          a<br/>
          r<br/>
          d<br/>
          e<br/>
          d
        </marquee>
      </div>
      <section className='intro-section'>
        <div className='section-heading'>
          <div className='text1'>
            Hi, I'm
          </div>
          <div className='text2'>
            Deepak Chaudhari
          </div>
          <div className='text3'>
            <div>I build things for</div>
            <div>the web</div>
          </div>
        </div>
        <br />
        <SectionContent className='intro-section_content light-text'>
          I'm a software engineer based in Mumbai, who enjoys building things that live on the internet.
          I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficiency.
          <br /><br/>
          Shortly after graduating from VJTI, I joined the engineering team at Servify where I work on a wide variety of interesting and meaningful projects on a daily basis.
        </SectionContent>
        <div>
          <Button className='btn-outline'>
            <span>Get in touch</span>
          </Button>
        </div>
        <br />
        <div className='intro-section_image'>
          <div className='picture__outline' />
          <picture>
            <source media='(min-width: 850px)' srcSet='https://i.picsum.photos/id/866/300/300.jpg' />
            <source media='(max-width: 840px)' srcSet='https://i.picsum.photos/id/866/260/260.jpg' />
            <img src='https://i.picsum.photos/id/866/260/260.jpg' alt='Profilepic' style={{ width: 'auto' }} />
          </picture>
        </div>
      </section>
      <ExperienceTimelineComponent />
      <ProjectsComponent />
      <AboutMeComponent />
    </div>
  )
}

export default Content
