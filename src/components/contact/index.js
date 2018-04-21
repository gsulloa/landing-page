import React, { Component } from "react"
import Information from "./information";
import Form from "./form";

class Contact extends Component {
  render = () => {
    return (
      <section id="contact" className="ts-block ts-background-is-dark ts-separate-bg-element" data-bg-image="assets/img/bg-desk.jpg" data-bg-image-opacity=".1" data-bg-color="#1f1f1f" data-mask-bottom-wn-color="#000">
      <div className="container">
          <div className="row">
              <div className="col-md-4">
                <Information
                  address="2590 Rocky Road"
                  addressExtra="Philadelphia, PA 19108"
                  email="office@example.com"
                  phone="+1 215-606-0391"
                  skype="startups.agency"
                />
              </div>
              <div className="col-md-8">
                <Form />
              </div>
          </div>
      </div>
  </section>
    )
  }
}

export default Contact