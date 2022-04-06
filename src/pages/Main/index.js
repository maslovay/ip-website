import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import img1 from "../../assets/images/app/main_screen.png";
import img2 from "../../assets/images/app/devices2.png";

import MainDescription from "../../components/SharedElements/MainDescription";
import MainIndustries from '../../components/SharedElements/MainIndustries'
import MainFeatures from '../../components/SharedElements/MainFeatures'
import Trial2 from '../../components/SharedElements/Trial2'

import CustomHelmet from "../../components/Service/CustomHelmet";
import i18next from 'i18next';
import ReactGA from 'react-ga';
ReactGA.initialize('G-PSG8RPDW3G');


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
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
        <CustomHelmet name="main" />
        <section
          className="bg-half-170 d-table w-100 overflow-hidden"
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg="7" md="7">
                <div className="title-heading mt-4">
                  <h1 className="heading mb-3">
                    {i18next.t('home.title1')}
                  </h1>
                  <p className="para-desc text-muted">
                    {i18next.t('home.description1')}
                  </p>
                </div>
              </Col>

              <Col lg="5" md="5" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="classic-app-image position-relative">
                  <div className="bg-app-shape position-relative">
                    <img
                      src={img1}
                      className="img-fluid mover mx-auto d-block "
                      alt=""
                    />
                  </div>
                  <div className="app-images d-none d-md-block">
                    <img src={img2} className="img-fluid" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          </section>
          <MainDescription />
          <MainFeatures />
          <MainIndustries />
          <Trial2 />
        
      </React.Fragment>
    );
  }
}

export default Main;
