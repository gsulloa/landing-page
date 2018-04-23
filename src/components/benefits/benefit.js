import React, { Component } from "react"
import PropTypes from "prop-types"

class Benefit extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
  }
  render = () => {
    const { title, description, icon } = this.props
    return (
      <div className="col-sm-6 col-md-4 col-xl-4">
        <figure data-animate="ts-fadeInUp">
          <figure className="icon mb-5 p-2">
            <img src={icon} alt="" />
            <div
              className="ts-svg"
              data-animate="ts-zoomInShort"
              data-bg-image="assets/svg/organic-shape-01.svg"
            />
          </figure>
          <h4>{title}</h4>
          <p>{description}</p>
        </figure>
      </div>
    )
  }
}

export default Benefit
