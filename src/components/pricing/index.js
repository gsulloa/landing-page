import React, { Component } from "react"

import PricingCard from "./pricingCard"

class Pricing extends Component {
  render = () => {
    return (
      <section
        id="pricing"
        className="ts-block ts-separate-bg-element"
        data-bg-image="assets/img/bg-hand-mobile.jpg"
        data-bg-color="#000"
        data-bg-image-opacity=".5"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#fff"
        data-mask-bottom-wn-color="#eaeaea"
      >
        <div className="container">
          <div className="ts-title text-center text-white">
            <h2>Affordable Prices</h2>
          </div>
          <div className="row no-gutters ts-cards-same-height">
            <PricingCard
              title="Basic"
              price="Free"
              period="forever"
              features={["3 Sport Activity", "60 Days Track Record"]}
              restrictions={["Cloud Backup", "Ads Removed"]}
            />
            <PricingCard
              important
              title="Premium"
              price="$9,99"
              period="per month"
              features={[
                "3 Sport Activity",
                "60 Days Track Record",
                "Cloud Backup",
                "Ads Removed",
              ]}
            />
            <PricingCard
              title="Premium"
              price="$19,99"
              period="per month"
              features={[
                "3 Sport Activity",
                "60 Days Track Record",
                "Cloud Backup",
                "Ads Removed",
              ]}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing
