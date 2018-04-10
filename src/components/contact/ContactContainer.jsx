import React, { Component } from 'react'

class ContactContainer extends Component {
  componentDidMount() {
    const mail = document.getElementById("contact-mail")

    let image = document.createElement("img")
    image.setAttribute("src", "../../mail-icon.jpeg")
    mail.appendChild(image)
  }

  render() {
    return (
      <div className="contact-container">
        <a href="mailto:dmccapes@mac.com"
           className="contact-mail"
           id="contact-mail" />
      </div>
    )
  }
}

export default ContactContainer
