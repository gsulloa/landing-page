import React, { Component } from "react"
import Member from "./member";

class OurTeam extends Component {
  render = () => {
    return (
      <section id="our-team" className="ts-block text-center">
        <div className="container">
            <div className="ts-title">
                <h2>Our Team</h2>
            </div>
            <div className="row">
              <Member
                name="Jane Dow"
                occupation="Company CEO"
                photo="assets/img/person-01.jpg"
              />
              <Member
                name="Peter Daniels"
                occupation="Marketing"
                photo="assets/img/person-02.jpg"
              />
              <Member
                name="Suzane Smith"
                occupation="Support Team"
                photo="assets/img/person-03.jpg"
              />
            </div>
        </div>
    </section>
    )
  }
}

export default OurTeam