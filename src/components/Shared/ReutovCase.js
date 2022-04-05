// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import CounterBox from "./CounterBox";
import i18next from 'i18next';
import laptop from "../../assets/images/bag_container.png";

class FundomatCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: i18next.t('case_reutov.bullit1'),
          end: 7,
          postFix: "%",
          desc: i18next.t('case_reutov.bullit1description')
        },
        {
          title: i18next.t('case_reutov.bullit2'),
          end: 20,
          postFix: "%",
          desc: i18next.t('case_reutov.bullit2description')
        },
        {
          title: i18next.t('case_reutov.bullit3'),
          end: 6300,
          postFix: "",
          desc: i18next.t('case_reutov.bullit3description')
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title mr-lg-5">
                  <h4 className="title mb-4">
                    {i18next.t('case_reutov.title')}
                  </h4>
                  <p className="text-muted">
                    {i18next.t('case_reutov.description')}
                  </p>
                </div>
              </Col>

              <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <img src={laptop} className="img-fluid shadow rounded-md" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center" id="counter">
              <CounterBox counters={this.state.counters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default FundomatCase;
