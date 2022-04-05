import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i18next from 'i18next';

class SmartContainerBenefits extends Component {

  state = {
    features1: [
      { title: i18next.t('cvrvm.bullit31')},
      { title: i18next.t('cvrvm.bullit32')},
      { title: i18next.t('cvrvm.bullit33')},
      { title: i18next.t('cvrvm.bullit34')},
      { title: i18next.t('cvrvm.bullit35')},
      { title: i18next.t('cvrvm.bullit36')},
      { title: i18next.t('cvrvm.bullit37')},
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">


            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">{i18next.t('cvrvm.title3')}</h4>
                <p className="text-muted"> {i18next.t('cvrvm.description3')} </p>
                <ul
                  className="list-unstyled feature-list text-muted"
                  name="featurelines"
                >
                  {this.state.features1.map((feature, key) => (
                    <li key={key} className="mb-0">
                      <span className="text-primary h5 mr-2">
                        <i
                          // className="uil uil-check-circle align-middle"
                          className={
                            "uil uil-check-circle align-middle" + this.props.class
                          }
                        ></i>
                      </span>
                      {feature.title}
                      
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg="6" md="5">
              <div className="position-relative">
                <div className="text-center text-md-left">
                <iframe width={window.innerWidth> 800 ? window.innerWidth*0.4: window.innerWidth*0.8} height={window.innerWidth> 800 ? window.innerWidth*0.4*0.6: window.innerWidth*0.8*0.6} src="https://www.youtube.com/embed/dlhlpQ9IcYo?controls=0&cc_load_policy=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>      </div>
              </div>
            </Col>

          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SmartContainerBenefits;
