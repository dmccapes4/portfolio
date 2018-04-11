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
        <Project
          title="NotAlone"
          description="Full stack web application for online video group therapy"
          tech="React, Hasura, OpenTok"
          id="project-notalone"
          image="../../notalone.gif"
          link="https://ui.acridly34.hasura-app.io"
        />
        <Project
          title="ShiftSwap"
          description="Full stack web application to facilitate shift swapping with coworkers"
          tech="MongoDB, Express, React, Node"
          id="project-shiftswap"
          image="../../shiftswap.png"
          link="https://shift-swap.herokuapp.com"
        />
        <Project
          title="Rule The Realm"
          description="JavaScript turn based strategy game"
          tech="JavaScript, HTML5, CSS3"
          id="project-ruletherealm"
          image="../../rule-the-realm.png"
          link="https://dmccapes4.github.io/rule_the_realm"
        />
      </div>
    )
  }
}

export default ProjectContainer
