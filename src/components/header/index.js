import React, { Component } from "react"

import NavBar from "./navbar"

class Header extends Component {
  render = () => {
    return (
      <header id="ts-hero" className="ts-full-screen ts-separate-bg-element" data-mask-bottom-wn-color="#fff" data-bg-image="assets/img/bg.jpg" data-bg-color="#737373" data-bg-image-opacity=".8" data-bg-parallax="scroll" data-bg-parallax-speed="3">
        <NavBar />
        
        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h3 className="ts-opacity__50">We Are Introducing</h3>
              <h1>Startup Landing Page Pack</h1>
            </div>
          </div>
          <a href="#what-youll-get" className="btn btn-primary ts-scroll">Learn More</a>
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
