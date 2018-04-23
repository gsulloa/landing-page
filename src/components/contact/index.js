import React, { Component } from "react"
import Information from "./information"
import Form from "./form"

class Contact extends Component {
  render = () => {
    const { backgroundPhoto, information, form } = this.props
    return (
      <section
        id="contact"
        className="ts-block ts-background-is-dark ts-separate-bg-element"
        data-bg-image="assets/img/bg-desk.jpg"
        data-bg-image-opacity=".1"
        data-bg-color="#1f1f1f"
        data-mask-bottom-wn-color="#000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Information {...information} />
            </div>
            <div className="col-md-8">
              <Form {...form} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
