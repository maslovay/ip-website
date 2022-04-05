import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Signboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <div className="rounded bg-primary p-lg-5 p-4">
            <Row className="align-items-end">
              <Col md="12">
                <div className="section-title text-md-left text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    Start your free 2 week trial today
                  </h4>
                  <p className="text-white-50 mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Signboard;
