import React, { Component } from "react"

import Feature from "./feature"

class AdvancedFeatures extends Component {
  render = () => {
    return this.props.features.map((e, i) => <Feature key={i} i={i} {...e} />)
  }
}

export default AdvancedFeatures
