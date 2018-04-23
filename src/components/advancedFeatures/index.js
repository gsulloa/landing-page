import React, { Component } from "react"
import PropTypes from "prop-types"

import Feature from "./feature"

class AdvancedFeatures extends Component {
  static propTypes = {
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        elements: PropTypes.arrayOf(PropTypes.string),
        photo: PropTypes.string,
        i: PropTypes.number,
      })
    ),
  }
  static defaultProps = {
    features: [],
  }
  render = () => {
    return this.props.features.map((e, i) => <Feature key={i} i={i} {...e} />)
  }
}

export default AdvancedFeatures
