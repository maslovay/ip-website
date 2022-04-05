
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import CounterBox from "../../../components/Shared/CounterBox";
import i18next from 'i18next';
import img from "../../../assets/images/fundomat.png";

class ReutovCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: i18next.t('cvrvm.bullit1'),
          end: 240,
          postFix: "",
          desc: i18next.t('cvrvm.bullit1description')
        },
        {
          title: i18next.t('cvrvm.bullit2'),
          end: 1.2,
          postFix: "",
          desc: i18next.t('cvrvm.bullit2description')
        },
        {
          title: i18next.t('cvrvm.bullit3'),
          end: 45,
          postFix: "",
          desc: i18next.t('cvrvm.bullit3description')
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
                    {i18next.t('cvrvm.titlecase')}
                  </h4>
                  <p className="text-muted">
                    {i18next.t('cvrvm.descriptioncase')}
                  </p>
                </div>
              </Col>

              <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <img src={img} className="img-fluid" alt="" />
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

export default ReutovCase;
