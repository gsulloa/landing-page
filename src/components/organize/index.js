import React, { Component } from "react"
import PropTypes from "prop-types"

import Content from "./content"
import Phone from "./phone"

class Organize extends Component {
  static propTypes = {
    title: PropTypes.string,
    left: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        rightPhoto: PropTypes.bool,
      })
    ),
    right: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        rightPhoto: PropTypes.bool,
      })
    ),
  }
  render = () => {
    const { title, left, right } = this.props
    return (
      <section id="organize" className="ts-block pt-5">
        <div className="container">
          <div className="ts-title text-center">
            <h2>{title}</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              {left.map((c, i) => <Content key={i} rightPhoto {...c} />)}
            </div>
            <Phone />
            <div className="col-md-4">
              {right.map((c, i) => <Content key={i} {...c} />)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Organize
