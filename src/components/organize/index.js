import React, { Component } from "react"

import Content from "./content"
import Phone from "./phone"

class Organize extends Component {
  render = () => {
    return (
      <section id="organize" className="ts-block ts-block-no-padding pt-5">
        <div className="container">
          <div className="ts-title text-center">
            <h2>Organize Everything!</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <Content
                rightPhoto
                photo="assets/img/icon-target.png"
                title="Monitor Your Activity"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
              <Content
                rightPhoto
                photo="assets/img/icon-target.png"
                title="Analyze Your Results"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
              <Content
                rightPhoto
                photo="assets/img/icon-target.png"
                title="Get Better!"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
            </div>
            <Phone />
            <div className="col-md-4">
              <Content
                photo="assets/img/icon-target.png"
                title="Support Chat"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
              <Content
                photo="assets/img/icon-map.png"
                title="Runs on Any Place"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
              <Content
                photo="assets/img/icon-video.png"
                title="Video Tutorials"
                description="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Organize