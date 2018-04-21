import React, { Component } from "react"
import scrollToComponent from "react-scroll-to-component"

import MenuItem from "./menuItem"

class NavBar extends Component {
  render = () => {
    const { navRefs } = this.props
    console.log(navRefs)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ts-separate-bg-element" data-bg-color="#1d1d1d">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="assets/img/logo-w.png" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <MenuItem onClick={() => scrollToComponent(navRefs.home.current)} className="active" href="#page-top">Home <span className="sr-only">(current)</span></MenuItem>
              <MenuItem onClick={() => scrollToComponent(navRefs.advancedFeatures.current)} href="#advanced-features">Features</MenuItem>
              <MenuItem onClick={() => scrollToComponent(navRefs.pricing.current)} href="#pricing">Pricing</MenuItem>
              <MenuItem onClick={() => scrollToComponent(navRefs.ourClients.current)} href="#our-clients">Our Clients</MenuItem>
              <MenuItem onClick={() => scrollToComponent(navRefs.ourTeam.current)} href="#our-team">Team</MenuItem>
              <MenuItem onClick={() => scrollToComponent(navRefs.contact.current)} href="#form-contact">Contact</MenuItem>
              <a className="btn btn-outline-light btn-sm m-1 px-3 ts-width__auto" href="#">
                <i className="fas fa-sign-in-alt ts-opacity__80 pr-2"></i>
                Log In
              </a>
              <a className="btn btn-primary btn-sm m-1 px-3 ts-width__auto" href="#">Register</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar