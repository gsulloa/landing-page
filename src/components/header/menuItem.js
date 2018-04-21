import React, { Component } from "react"

class MenuItem extends Component {
  handleClick = e => {
    e.preventDefault()
    this.props.onClick()
  }
  render = () => {
    const { children, className, href } = this.props
    return (
      <a
        className={`nav-item nav-link ts-scroll ${className ? className : ""}`}
        href={href}
        onClick={this.handleClick}
      >
        {children}
      </a>
    )
  }
}

export default MenuItem