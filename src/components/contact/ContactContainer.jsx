import React, { Component } from 'react'

class ContactContainer extends Component {
  componentDidMount() {
    const mail = document.getElementById("contact-mail")

    let image = document.createElement("img")
    image.setAttribute("src", "../../mail-icon.jpeg")
    mail.appendChild(image)

    const linkedin = document.getElementById("contact-linkedin")

    image = document.createElement("img")
    image.setAttribute("src", "../../linkedin-icon.png")
    linkedin.appendChild(image)
  }

  render() {
    return (
      <div className="contact-container">
        <a href="mailto:dmccapes@mac.com"
           className="contact-icon"
           id="contact-mail" />
        <a href="https://linkedin.com/in/dylan-mccapes"
           className="contact-icon"
           id="contact-linkedin" />
      </div>
    )
  }
}

export default ContactContainer
