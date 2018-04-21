import React, { Component } from "react"

import PricingCard from "./pricingCard"

class Pricing extends Component {
  render = () => {
    return (
      <section
        id="pricing"
        className="ts-block ts-separate-bg-element"
        data-bg-image="assets/img/bg.jpg"
        data-bg-color="#000"
        data-bg-image-opacity=".5"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#fff"
        data-mask-bottom-wn-color="#1f1f1f"
      >
              <div className="container">
                  <div className="ts-title text-center text-white">
                      <h2>Precios Accesibles</h2>
                  </div>
                  <div className="row no-gutters ts-cards-same-height">
                    <PricingCard
                      title="Brazo"
                      price="$1,00"
                      photo="assets/img/icon-map.png"
                    />
                    <PricingCard
                      title="Pierna"
                      price="$5,00"
                      photo="assets/img/icon-map.png"
                    />
                    <PricingCard
                      title="Torax"
                      price="$3,00"
                      photo="assets/img/icon-map.png"
                    />
                    <PricingCard
                      title="Antebrazo"
                      price="$1,00"
                      photo="assets/img/icon-map.png"
                    />
                    <PricingCard
                      title="Cuello"
                      price="$10,00"
                      photo="assets/img/icon-map.png"
                    />
                    <PricingCard
                      title="Mano"
                      price="$1,00"
                      photo="assets/img/icon-map.png"
                    />
                  </div>
              </div>
          </section>
    )
  }
}

export default Pricing
