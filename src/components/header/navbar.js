import React, { Component } from "react"

class NavBar extends Component {
  render = () => {
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
              <a className="nav-item nav-link active ts-scroll" href="#page-top">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link ts-scroll" href="#advanced-features">Features</a>
              <a className="nav-item nav-link ts-scroll" href="#pricing">Pricing</a>
              <a className="nav-item nav-link ts-scroll" href="#our-clients">Our Clients</a>
              <a className="nav-item nav-link ts-scroll" href="#our-team">Team</a>
              <a className="nav-item nav-link ts-scroll" href="#form-contact">Contact</a>
              <a className="ts-scroll btn btn-outline-light btn-sm m-1 px-3 ts-width__auto" href="#">
                <i className="fas fa-sign-in-alt ts-opacity__80 pr-2"></i>
                Log In
              </a>
              <a className="ts-scroll btn btn-primary btn-sm m-1 px-3 ts-width__auto" href="#">Register</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar