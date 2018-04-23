import React, { Component } from "react"
import PropTypes from "prop-types"

class Growth extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    backgroundPhoto: PropTypes.string,
  }
  render = () => {
    const { data, backgroundPhoto } = this.props
    return (
      <section
        id="numbers"
        className="ts-block ts-background-is-dark ts-separate-bg-element"
        data-bg-image={backgroundPhoto}
        data-bg-image-opacity=".5"
        data-bg-color="#2d2d2d"
        data-bg-parallax="scroll"
        data-bg-parallax-speed="3"
        data-mask-top-nw-color="#f6f6f6"
        data-mask-bottom-wn-color="#fff"
      >
        <div className="container">
          <div className="ts-promo-numbers">
            <div className="row">
              {data.map((e, i) => (
                <div key={i} className="col-sm-4">
                  <div className="ts-promo-number text-center">
                    <h2 data-animate="ts-zoomIn">{e.title}</h2>
                    <h3 className="mb-0 ts-opacity__50">{e.description}</h3>
                    <span className="ts-promo-number-divider" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Growth
