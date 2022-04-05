
import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import i18next from 'i18next';
import SectionTitle from "../Shared/SectionTitle";

class MainIndustries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              title={i18next.t('home.industries.title')}
              desc={i18next.t('home.industries.description')}
            />
            <Row>
            
              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/constructing"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.constructing')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/manufactoring"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <circle cx="12" cy="12" r="3">
                        </circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.manufactoring')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/oilgas"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.oilgas')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/manufactoring"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"  
                    strokeLinejoin="round" 
                    className="feather feather-bold fea icon-ex-md text-primary">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6">
                        </line>
                        <path d="M16 10a4 4 0 0 1-8 0">
                          </path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.courier')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/manufactoring"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeinejoin="round" 
                    className="feather feather-git-merge fea icon-ex-md text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.landscaping')}</h4>
                  </Media>
                </div>
              {/* </a> */}
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
              {/* <a href="/industries/other"> */}
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-git-merge fea icon-ex-md text-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  </div>
                  <Media body style={{paddingLeft: "20px"}}>
                    <h4 className="title mb-0" style={{color: "#000000"}}>{i18next.t('home.industries.other')}</h4>
                  </Media>
                </div>
                {/* </a> */}
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default MainIndustries;
