import React, { Component } from "react";
import SmartGlassesDescription from "../../components/SharedElements/SmartGlassesDescription";
import SmartGlassesGallery from "../../components/SharedElements/SmartGlassesGallery";

import ReactGA from 'react-ga';
import i18next from 'i18next';
ReactGA.initialize('G-MFNB4616NN');
ReactGA.pageview(window.location.pathname + window.location.search);
document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.glasses');

class Index extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
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
        {/* <Section />
        <SmartGlassesFeature /> */}
        <SmartGlassesDescription />
        <SmartGlassesGallery />
      </React.Fragment>
    );
  }
}

export default Index;
