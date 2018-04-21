import React, { Component } from "react"

import Feature from "./feature"

class AdvancedFeatures extends Component {
  render = () => {
    const data = [
      {
        title: "Que es MedicineHub",
        description: "Utilizamos las últimas tecnologías para poder entregar los mejores recursos anatómicos en 3D y en Realidad Virtual para apoyar el aprendizaje de anatomía.",
        elements: [
          "Presente en dispositivos moviles y Web",
          "Contenido autoexplicativo para mejorar la experiencia de aprendizaje",
        ],
        photo: "assets/img/image-device-01.png",
      },
      {
        title: "Modelos 3D con Realidad Aumentada",
        description: "Todo los modelos anatómicos presentes, cuentan con visualización en Realidad Aumentada, y presentan toda la información relevante al respecto",
        elements: [
          "Usa tu smartphone para poder acceder a las mejores visualizaciones",
          "Maximiza tu experiencia de aprendizaje",
        ],
        photo: "assets/img/ar.jpg",
      }
    ]
    return data.map((e, i) => <Feature key={i} i={i} {...e} />)
  }
}
 () => [<h2>Software de apoyo a la enseñanza de Anatomía líder en sudamérica</h2>,
 <h4 className="ts-opacity__80">
 Accede al mayor repositorio de recursos anatómicos en 3D y en Realidad Virtual de sudamérica. Experimenta el aprendizaje de Anatomía como nunca antes.
 </h4>]

export default AdvancedFeatures