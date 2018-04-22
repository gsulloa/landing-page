import React, { Component } from "react"

class Testimony extends Component {
  render = () => {
    const { photo, text, name, occupation } = this.props
    return (
      <blockquote className="blockquote">
        <div className="ts-circle__lg" data-bg-image={photo} />
        <p>{text}</p>
        <footer className="blockquote-footer">
          <h4>{name}</h4>
          <h6>{occupation}</h6>
        </footer>
      </blockquote>
    )
  }
}

export default Testimony
