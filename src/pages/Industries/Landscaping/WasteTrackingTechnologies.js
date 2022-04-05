import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import i18next from 'i18next';

export default class WasteTrackingTechnologies extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
        <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <br/><br/>
                <h4 className="title mb-4">{i18next.t('wastetracking.title4')}</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  {i18next.t('wastetracking.subtitle4')}
                </p>
              </div>
            </Col>
          </Row>
          <div className="row">
            <Col md={4} xs={12}>
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-qrcode-scan h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>{i18next.t('wastetracking.feature41')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature41description')}
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-tag h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                <h5>{i18next.t('wastetracking.feature42')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature42description')}
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-trash h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>{i18next.t('wastetracking.feature43')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature43description')}
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
