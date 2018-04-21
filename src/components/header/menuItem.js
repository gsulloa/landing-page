import React, { Component } from "react"
import scrollToComponent from "react-scroll-to-component"

class MenuItem extends Component {
  handleClick = e => {
    e.preventDefault()
    scrollToComponent(this.props.component)
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