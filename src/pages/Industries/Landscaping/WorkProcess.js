import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import i18next from 'i18next';

export default class WorkProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <br/><br/>
                <h4 className="title mb-4">{i18next.t('wastetracking.title')}</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  {i18next.t('wastetracking.subtitle')}
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-mobile-android d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">{i18next.t('wastetracking.item1title')}</h5>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-trash d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                <h5 className="text-dark">{i18next.t('wastetracking.item2title')}</h5>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil  uil-truck d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                <h5 className="text-dark">{i18next.t('wastetracking.item3title')}</h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
