import React, { Component } from "react"
import PropTypes from "prop-types"

class Feature extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    elements: PropTypes.arrayOf(PropTypes.string),
    photo: PropTypes.string,
    i: PropTypes.number,
  }
  renderDescription = () => {
    const { title, description, elements } = this.props
    return (
      <div className="col-md-5 col-xl-5" data-animate="ts-fadeInUp">
        <div className="ts-title">
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <ul className="ts-list-colored-bullets">
          {elements.map((element, i) => <li key={i}>{element}</li>)}
        </ul>
      </div>
    )
  }
  renderPhoto = () => {
    const { photo } = this.props
    return (
      <div
        className="col-md-7 col-xl-7 text-center"
        data-animate="ts-fadeInUp"
        data-delay="0.1s"
      >
        <div className="px-3">
          <img src={photo} className="mw-100" alt="" />
        </div>
      </div>
    )
  }
  render = () => {
    const { i } = this.props
    const data = [this.renderDescription(), this.renderPhoto()]
    return (
      <section id="advanced-features" className="ts-block ts-block-no-padding">
        <div className="container">
          <div className="row">
            {data[i % 2]}
            {data[(i + 1) % 2]}
          </div>
        </div>
      </section>
    )
  }
}

export default Feature
