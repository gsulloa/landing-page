import React, { Component, createRef } from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    learn: PropTypes.string,
    video: PropTypes.shape({
      href: PropTypes.string,
      button: PropTypes.string,
    }),
    backgroundPhotos: PropTypes.array,
    navRefs: PropTypes.object,
  }
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
    this.setState(() => ({
      windowHeight: window.innerHeight,
    }))
  }
  render = () => {
    const { title, subtitle, learn, video, backgroundPhotos } = this.props
    return (
      <header
        ref={this.header}
        style={{ height: `${this.state.windowHeight}px` }}
        id="ts-hero"
        className="ts-separate-bg-element"
        data-mask-bottom-wn-color="#fff"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="1"
        data-bg-size="cover"
      >
        <NavBar navRefs={this.props.navRefs} />

        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h3>{title}</h3>
              <h4 className="ts-opacity__50">{subtitle}</h4>
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
        <div
          className="ts-background"
          data-bg-color="#737373"
          data-bg-parallax="scroll"
          data-bg-parallax-speed="3"
        >
          <div
            className="owl-carousel ts-hero-slider ts-parallax-element"
            data-owl-loop="1"
            data-owl-fadeout="1"
          >
            {backgroundPhotos.map((backgroundPhoto, i) => (
              <div
                key={i}
                className="ts-background-image ts-opacity__50"
                data-bg-image={backgroundPhoto}
              />
            ))}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
