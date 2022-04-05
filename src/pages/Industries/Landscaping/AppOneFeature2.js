import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import img from "../../assets/images/app/ecoin_pay.jpg";

class AppOneFeature2 extends Component {


  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg="6"
              md={{ size: 7, order: 1 }}
              xs={{ order: 2 }}
              className="mt-5 mt-sm-0"
            >
              <div className="section-title">
                <h1 className="title mb-3">
                  {i18next.t('wastetracking.title3')} 
                </h1>
                <p className="para-desc text-muted">
                  {i18next.t('wastetracking.description3')}
                </p>
                <div className="mt-4">
                  <Link to="/ecoin" className="mt-3 text-primary">
                      {i18next.t('common.details')} <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg="6" md={{ size: 5, order: 2 }} xs={{ order: 1 }}>
              <div className="position-relative">
                <div className="text-center text-md-right">
                  <img src={img} className="img-fluid shadow rounded-md" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

export default AppOneFeature2;
