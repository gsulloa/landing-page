import React, { Component, createRef } from "react"
import imagesLoaded from "imagesloaded"

import Header from "./components/header"
import Benefits from "./components/benefits"
import FriendLogos from "./components/friendsLogos"
import Growth from "./components/growth"
import AdvancedFeatures from "./components/advancedFeatures"
import Pricing from "./components/pricing"
import Buy from "./components/buy"
import OurClients from "./components/ourClients"
import Suscribe from "./components/suscribe"
import Organize from "./components/organize"
import OurTeam from "./components/ourTeam"
import Contact from "./components/contact"

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
    return (
      <div
        ref={this.container}
        className={`has-loading-screen ${
          this.state.loading ? "" : "loading-done"
        }`}
      >
        <div className="ts-page-wrapper" id="page-top">
          <Header navRefs={this.getRefs()} ref={this.Home} />
          <main id="ts-content">
            <Benefits />
            <FriendLogos />
            <Growth
              left={{ title: "1,200+", description: "Clients" }}
              center={{ title: "$3,15 M", description: "Invested" }}
              right={{ title: "14%", description: "Growth p.a." }}
            />
            <AdvancedFeatures ref={this.AdvancedFeatures} />
            <Pricing ref={this.Pricing} />
            <Buy />
            <OurClients ref={this.OurClients} />
            <Suscribe />
            <Organize />
            <img className="ts-hr-skewed" src="assets/img/hr-skewed.png" />
            <OurTeam ref={this.OurTeam} />
          </main>
          <footer id="ts-footer">
            <Contact ref={this.Contact} />
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
