import React, { Component } from "react"
import PropTypes from "prop-types"

class Content extends Component {
  static propTypes = {
    photo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rightPhoto: PropTypes.bool,
  }
  render = () => {
    const { photo, title, description, rightPhoto } = this.props
    return (
      <figure
        className={`${rightPhoto ? "text-right" : ""} ts-xs-text-center`}
        data-animate="ts-fadeInUp"
      >
        <figure className="icon">
          <img src={photo} className="" alt="" />
        </figure>
        <h4 className="mb-2">{title}</h4>
        <p>{description}</p>
      </figure>
    )
  }
}

export default Content
