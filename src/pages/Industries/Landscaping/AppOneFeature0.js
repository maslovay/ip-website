import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';
import img2 from "../../assets/images/promo_bag.png";

class AppOneFeature0 extends Component {

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
                  {i18next.t('wastetracking.title1')} 
                </h1>
                <p className="para-desc text-muted">
                  {i18next.t('wastetracking.description1')}
                </p>
              </div>
            </Col>

            <Col lg="6" md={{ size: 5, order: 2 }} xs={{ order: 1 }}>
              <div className="position-relative">
                <div className="text-center text-md-right">
                  <img src={img2} className="img-fluid shadow rounded-md" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

export default AppOneFeature0;
