import React, { Component, createRef } from "react"

import NavBar from "./navbar"

class Header extends Component {
  constructor(props) {
    super(props)
    this.header = createRef()
  }
  state = {
    windowHeight: 0
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
      windowHeight: window.innerHeight + 100,
    }))
  }
  render = () => {
    return (
      <header
        ref={this.header}
        style={{ height: `${this.state.windowHeight}px` }}
        id="ts-hero"
        className="ts-separate-bg-element"
        data-mask-bottom-wn-color="#fff"
        data-bg-image="assets/img/bg.jpg"
        data-bg-color="#737373"
        data-bg-image-opacity=".8"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
      >
        <NavBar navRefs={this.props.navRefs}/>
        
        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h1>MedicineHub</h1>
              <h3 className="ts-opacity__50">El repositorio de contenido digital de medicina</h3>
            </div>
          </div>
          <a href="#what-youll-get" className="btn btn-primary ts-scroll">Conoce más</a>
          <a href="https://vimeo.com/63502573" className="btn btn-outline-light video-popup">
            <i className="fa fa-play mr-2"></i>
            Video
          </a>
        </div>
      </header>
    )
  }
}

export default Header
