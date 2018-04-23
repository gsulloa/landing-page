import React, { Component } from "react"
import PropTypes from "prop-types"

class Member extends Component {
  static propTypes = {
    name: PropTypes.string,
    occupation: PropTypes.string,
    photo: PropTypes.string,
  }
  render = () => {
    const { name, occupation, photo } = this.props
    return (
      <div className="col-md-4">
        <div
          className="ts-element d-inline-block mb-4"
          data-animate="ts-fadeInLeft"
        >
          <a
            href="#"
            className="ts-circle__md position-absolute ts-right__0 ts-top__0"
            data-bg-color="#ff6a6a"
          >
            <div className="text-white ts-h2">
              <i className="far fa-envelope" />
            </div>
          </a>
          <div
            className="ts-circle__xxl ts-shadow__md mb-4"
            data-bg-image={photo}
          />
          <h4 className="my-2">{name}</h4>
          <h5 className="ts-opacity__50">{occupation}</h5>
        </div>
      </div>
    )
  }
}

export default Member
