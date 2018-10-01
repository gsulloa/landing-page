import React, { Component, createRef } from "react"
import imagesLoaded from "imagesloaded"

import Header from "./components/header"
import Benefits from "./components/benefits"
import FriendLogos from "./components/friendsLogos"
import Growth from "./components/growth"
import AdvancedFeatures from "./components/advancedFeatures"
import Pricing from "./components/pricing"
import Buy from "./components/buy"
import Clients from "./components/clients"
import Suscribe from "./components/suscribe"
import Organize from "./components/organize"
import OurTeam from "./components/ourTeam"
import Contact from "./components/contact"

import contentJSON from "./content"

class App extends Component {
  constructor(props) {
    super(props)
    this.container = createRef()
    imagesLoaded(this.container, {}, this.loadingDone)
    this.Home = createRef()
    this.AdvancedFeatures = createRef()
    this.Pricing = createRef()
    this.OurClients = createRef()
    this.OurTeam = createRef()
    this.Contact = createRef()
  }
  state = {
    loading: true,
  }
  loadingDone = () => {
    this.setState(() => ({
      loading: false,
    }))
  }
  getRefs = () => {
    return {
      home: this.Home,
      advancedFeatures: this.AdvancedFeatures,
      pricing: this.Pricing,
      ourClients: this.OurClients,
      ourTeam: this.OurTeam,
      contact: this.Contact,
    }
  }
  render() {
    const content = contentJSON[0]
    return (
      <div
        ref={this.container}
        className={`has-loading-screen ${
          this.state.loading ? "" : "loading-done"
        }`}
      >
        <div className="ts-page-wrapper" id="page-top">
          <Header
            navRefs={this.getRefs()}
            ref={this.Home}
            {...content.header}
          />
          <main id="ts-content">
            <Benefits {...content.benefits} />
            <FriendLogos {...content.friendsLogos} />

            <Clients {...content.clients} />
            <AdvancedFeatures
              ref={this.AdvancedFeatures}
              {...content.advancedFeatures}
            />
            <Pricing ref={this.Pricing} {...content.pricing} />
            <OurTeam ref={this.OurTeam} {...content.ourTeam} />
          </main>
          <footer id="ts-footer">
            <Contact ref={this.Contact} {...content.contact} />
            <div className="text-center text-white pb-5" data-bg-color="#000">
              <small>© 2018 MedicineHub, All Rights Reserved</small>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
