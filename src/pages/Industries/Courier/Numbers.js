
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import CounterBox from "../../../components/Shared/CounterBox";
import i18next from 'i18next';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: i18next.t('wasteneuralnetwork.bullit1'),
          end: 10,
          postFix: "",
          desc: i18next.t('wasteneuralnetwork.bullit1description')
        },
        {
          title: i18next.t('wasteneuralnetwork.bullit2'),
          end: 295000,
          postFix: "",
          desc: i18next.t('wasteneuralnetwork.bullit2description')
        },
        {
          title: i18next.t('wasteneuralnetwork.bullit3'),
          end: 123000,
          postFix: "",
          desc: i18next.t('wasteneuralnetwork.bullit3description')
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="justify-content-center" id="counter">
              <CounterBox counters={this.state.counters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Numbers;
