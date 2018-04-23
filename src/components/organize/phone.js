import React, { Component } from "react"

class Phone extends Component {
  render = () => {
    return (
      <div className="col-md-4 my-5 d-flex justify-content-center align-items-center">
        <div className="image position-relative">
          <img
            src="assets/img/img-phone.png"
            className="mw-100"
            alt=""
            data-animate="ts-zoomInShort"
            data-delay=".1s"
          />
        </div>
      </div>
    )
  }
}

export default Phone
