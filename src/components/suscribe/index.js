import React, { Component } from "react"
import PropTypes from "prop-types"

class Suscribe extends Component {
  static propTypes = {
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.shape({
      title: PropTypes.string,
      placeholder: PropTypes.string,
    }),
    description: PropTypes.string,
    submit: PropTypes.string,
  }
  render = () => {
    const { backgroundPhoto, title, email, description, submit } = this.props
    return (
      <section
        id="subscribe"
        className="ts-block ts-background-is-dark ts-separate-bg-element"
        data-bg-image={backgroundPhoto}
        data-bg-image-opacity=".1"
        data-bg-color="#5f8d87"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#fff"
        data-mask-bottom-wn-color="#fff"
      >
        <div className="container">
          <h3>{title}</h3>
          <form
            className="ts-form ts-form-email ts-labels-inside-input"
            data-php-path="assets/php/email.php"
          >
            <div className="row">
              <div className="col-md-10">
                <div className="form-group mb-0">
                  <label htmlFor="email-subscribe">{email.title}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-subscribe"
                    aria-describedby="subscribe"
                    name="email"
                    placeholder={email.placeholder}
                    required
                  />
                  <small className="form-text mt-2 ts-opacity__50">
                    {description}
                  </small>
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-dark w-100">
                  {submit}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Suscribe
