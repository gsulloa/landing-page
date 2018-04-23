import React, { Component, createRef } from "react"

import NavBar from "./navbar"

class Header extends Component {
  constructor(props) {
    super(props)
    this.header = createRef()
  }
  state = {
    windowHeight: 0,
  }
  componentWillMount = () => {
    window.addEventListener("resize", this.resizeHeader)
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resizeHeader)
  }
  componentDidMount = () => {
    this.resizeHeader()
  }
  resizeHeader = () => {
    this.setState(state => ({
      windowHeight: window.innerHeight,
    }))
  }
  render = () => {
    const { title, subtitle, learn, video, backgroundPhoto } = this.props
    return (
      <header
        ref={this.header}
        style={{ height: `${this.state.windowHeight}px` }}
        id="ts-hero"
        className="ts-separate-bg-element"
        data-mask-bottom-wn-color="#fff"
        data-bg-image={backgroundPhoto}
        data-bg-color="#737373"
        data-bg-image-opacity=".8"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
      >
        <NavBar navRefs={this.props.navRefs} />

        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h3 className="ts-opacity__50">{title}</h3>
              <h1>{subtitle}</h1>
            </div>
          </div>
          <a href="#what-youll-get" className="btn btn-primary ts-scroll">
            {learn}
          </a>
          <a href={video.href} className="btn btn-outline-light video-popup">
            <i className="fa fa-play mr-2" />
            {video.button}
          </a>
        </div>
      </header>
    )
  }
}

export default Header
