import React, { Component } from "react"
import PropTypes from "prop-types"

class Download extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
  }
  render = () => {
    const { title, description } = this.props
    return (
      <section
        id="download-now"
        className="ts-block text-center pt-4"
        data-bg-color="#eaeaea"
      >
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
            <h5> {description}</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default Download
