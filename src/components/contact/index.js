import React, { Component } from "react"
import PropTypes from "prop-types"

import Information from "./information"
import Form from "./form"

class Contact extends Component {
  static propTypes = {
    backgroundPhoto: PropTypes.string,
    information: PropTypes.shape({
      address: PropTypes.string,
      addressExtra: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      skype: PropTypes.string,
    }),
    form: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.shape({
        title: PropTypes.string,
        placeholder: PropTypes.string,
      }),
      email: PropTypes.shape({
        title: PropTypes.string,
        placeholder: PropTypes.string,
      }),
      message: PropTypes.shape({
        title: PropTypes.string,
        placeholder: PropTypes.string,
      }),
      submit: PropTypes.string,
    }),
  }
  render = () => {
    const { backgroundPhoto, information, form } = this.props
    return (
      <section
        id="contact"
        className="ts-block ts-background-is-dark ts-separate-bg-element"
        data-bg-image={backgroundPhoto}
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
