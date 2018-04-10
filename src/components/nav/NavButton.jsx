import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavButton extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const button = document.getElementById(`${this.props.id}`)

    if (this.props.image) {
      let image = document.createElement("img")
      image.setAttribute("src", `${this.props.image}`)
      button.appendChild(image)
    } else {
      button.innerHTML = this.props.title
    }
  }

  render() {
    return (
      <Link to={this.props.link}>
        <div
          id={this.props.id}
          className="nav-button">
        </div>
      </Link>
    )
  }
}

export default NavButton
