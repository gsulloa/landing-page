import React, { Component } from "react"

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
  componentDidMount = () => {
    if( document.getElementsByClassName("ts-full-screen").length ) {
      document.getElementsByClassName("ts-full-screen")[0].style.height = window.innerHeight + "px";
    }
  }
  render() {
    return (
      <div className="ts-page-wrapper" id="page-top">
      <Header />
      <main id="ts-content">
        <Benefits />
        <FriendLogos />
        <Growth
          left={{ title: "1,200+", description: "Clients" }}
          center={{ title: "$3,15 M", description: "Invested" }}
          right={{ title: "14%", description: "Growth p.a." }}
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
        <div className="map ts-height__600px" id="map" data-mask-top-nw-color="#fff" data-mask-bottom-wn-color="#1f1f1f"></div>
        <Contact />
        <div className="text-center text-white pb-5" data-bg-color="#000">
          <small>© 2018 MedicineHub, All Rights Reserved</small>
        </div>
      </footer>
  </div>
    );
  }
}

export default App;
