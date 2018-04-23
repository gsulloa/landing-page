import React, { Component } from "react"

class FriendLogos extends Component {
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
          <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners ">
            {logos.map((logo, i) => (
              <a href="#" key={i}>
                <img src={logo} alt="" />
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default FriendLogos
