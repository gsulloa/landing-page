import React, { Component } from "react"

import Benefit from "./benefit"

class Benefits extends Component {
  render = () => {
    return (
      <section id="what-youll-get" className="ts-block ts-block-no-padding text-center pt-4">
        <div className="container">
            <div className="ts-title">
              <h2>¿Qué entregamos?</h2>
            </div>
            <div className="row">
              <Benefit
                title="Recursos anatómicos digitales"
                description="Gran variedad de recursos anatómicos, que incluye contenido de aprendizaje en videos, imagenes, modelos 3D y más."
                icon="assets/img/icon-target.png"
              />
              <Benefit
                title="Modelos 3D de alta fidelidad"
                description="Todos nuestros modelos 3D se construyeron con tecnologías de alta presición, y con posibilidad de visualizar con Realidad Virtual"
                icon="assets/img/icon-chart.png"
              />
              <Benefit
                title="Paga sólo lo que usas"
                description="Nuestro modelo de negocios no incluye una mensualidad, solo debes pagar por los contenidos específicos que usas y no por todo nuestro contenido"
                icon="assets/img/icon-first.png"
              />
            </div>
        </div>
    </section>
    )
  }
}

export default Benefits
