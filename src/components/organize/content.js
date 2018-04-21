import React, { Component } from "react"

class Content extends Component {
  
  render = () => {
    const { photo, title, description, rightPhoto } = this.props
    return (
      <figure className={`${rightPhoto ? "text-right" : ""} ts-xs-text-center`} data-animate="ts-fadeInUp">
        <figure className="icon">
          <img src={photo} className="" alt=""/>
        </figure>
        <h4 className="mb-2">{title}</h4>
        <p>{description}</p>
      </figure>
    )
  }
}

export default Content
