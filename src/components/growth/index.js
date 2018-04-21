import React, { Component } from "react"

class Growth extends Component {
  render = () => {
    const { left, center, right } = this.props
    return (
      <section id="numbers" className="ts-block ts-background-is-dark ts-separate-bg-element" data-bg-image="assets/img/bg-table.jpg" data-bg-image-opacity=".5" data-bg-color="#2d2d2d" data-bg-parallax="scroll" data-bg-parallax-speed="1" data-mask-top-nw-color="#f6f6f6" data-mask-bottom-wn-color="#fff">
        <div className="container">
            <div className="ts-promo-numbers">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="ts-promo-number text-center">
                            <h2 data-animate="ts-zoomIn">{left.title}</h2>
                            <h3 className="mb-0 ts-opacity__50">{left.description}</h3>
                            <span className="ts-promo-number-divider"></span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="ts-promo-number text-center">
                            <h2 data-animate="ts-zoomIn" data-delay="0.2s">{center.title}</h2>
                            <h3 className="mb-0 ts-opacity__50">{center.description}</h3>
                            <span className="ts-promo-number-divider"></span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="ts-promo-number text-center">
                            <h2 data-animate="ts-zoomIn" data-delay="0.2s">{right.title}</h2>
                            <h3 className="mb-0 ts-opacity__50">{right.description}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Growth