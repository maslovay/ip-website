
import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import WorkProcess from "./WorkProcess";
import ReutovCase from "../../../components/Shared/ReutovCase"
import WasteTrackingTechnologies from "./WasteTrackingTechnologies";
import CustomerAdvantages from "./CustomerAdvantages";
import PersonAdvantages from "../../../components/Shared/PersonAdvantages"
import img from "../../../assets/images/waste_tracking_banner.png";

import ReactGA from 'react-ga';
import i18next from 'i18next';

ReactGA.initialize('G-PSG8RPDW3G');
ReactGA.pageview(window.location.pathname + window.location.search);
document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.landscaping');

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

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
        <section
          className="bg-half d-table w-100"
          style={{ background: `url(${img})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level title-heading">
                  <h1 className="text-white title-dark">{i18next.t('wastetracking.header')}</h1>
                  <p className="text-white-50 para-desc mb-0 mx-auto">
                    {i18next.t('wastetracking.subheader')}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <WorkProcess />
        <br/>
        <br/>
        <WasteTrackingTechnologies />
        <PersonAdvantages />
        <CustomerAdvantages />
        <ReutovCase />
        {/* <br/>
        <br/>
        <AppOneFeature0 />
        <AppOneFeature1 />
        <AppOneFeature2 /> */}
      </React.Fragment>
    );
  }
}

export default Index;
