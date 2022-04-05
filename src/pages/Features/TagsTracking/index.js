import React, { Component } from "react";
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css"

import { Col, Container,Row } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";

import TagsTrackingHowItWork from "../../../components/SharedElements/TagsTrackingHowItWork"
import TagsTrackingAdmin from "../../../components/SharedElements/TagsTrackingAdmin"
import TagsTrackingUseCases from "../../../components/SharedElements/TagsTrackingUseCases"
import Trial2 from "../../../components/SharedElements/Trial2"
import img from "../../../assets/images/city_banner.png";

import ReactGA from 'react-ga';
import i18next from 'i18next';
ReactGA.initialize('G-MFNB4616NN');
ReactGA.pageview(window.location.pathname + window.location.search);
document.title = i18next.t('pageNames.name') + " - " + i18next.t('pageNames.remoteExpert');

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  componentDidMount() {
    AOS.refresh();
    document.getElementById("top-menu").classList.add("nav-light");

    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);

    var elementsTitle = document.getElementsByName("sectiontitle");
    var elementsDesc = document.getElementsByName("sectiondesc");
    for (var i = 0; i < elementsTitle.length; i++) {
      elementsTitle[i].setAttribute("data-aos", "fade-up");
      elementsTitle[i].setAttribute("data-aos-duration", "1200");
      elementsDesc[i].setAttribute("data-aos", "fade-up");
      elementsDesc[i].setAttribute("data-aos-duration", "1000");
    }

    //set AOS atttributes to slider <Media> tags
    var elements = document.getElementsByName("clientsreview");
    for (var j = 0; j < elements.length; j++) {
      elements[j].setAttribute("data-aos", "fade-up");
      elements[j].setAttribute("data-aos-duration", "1600");
    }
    var footer = document.getElementsByName("footercolumn");
    for (var fcol = 0; fcol < footer.length; fcol++) {
      footer[fcol].setAttribute("data-aos", "fade-up");
      footer[fcol].setAttribute("data-aos-duration", "1400");
    }
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
          className="bg-half-170 d-table w-100"
          style={{ background: `url("${img}") center center` }}

        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={6}>
                <div className="title-heading mt-4">
                  <h2 className="display-5 font-weight-bold text-white title-dark mb-3">
                    {i18next.t('tagsTracking.main.title')}
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          </section>
          <TagsTrackingHowItWork />
          <TagsTrackingAdmin />
          <TagsTrackingUseCases />
          <Trial2 />
      </React.Fragment>
    );
  }
}

export default Index;