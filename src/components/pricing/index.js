import React, { Component } from "react"

import PricingCard from "./pricingCard"

class Pricing extends Component {
  render = () => {
    const { backgroundPhoto, title, options } = this.props
    return (
      <section
        id="pricing"
        className="ts-block ts-separate-bg-element"
        data-bg-image={backgroundPhoto}
        data-bg-color="#000"
        data-bg-image-opacity=".5"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#fff"
        data-mask-bottom-wn-color="#eaeaea"
      >
        <div className="container">
          <div className="ts-title text-center text-white">
            <h2>{title}</h2>
          </div>
          <div className="row no-gutters ts-cards-same-height">
            {options.map((option, i) => <PricingCard key={i} {...option} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing
