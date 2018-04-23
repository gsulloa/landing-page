import React, { Component } from "react"
import PropTypes from "prop-types"

import Testimony from "./testimony"

class ourClients extends Component {
  static propTypes = {
    title: PropTypes.string,
    testimonies: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string,
        text: PropTypes.string,
        name: PropTypes.string,
        occupation: PropTypes.string,
      })
    ),
  }
  render = () => {
    const { title, testimonies } = this.props
    return (
      <section id="our-clients" className="ts-block text-center py-4">
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div
                className="owl-carousel ts-carousel-blockquote"
                data-owl-dots="1"
                data-animate="ts-zoomInShort"
              >
                {testimonies.map((testimony, i) => (
                  <Testimony key={i} {...testimony} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ourClients
