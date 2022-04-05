import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";


class TimeTrackingHowItWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      facilities: [
        {
          icon: "shield",
          title: "Fully Secured",
          desc:
            "Moreover, in Latin only words at the beginning of sentences are capitalized.",
        },
        {
          icon: "cpu",
          title: "Best Performance",
          desc:
            "If the fill text is intended to illustrate the characteristics of sometimes.",
        },
      ],
    };
    this.updateWindowSize.bind(this);
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={{ size: 5, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2 mt-lg-0 pt-lg-0"
            >
              <div className="section-title me-lg-4">
                <h1 className="title mb-3">Why Choose us ?</h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>

                <Row>
                  {this.state.facilities.map((facility, key) => (
                    <Col xs="12" key={key}>
                      <div className="d-flex align-items-center pt-4">
                        <h2>
                          <i>
                            <FeatherIcon
                              icon={facility.icon}
                              className="fea icon-m-md text-primary"
                            />
                          </i>
                        </h2>
                        <div className="ms-3">
                          <h5> {facility.title} </h5>
                          <p className="text-muted mb-0">{facility.desc}</p>
                        </div>
                      </div>
                    </Col>
                  ))}

                  <Col xs="12" className="pt-4">
                    <Link to="" className="btn btn-outline-primary">
                      Install Now <i className="mdi mdi-chevron-right"></i>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
              <div className="saas-feature-shape-right position-relative">
                <img
                  src={this.props.image1}
                  className="img-fluid mx-auto d-block rounded shadow"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default TimeTrackingHowItWork;
