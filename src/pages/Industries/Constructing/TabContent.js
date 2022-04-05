import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class TabContents extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="align-items-center">
          <Col md="6">
            <img
              src={this.props.img}
              data-aos="fade-up"
              data-aos-duration="1400"
              className="img-fluid mx-auto d-block shadow rounded"
              width="200"
              alt=""
            />
          </Col>

          <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-md-4">
              <h4
                className="title mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {this.props.title}
              </h4>
              <p
                className="text-muted"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {this.props.desc}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TabContents;
