import React, { Component } from "react";
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import classnames from "classnames";
import SectionTitle from "../../../components/Shared/SectionTitle";

import "flatpickr/dist/themes/material_blue.css";

import ReactGA from 'react-ga';
import i18next from 'i18next';
document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.cleaning');
ReactGA.initialize('G-MFNB4616NN');
ReactGA.pageview(window.location.pathname + window.location.search);

class Cleaning extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state ={
      activeTab: "1",
    }
  }

  componentDidMount() {
    AOS.refresh();
    document.getElementById("top-menu").classList.add("nav-light");
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
          <Container className="mt-100 mt-60">
            <SectionTitle
              title="Pricing #2"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />
            <Row className="align-items-center">
              <Col xs="12" className="mt-4 pt-2">
                <div className="text-center">
                  <Nav
                    pills
                    className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "px-3",
                          "rounded-pill",
                          "monthly"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>{" "}
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "px-3",
                          "rounded-pill",
                          "yearly"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly{" "}
                        <Badge className="rounded-pill bg-success">
                          15% Off{" "}
                        </Badge>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default Cleaning;
