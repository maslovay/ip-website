import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import img from "../../../assets/images/app/main_screen2.png";
import i18next from 'i18next';

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100" id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={7}>
                <div className="title-heading mt-4">
                  <h1 className="heading mb-3">
                    {i18next.t('person.title')}
                  </h1>
                  <p className="para-desc text-muted">
                    {i18next.t('person.description')}
                  </p>
                </div>
              </Col>
              <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-right text-center">
                  <img src={img} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
