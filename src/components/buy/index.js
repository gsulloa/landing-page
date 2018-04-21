import React, { Component } from "react"

class Buy extends Component {
  render = () => {
    return (
      <section id="buy-now" className="ts-block text-center pt-4" data-bg-color="#eaeaea" data-mask-bottom-wn-color="#fff">
        <div className="container">
          <div className="ts-title">
            <h2>Buy The StartUps Now!</h2>
            <h5>Curabitur tellus enim, aliquet et porttitor id suspendisse tempor turpis mattis </h5>
          </div>
          <a href="#" className="btn btn-primary">Buy Now!</a>
        </div>
      </section>
    )
  }
}

export default Buy