import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import i18next from 'i18next';
import FeatherIcon from "feather-icons-react";
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
      email : null,
      name: null,
      phone: null,
      subject: null,
      message : null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
    axios({
        method: 'get',
        url: 'https://tbaf.azurewebsites.net/api/SendSalesEmail',
        params:{
          to: "sales@inpres.com",
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          request: this.state.message,
          sub: "From site contact page"
        },
      })
      .then(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <React.Fragment>
        
          
        <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <h4
                  className="title mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {i18next.t('contact.contact_us')}
                </h4>
                <Card className="custom-form rounded shadow border-0">
 
                  <CardBody>
                    <div id="message"></div>
                    <Alert
                      color="primary"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      {i18next.t('contact.send_succesfully')}
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              {i18next.t('contact.your_name')} <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder={i18next.t('contact.your_name')}
                              required
                              onChange={(event) => {this.setState({name: event.target.value})}}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label className="form-label">
                              {i18next.t('contact.your_email')} <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              required
                              onChange={(event) => {this.setState({email: event.target.value})}}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">{i18next.t('contact.your_phone')}</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="book"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="subject"
                              id="subject"
                              type="tel"
                              className="form-control ps-5"
                              placeholder={i18next.t('contact.your_phone')}
                              onChange={(event) => {this.setState({subject: event.target.value})}}
                              required
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">{i18next.t('contact.comments')}</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder={i18next.t('contact.your_message')}
                              onChange={(event) => {this.setState({message: event.target.value})}}
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <button
                              className="submitBnt btn btn-primary btn-block"
                              onClick={() => {console.log("print")}}
                            >
                            {i18next.t('contact.send_message')}
                            </button>
                          </div>
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6} md={{ size: 6, order: 1 }} xs={{ order: 1 }}>
                <div className="title-heading ms-lg-4">
                  <h4 className="mb-4">{i18next.t('contact.about_us_header')}</h4>
                  <p className="text-muted">
                    {i18next.t('contact.about_us_description')}
                  </p>
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary "
                      >
                        &nbsp;&nbsp;&nbsp; info@inpres.com
                      </Link>
                    </div>
                  </div>
                  <ul className="list-unstyled social-icon mb-0 mt-4"> 
                   <li className="list-inline-item">
                      <a href="https://www.youtube.com/channel/UC_d8J05AN0-ThyoGfWW8S3g" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="youtube"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </a>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="https://www.youtube.com/channel/UC_d8J05AN0-ThyoGfWW8S3g" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
