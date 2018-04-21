import React, { Component } from "react"

import Benefit from "./benefit"

class Benefits extends Component {
  render = () => {
    return (
      <section id="what-youll-get" className="ts-block text-center pt-4">
        <div className="container">
            <div className="ts-title">
              <h2>¿Qué entregamos?</h2>
            </div>
            <div className="row">
              <Benefit
                title="Atlases con alto contenido digital"
                description="Curabitur tellus enim, aliquet et porttitor id, accumsan at nulla. Praesent vestibulum"
                icon="assets/img/icon-target.png"
              />
              <Benefit
                title="Modelos 3D de alta fidelidad"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
                icon="assets/img/icon-chart.png"
              />
              <Benefit
                title="Visualización del contenido con AR"
                description="In non turpis convallis nunc fermentum porttitor sed quis sapien. Etiam et neque"
                icon="assets/img/icon-first.png"
              />
            </div>
        </div>
    </section>
    )
  }
}

export default Benefits
