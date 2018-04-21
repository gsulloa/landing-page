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
import Suscribe from "./components/suscribe";
import Organize from "./components/organize";
import OurTeam from "./components/ourTeam"
import Contact from "./components/contact";

class App extends Component {
  constructor(props) {
    super(props)
    this.container = createRef()
    imagesLoaded(this.container, {}, this.loadingDone)
  }
  state = {
    loading: true,
  }
  loadingDone = () => {
    this.setState(state => ({
      loading: false
    }))
  }
  render() {
    return (
      <div
        ref={this.container}
        className={`has-loading-screen ${this.state.loading ? "" : "loading-done"}`}>
        <div className="ts-page-wrapper" id="page-top">
          <Header />
          <main id="ts-content">
            <Benefits />
            <FriendLogos />
            <Growth
              left={{ title: "1,200+", description: "Usuarios" }}
              center={{ title: "10+", description: "Organizaciones" }}
              right={{ title: "200+", description: "Atlases" }}
              />
            <AdvancedFeatures />
            <Pricing />
            <Buy />
            <OurClients />
            <Suscribe />
            <Organize />
            <img className="ts-hr-skewed" src="assets/img/hr-skewed.png" />
            <OurTeam />
          </main>
          <footer id="ts-footer">
            <Contact />
            <div className="text-center text-white pb-5" data-bg-color="#000">
              <small>© 2018 MedicineHub, All Rights Reserved</small>
            </div>
          </footer>
      </div>
    </div>
    );
  }
}

export default App;
