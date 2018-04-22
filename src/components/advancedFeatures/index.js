import React, { Component } from "react"

import Feature from "./feature"

class AdvancedFeatures extends Component {
  render = () => {
    const data = [
      {
        title: "Advanced Features",
        description:
          "Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.",
        elements: [
          "Sed a venenatis mi, vel tempus neque.",
          "Diam in hendrerit facilisis, enim diam cursus augue.",
          "Nullam tellus turpis, molestie ac urna",
        ],
        photo: "assets/img/image-device-01.png",
      },
      {
        title: "Responsive",
        description:
          "Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.",
        elements: [
          "Sed a venenatis mi, vel tempus neque.",
          "Diam in hendrerit facilisis, enim diam cursus augue.",
          "Nullam tellus turpis, molestie ac urna",
        ],
        photo: "assets/img/image-device-02.png",
      },
    ]
    return data.map((e, i) => <Feature key={i} i={i} {...e} />)
  }
}

export default AdvancedFeatures
