import React from 'react'
import ExperienceTimelineComponent from './timelineExp'
import ProjectsComponent from './projects'
import AboutMeComponent from './aboutme'
import {
  Button,
  SectionHeading,
  SectionContent,
  PictureComp
} from '../commonComponents'
import facebookLogo from './icons/facebook.png'
import githubLogo from './icons/github.png'
import linkedinLogo from './icons/linkedin.png'
import mailLogo from './icons/mail.png'
import './index.scss'

function Content() {
  return (
    <div className='main-content-wrapper'>
      <div className='right-sidebar marquee-sidebar'><marquee>Retarded</marquee></div>
      <div className='left-sidebar marquee-sidebar'>
        <div className='toggle-dark-mode' />
        <ul>
          <li><img src={facebookLogo} /></li>
          <li><img src={githubLogo} /></li>
          <li><img src={linkedinLogo} /></li>
          <li><img src={mailLogo} /></li>
        </ul>
      </div>
      <section className='intro-section'>
        <SectionHeading>
          Hi, I'm <br />
          Deepak Chaudhari<br />
          I build things for the web
        </SectionHeading>
        <br /><br />
        <SectionContent className='intro-section_content light-text'>
          I'm a software engineer based in Mumbai, who enjoys building things that live on the internet.
          I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficiency.
        </SectionContent>
        <div>
          <Button className='btn-outline'>
            <span>Get in touch</span>
          </Button>
        </div>
        <br />
        {/*
          <p className='intro-section_content'>
            Shortly after graduating from VJTI, I joined the engineering team at Servify where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          */}
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
