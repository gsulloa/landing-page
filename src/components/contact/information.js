import React, { Component } from "react"

class Information extends Component {
  render = () => {
    const { address, addressExtra, email, phone, skype } = this.props
    return ([
      <h3 key="title">Contáctanos</h3>,
      <address key="information">
        <figure>  
          {address}
          <br/>
          {addressExtra}
        </figure>
        <br/>
        <figure>
          <div className="font-weight-bold">Email:</div>
          <a href="#">{email}</a>
        </figure>
        <figure>
          <div className="font-weight-bold">Phone:</div>
          {phone}
        </figure>
        {skype ? (
          [<div className="font-weight-bold">Skype:</div>,
          {skype}]
        ) :(
          null
        )}
      </address>
    ])
  }
}

export default Information