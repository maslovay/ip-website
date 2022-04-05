import React, { Component } from "react";


import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";

import Trial2 from "../../../components/SharedElements/Trial2";
import TimeTrackingHowItWork from "../../../components/SharedElements/TimeTrackingHowItWork"

import "flatpickr/dist/themes/material_blue.css";

import Section from "./Section";

import ReactGA from 'react-ga';
import i18next from 'i18next';
document.title = i18next.t('company.pagetitle');
ReactGA.initialize('G-MFNB4616NN');
document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.timeTracking');

class TimeTracking extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  componentDidMount() {
    AOS.refresh();
    document.getElementById("top-menu").classList.add("nav-dark");
    document.body.classList = "";
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
          <Section />
          <TimeTrackingHowItWork />
          <Trial2/>
      </React.Fragment>
    );
  }
}

export default TimeTracking;
