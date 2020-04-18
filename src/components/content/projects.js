import React, { useState, useEffect } from 'react'
import {
  Button,
  SectionHeading,
  SectionContent,
} from '../commonComponents'
import './index.scss'

const ProjectTitle = (props) =>
  <div className='project-title secondary-heading'>{props.children}</div>

const ProjectContent = (props) =>
  <div className='project-content'>
    <SectionContent>{props.children}</SectionContent>
  </div>

const ProjectsComponent = () => {
  const [activeIdx, setActiveIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setActiveIndex(1)
      console.log('setting active idx')
    }, 1000)
  })
  return (
    <section id='work-section-wrapper'>
      <SectionHeading>Work</SectionHeading>
      <br /><br />
      <div className='project-container'>
        <div className='project-slider'>
          <div className='active'/>
          <div />
          <div />
          <div />
        </div>
        <div className='project-wrapper'>
          <div className='project-preview'>
            <div />
          </div>
          <div className='project-info'>
            <ProjectTitle>Pac Man</ProjectTitle>
            <ProjectContent>
              <label>Description:&nbsp;</label>
              <span>Content....</span>
              <br />
              <label>Tech:&nbsp;</label>
              <span>
                React.js, Bootstrap
              </span>
              <br />
              <Button className='btn-filled'>
                <span>Visit</span>
              </Button>
            </ProjectContent>
          </div></div>
      </div>
    </section>
  )
}

export default ProjectsComponent
