import React, { Component } from "react"
import PropTypes from "prop-types"
import Member from "./member"

class OurTeam extends Component {
  static propTypes = {
    title: PropTypes.string,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        occupation: PropTypes.string,
        photo: PropTypes.string,
      })
    ),
  }
  render = () => {
    const { title, members } = this.props
    return (
      <section id="our-team" className="ts-block text-center">
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
          </div>
          <div className="row">
            {members.map((member, i) => <Member key={i} {...member} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default OurTeam
