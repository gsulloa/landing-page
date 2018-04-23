import React, { Component } from "react"

import Benefit from "./benefit"

class Benefits extends Component {
  render = () => {
    const { title, elements } = this.props
    return (
      <section id="what-youll-get" className="ts-block text-center pt-4">
        <div className="container">
          <div className="ts-title">
            <h2>{title}</h2>
          </div>
          <div className="row">
            {elements.map((e, i) => <Benefit key={i} {...e} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Benefits
