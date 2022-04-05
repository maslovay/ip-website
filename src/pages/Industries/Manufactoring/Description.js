import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import i18next from 'i18next';
import img1 from "../../../assets/images/company_1.png";
import img2 from "../../../assets/images/company_2.png";
import { Link } from "react-router-dom";

export default class Description extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img
                src={img1}
                className="img-fluid shadow rounded-md"
                alt=""
              />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ml-lg-5">
                <h4 className="title mb-4">{i18next.t('processor.title1')}</h4>
                <p className="text-muted">
                  {i18next.t('processor.description1')}
                </p>
                <div className="mt-4">
                  <Link to="/waste-tracking" className="mt-3 text-primary">
                      {i18next.t('common.details')} <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6} className="order-1 order-md-2">
              <img src={img2} className="img-fluid shadow rounded-md" alt="" />
            </Col>

            <Col
              lg={6}
              md={6}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
            >
              <div className="section-title mr-lg-5">
                <h4 className="title mb-4">
                  {i18next.t('processor.title2')}
                </h4>
                <p className="text-muted">
                  {i18next.t('processor.description2')}
                </p>
                <div className="mt-4">
                  <Link to="/cv-reverse-vending-machine" className="mt-3 text-primary">
                      {i18next.t('common.details')} <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
       
      </React.Fragment>
    );
  }
}
