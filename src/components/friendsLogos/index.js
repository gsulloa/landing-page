import React, { Component } from "react"

class FriendLogos extends Component {
  render = () => {
    return (
      <section id="partners" className="ts-block pb-3" data-bg-color="#f6f6f6" data-mask-top-nw-color="#fff">
        <div className="container">
          <h3>Colaboración de:</h3>
          <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners ">
            <a href="#">
              <img src="assets/img/ing-uc.png" alt=""/>
            </a>
            <a href="#">
              <img src="assets/img/med-uc.png" alt=""/>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default FriendLogos
