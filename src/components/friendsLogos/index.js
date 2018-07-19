import React, { Component } from "react"
import PropTypes from "prop-types"

class FriendLogos extends Component {
  static propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string),
  }
  render = () => {
    const { logos } = this.props
    return (
      <section
        id="partners"
        className="ts-block pb-3"
        data-bg-color="#f6f6f6"
        data-mask-top-nw-color="#fff"
      >
        <div className="container">
          <h3>Colaboración de:</h3>
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

export default FriendLogos
