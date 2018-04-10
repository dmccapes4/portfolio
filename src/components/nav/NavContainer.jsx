import React, { Component } from 'react'
import NavButton from './NavButton'

class NavContainer extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavButton
          id="nav-logo"
          image="../../dylan.png"
          title=""
          link="/" />
        <NavButton
          id="projects"
          image=""
          title="Projects"
          link="/projects" />
        <NavButton
          id="contact"
          image=""
          title="Contact Me"
          link="/contact" />
      </div>
    )
  }
}

export default NavContainer
