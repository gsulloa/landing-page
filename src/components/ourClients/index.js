import React, { Component } from "react"

import Testimony from "./testimony"

class ourClients extends Component {
  render = () => {
    return (
      <section id="our-clients" className="ts-block text-center py-4">
        <div className="container">
          <div className="ts-title">
            <h2>Our Clients</h2>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div
                className="owl-carousel ts-carousel-blockquote"
                data-owl-dots="1"
                data-animate="ts-zoomInShort"
              >
                <Testimony
                  text="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
                  name="Jane Doe"
                  occupation="CEO at MarketsGuru"
                  photo="assets/img/person-05.jpg"
                />
                <Testimony
                  text="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
                  name="Jane Doe"
                  occupation="CEO at MarketsGuru"
                  photo="assets/img/person-05.jpg"
                />
                <Testimony
                  text="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
                  name="Jane Doe"
                  occupation="CEO at MarketsGuru"
                  photo="assets/img/person-05.jpg"
                />
                <Testimony
                  text="Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
                  name="Jane Doe"
                  occupation="CEO at MarketsGuru"
                  photo="assets/img/person-05.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ourClients
