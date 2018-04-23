import React, { Component } from "react"
import PropTypes from "prop-types"

class Buy extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
  }
  render = () => {
    const { title, description, button } = this.props
    return (
      <section
        id="buy-now"
        className="ts-block text-center pt-4"
        data-bg-color="#eaeaea"
        data-mask-bottom-wn-color="#fff"
      >
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
            <h5> {description}</h5>
          </div>
          <a href="#" className="btn btn-primary">
            {button}
          </a>
        </div>
      </section>
    )
  }
}

export default Buy
