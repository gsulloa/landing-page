import React, { Component } from "react"
import PropTypes from "prop-types"
import Member from "./member"

class OurTeam extends Component {
  static propTypes = {
    title: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        occupation: PropTypes.string,
        photo: PropTypes.string,
      })
    ),
  }
  render = () => {
    const { title, photo, description } = this.props
    return (
      <section
        id="our-team"
        className="ts-block text-center ts-separate-bg-element"
        data-bg-image={photo}
        data-bg-color="#000"
        data-bg-image-opacity=".7"
        data-mask-top-nw-color="#000"
        data-mask-bottom-wn-color="#eaeaea"
        data-bg-size="contain"
        style={{ height: window.innerHeight }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white",
            height: "100%",
          }}
        >
          <div className="ts-title">
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            <h4>{description}</h4>
          </div>
        </div>
      </section>
    )
  }
}

export default OurTeam
