import React, { Component } from "react"
import PropTypes from "prop-types"

class Testimony extends Component {
  static propTypes = {
    photo: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    occupation: PropTypes.string,
  }
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
