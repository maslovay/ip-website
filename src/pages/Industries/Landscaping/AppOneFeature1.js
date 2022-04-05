import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import img2 from "../../assets/images/inpres_sorting.jpg";

export default class AppOneFeature1 extends Component{

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="6" md="5">
              <div className="position-relative">
                <div className="text-center text-md-left">
                  <img src={img2} className="img-fluid shadow rounded-md" alt="" />
                </div>
              </div>
            </Col>
            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">{i18next.t('wastetracking.title2')}</h4>
                <p className="text-muted"> {i18next.t('wastetracking.description2')} </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}