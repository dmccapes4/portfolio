import React, { Component } from 'react'

class Project extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const project = document.getElementById(`${this.props.id}`)

    let image = document.createElement("img")
    image.setAttribute("src", `${this.props.image}`)
    project.appendChild(image)
  }

  render() {
    return (
      <div className="project">
        <div className="project-title">{this.props.title}</div>
        <div className="project-description">{this.props.description}</div>
        <div className="project-tech">{this.props.tech}</div>
        <div id={this.props.id} className="project-image" />
        <a href={this.props.link}>Visit Site</a>
      </div>
    )
  }
}

export default Project
