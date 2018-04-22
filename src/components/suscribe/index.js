import React, { Component } from "react"

class Suscribe extends Component {
  render = () => {
    return (
      <section
        id="subscribe"
        className="ts-block ts-background-is-dark ts-separate-bg-element"
        data-bg-image="assets/img/bg-girl-book.jpg"
        data-bg-image-opacity=".1"
        data-bg-color="#5f8d87"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#fff"
        data-mask-bottom-wn-color="#fff"
      >
        <div className="container">
          <h3>Subscribe For The Latest News!</h3>
          <form
            className="ts-form ts-form-email ts-labels-inside-input"
            data-php-path="assets/php/email.php"
          >
            <div className="row">
              <div className="col-md-10">
                <div className="form-group mb-0">
                  <label htmlFor="email-subscribe">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-subscribe"
                    aria-describedby="subscribe"
                    name="email"
                    placeholder=""
                    required
                  />
                  <small className="form-text mt-2 ts-opacity__50">
                    *You’ll get only relevant news once a week
                  </small>
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
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
