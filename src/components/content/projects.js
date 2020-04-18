import React from 'react'
import {
  Button,
  SectionHeading,
  SectionContent,
  BrowserInterface
} from '../commonComponents'
import './index.scss'

const ProjectTitle = (props) =>
  <div className='project-title secondary-heading'>{props.children}</div>

const ProjectContent = (props) =>
  <div className='project-content'>
    <SectionContent>{props.children}</SectionContent>
  </div>

const ProjectsComponent = () => {
  return (
    <section id='work-section-wrapper'>
      <SectionHeading>Work</SectionHeading>
      <br /><br />
      <div className='project-container'>
        <div className='project-preview'>
          <BrowserInterface />
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
        </div>
      </div>
    </section>
  )
}

export default ProjectsComponent
