import React, { Component } from "react"

class Benefit extends Component {
  render = () => {
    const { title, description, icon } = this.props
    return (
      <div className="col-sm-6 col-md-4 col-xl-4">
        <figure data-animate="ts-fadeInUp">
          <figure className="icon mb-5 p-2">
            <img src={icon} alt="" />
            <div className="ts-svg" data-animate="ts-zoomInShort" data-bg-image="assets/svg/organic-shape-01.svg"></div>
          </figure>
          <h4>{title}</h4>
          <p>{description}</p>
        </figure>
      </div>
    )
  }
}

export default Benefit