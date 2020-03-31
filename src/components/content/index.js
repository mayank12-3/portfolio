import React from 'react'
import './index.scss'

function Content() {
  return (
    <div className='main-content-wrapper'>
      <div className='right-sidebar'><marquee><h3>Retarded</h3></marquee></div>
      <section className='intro-section'>
        <div className='section-heading'>
          Hi, I'm<br />
          Deepak Chaudhari<br />
          I build things for web
        </div>
        <br /><br />
        <p className='intro-section_content'>
          I'm a software engineer based in Mumbai, who enjoys building things that live on the internet.
          I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient.
        </p>
        <div className='into-section-btn-wrapper'>
          <button>Get in touch</button>
        </div>
        {/*
          <p className='intro-section_content'>
            Shortly after graduating from VJTI, I joined the engineering team at Servify where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          */}
        <picture className='intro-section_image'>
          <source media='(min-width: 850px)' srcSet='https://i.picsum.photos/id/866/300/300.jpg' />
          <source media='(max-width: 840px)' srcSet='https://i.picsum.photos/id/866/260/260.jpg' />
          <img src='https://i.picsum.photos/id/866/260/260.jpg' alt='Profilepic' style={{ width: 'auto' }} />
        </picture>
      </section>
      <section id='work-info-warpper'>
        <div className='section-heading'>
          Experience Timeline
        </div>
        <div className='work-info-wrapper-content'>
          <div className='work-info-wrapper__timeline_bar toggle-dark-mode' />
        </div>
      </section>
      <section>
        <div className='section-heading'>
          Work
        </div>
      </section>
      <section className='about-me-sectino'>
        <div className='section-heading'>
          About Me
        </div>
      </section>
    </div>
  )
}

export default Content
