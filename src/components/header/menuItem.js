import React, { Component } from "react"
import PropTypes from "prop-types"
import scrollToComponent from "react-scroll-to-component"

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string,
    component: PropTypes.object,
  }
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
