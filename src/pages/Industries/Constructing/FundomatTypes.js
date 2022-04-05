import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import TabContents from "./TabContent";
import img1 from "../../../assets/images/fundomat/f_lite.png";
import img2 from "../../../assets/images/fundomat/fundomat_pro.png";
import img3 from "../../../assets/images/fundomat/smart_container.png";
import i18next from 'i18next';

class FundomatTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "2",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs="12" className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4
                  className="title mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {i18next.t('cvrvm.title1')}
                </h4>
                <p
                  className="text-muted para-desc mb-0 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  {i18next.t('cvrvm.description1')}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8" md="12" className="mt-4 pt-2 text-center">
              <Nav
                className="flex-column flex-sm-row rounded"
                pills
                justified
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "1" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        BARCODE
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "2" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        PRO
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "3" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        AI MODULE
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col xs="12" className="mt-4 pt-2">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                <Row className="align-items-center">
                  <Col md="6">
                    <img
                      src={img1}
                      data-aos="fade-up"
                      data-aos-duration="1400"
                      className="img-fluid mx-auto d-block shadow rounded"
                      width="200"
                      alt=""
                    />
                  </Col>

                  <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ml-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000" >
                      {i18next.t('cvrvm.fundomat1title')}
                    </h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      {i18next.t('cvrvm.fundomat1description')}
                    </p>
                    <ul
                      className="list-unstyled feature-list text-muted"
                      name="featurelines"
                    >
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point1')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point2')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point3')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point4')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point5')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat1point6')}
                        </li>
                    </ul>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      <a href='https://www.youtube.com/watch?v=4ky98prfzTU'>
                        {i18next.t('common.youtubelink')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                      <br/>
                      <a href='mailto:info@inpres.com?subject=Запрос презентации фандоматов' className="mt-3 text-primary">
                          {i18next.t('common.askpresenatation')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </p>
                    </div>
                  </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row className="align-items-center">
                  <Col md="6">
                    <img
                      src={img2}
                      data-aos="fade-up"
                      data-aos-duration="1400"
                      className="img-fluid mx-auto d-block shadow rounded"
                      width="200"
                      alt=""
                    />
                  </Col>

                  <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ml-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000" >
                      {i18next.t('cvrvm.fundomat2title')}
                    </h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      {i18next.t('cvrvm.fundomat2description')}
                    </p>
                    <ul
                      className="list-unstyled feature-list text-muted"
                      name="featurelines"
                    >
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point1')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point2')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point3')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point4')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point5')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat2point6')}
                        </li>
                    </ul>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      <a href='https://www.youtube.com/watch?v=QDcuHwcksSs'>
                        {i18next.t('common.youtubelink')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                      <br/>
                      <a href='mailto:info@inpres.com?subject=Запрос презентации фандоматов' className="mt-3 text-primary">
                          {i18next.t('common.askpresenatation')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </p>
                    </div>
                  </Col>
                </Row>
                </TabPane>

                <TabPane tabId="3">
                <Row className="align-items-center">
                  <Col md="6">
                    <img
                      src={img3}
                      data-aos="fade-up"
                      data-aos-duration="1400"
                      className="img-fluid mx-auto d-block shadow rounded"
                      width="200"
                      alt=""
                    />
                  </Col>

                  <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ml-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000" >
                      {i18next.t('cvrvm.fundomat3title')}
                    </h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      {i18next.t('cvrvm.fundomat3description')}
                    </p>
                    <ul
                      className="list-unstyled feature-list text-muted"
                      name="featurelines"
                    >
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point1')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point2')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point3')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point4')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point5')}
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h5 mr-2">
                            <i className={ "uil uil-check-circle align-middle" + this.props.class}></i>
                          </span>
                          {i18next.t('cvrvm.fundomat3point6')}
                        </li>
                    </ul>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400" >
                      <a href='https://www.youtube.com/watch?v=UVLWXsE9W94'>
                        {i18next.t('common.youtubelink')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                      <br/>
                      <a href='mailto:info@inpres.com?subject=Запрос презентации фандоматов' className="mt-3 text-primary">
                          {i18next.t('common.askpresenatation')} <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </p>
                    </div>
                  </Col>
                </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FundomatTypes;
