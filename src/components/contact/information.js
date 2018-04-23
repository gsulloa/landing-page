import React, { Component } from "react"
import PropTypes from "prop-types"

class Information extends Component {
  static propTypes = {
    address: PropTypes.string,
    addressExtra: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    skype: PropTypes.string,
  }
  render = () => {
    const { address, addressExtra, email, phone, skype } = this.props
    return [
      <h3 key="title">Contact Us</h3>,
      <address key="information">
        <figure>
          {address}
          <br />
          {addressExtra}
        </figure>
        <br />
        <figure>
          <div className="font-weight-bold">Email:</div>
          <a href="#">{email}</a>
        </figure>
        <figure>
          <div className="font-weight-bold">Phone:</div>
          {phone}
        </figure>
        <div className="font-weight-bold">Skype:</div>
        {skype}
      </address>,
    ]
  }
}

export default Information
