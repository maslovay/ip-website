
import React, { Component } from "react";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";
import FundomatCase from "./FundomatCase";
import FundomatBenefits from "./FundomatBenefits";
import Contact from "../../../components/SharedElements/Contact";

import MobileAppTrial from '../../../components/Shared/MobileAppTrial'
import EcoinTrial from '../../../components/Shared/EcoinTrial'
import Header from "./Header";

import i18next from 'i18next';
import ReactGA from 'react-ga';

document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.constructing');
ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);

class CVReverseVendingMachine  extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section>  
          <br/>
          <EcoinTrial />
          <FundomatBenefits />
          <br/>
          <MobileAppTrial />
          <FundomatCase />
          <Contact />
          <br/>
        </section>
      </React.Fragment>
    );
  }
}

export default CVReverseVendingMachine;
