import React, { Component } from "react"
import PropTypes from "prop-types"

class Clients extends Component {
  static propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string),
  }
  render = () => {
    const { logos } = this.props
    return (
      <section
        id="clients"
        className="ts-block"
        data-bg-color="#f6f6f6"
        data-mask-bottom-wn-color="#fff"
      >
        <div className="container">
          <h3>Organizaciones que usan nuestros productos:</h3>
          <div className="d-block d-md-flex justify-content-center align-items-center flex-md-wrap flex-md-row text-center ts-partners ">
            {logos.map((logo, i) => (
              <img src={logo} alt="" className="ts-logos" key={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Clients
