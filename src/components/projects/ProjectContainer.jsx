import React, { Component } from 'react'
import Project from './Project'

class ProjectContainer extends Component {
  render () {
    return (
      <div className="project-container">
        <div className="project-banner" />
        <Project
          title="EatTime"
          description="Full stack web application for restaurant reservations"
          tech="Ruby on Rails, React, Redux, PostgreSQL"
          id="project-eattime"
          image="../../eattime.jpg"
          link="https://eattime.herokuapp.com"
        />
      </div>
    )
  }
}

export default ProjectContainer
