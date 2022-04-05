import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Button,
  Input,
  Form,
  FormGroup
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

import SectionTitle from "../Shared/SectionTitle";
import ProcessBox from "../Shared/ProcessBox";


class OnlineTimeSheetHowItWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          id: 1,
          title: "Discuss The Project",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 2,
          title: "Develop & Elaborate",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 3,
          title: "Final Approvement",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
      ],
      works: [
      ],
      isOpen: false,
    };
    this.openModal.bind(this);
  }

  openModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Work Process"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {/* process box */}
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>

        <Modal isOpen={this.state.isOpen} role="dialog" centered>
          <ModalHeader toggle={this.openModal}>15 Days Free Trail</ModalHeader>
          <ModalBody>
            <div className="bg-white p-3 rounded box-shadow">
              <Form>
                <Row>
                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Name : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Name"
                        name="name"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Email : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Password : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="lock"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="password"
                        className="form-control ps-5"
                        placeholder="Password"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12} className="mt-2 mb-0">
                    <Button color="primary" block>
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default OnlineTimeSheetHowItWork;
