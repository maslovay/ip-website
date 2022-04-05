import React, { Component } from "react";
import { Col, Container } from "reactstrap";
import i18next from 'i18next';

export default class TimeTrackingBenefitsRow extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="row">
          <Col xs="12" className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4
                  className="title mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {i18next.t('timetracking.benefitsRow.title')}
                </h4>
                </div>
          </Col>
            <Col md={4} xs={12}>
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-qrcode-scan h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>{i18next.t('timetracking.benefitsRow.benefit1')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature1description')}
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-users-alt h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                <h5>{i18next.t('timetracking.benefitsRow.benefit2')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature2description')}
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-chart-line h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>{i18next.t('timetracking.benefitsRow.benefit2')}</h5>
                  <p className="text-muted mb-0">
                    {i18next.t('wastetracking.feature3description')}
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
