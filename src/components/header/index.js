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
        data-bg-image-opacity=".5"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="1"
      >
        <NavBar navRefs={this.props.navRefs}/>
        
        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-8">
              <h2>Software de apoyo a la enseñanza de Anatomía líder en sudamérica</h2>
              <h4 className="ts-opacity__80">
              Accede al mayor repositorio de recursos anatómicos en 3D y en Realidad Virtual de sudamérica. Experimenta el aprendizaje de Anatomía como nunca antes.
              </h4>
            </div>
          </div>
          <a href="#what-youll-get" className="btn btn-primary ts-scroll">Conoce más</a>
          <a href="https://www.youtube.com/watch?v=qpxzRZYd5d8" className="btn btn-outline-light video-popup">
            <i className="fa fa-play mr-2"></i>
            Video
          </a>
        </div>
      </header>
    )
  }
}

export default Header
