import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../components/PersonalDetail/persoaldetail.scss";
import { profileCurrentUser, updateUserDataInvestor } from "../../utils/api";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import classnames from "classnames";

class PersonalDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_picture: "",
      uploaded_profile_picture: "",
      fullname: "",
      identity_number: "",
      phone_number: "",
      country: "",
      provice: "",
      city: "",
      zipcode: null,
      address: ""
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  userData = () => {
    alert("OK");
    updateUserDataInvestor(this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        alert("SALAH");
      });
  };

  buttonClickedChange = e => {
    alert("your data has been update");
    this.setState({
      [e.target.data]: e.target.value
    });
  };

  componentWillMount(props) {
    profileCurrentUser().then(res => {
      this.setState({
        profile_picture: res.data.data.profile_picture,
        fullname: res.data.data.fullname,
        phone_number: res.data.data.phone_number,
        uploaded_profile_picture: res.data.data.profile_picture
      });
    });
  }

  handleFormChange = e => {
    const form = e.target;
    this.setState({
      [form.name]: form.value
    });
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        {/* HEADER */}

        <div class="parallax-container">
          <div class="material-parallax">
            {/* <img src={require("../../asset/image/invest.webp")} alt="logo" /> */}
          </div>
          <div class="breadcrumbs-custom-body parallax-content context-dark">
            <div class="container">
              <h2 class="breadcrumbs-custom-title">PROFILE DETAIL</h2>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}

        <div className="container__profile">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/profile">Profile</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Profile Update</BreadcrumbItem>
          </Breadcrumb>
          <h3>Settings</h3>
          <Row>
            <Col xs="6" sm="4" md="4">
              <Nav tabs vertical pills>
                <div className="profile__pic">
                  <img
                    src={require("../../asset/image/user1.jpeg")}
                    alt="logo"
                  />
                  <p> ADITYO S. NENTO</p>
                </div>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Investment Status
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col xs="16" sm="8" md="8">
              <div className="container__contentbar">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <div className="container__photos">
                      <h4>Update Photo Profile</h4>
                      <form action="/action_page.php">
                        <img
                          src={this.state.uploaded_profile_picture}
                          alt="logo"
                        />
                        <input
                          type="file"
                          id="myFile"
                          name="filename"
                          className="input__photo"
                        />
                      </form>
                    </div>
                    <div className="personal__information">
                      <h4>Personal Information</h4>
                      <FormGroup>
                        <Label for="exampleName">FullName</Label>
                        <Input
                          type="text"
                          name="fullname"
                          id="exampleName"
                          placeholder="Vicky Hermawan"
                          onChange={e => this.handleFormChange(e)}
                          defaultValue={this.state.fullname}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleIdentity">Phone Number</Label>
                        <Input
                          type="tel"
                          name="phone_number"
                          id="phone_number"
                          placeholder="+6282194281342"
                          onChange={e => this.handleFormChange(e)}
                          defaultValue={this.state.phone_number}
                        />
                      </FormGroup>

                      <div className="contact__information">
                        <h4>Contact Information</h4>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleCountry">Country</Label>
                              <Input
                                type="text"
                                name="text"
                                id="Country"
                                placeholder="Indonesia"
                                onChange={e => this.handleFormChange(e)}
                                defaultValue={this.state.country}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="Province">Province</Label>
                              <Input
                                type="text"
                                name="text"
                                id="Province"
                                placeholder="Jekadaahh"
                                onChange={e => this.handleFormChange(e)}
                                defaultValue={this.state.province}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="City">City</Label>
                              <Input
                                type="text"
                                name="text"
                                id="City"
                                placeholder="Jekadahh Timur"
                                onChange={e => this.handleFormChange(e)}
                                defaultValue={this.state.city}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="">Zipcode</Label>
                              <Input
                                type="text"
                                name="text"
                                id="zipcode"
                                placeholder="96113"
                                onChange={e => this.handleFormChange(e)}
                                defaultValue={this.state.zipcode}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="Address">Address</Label>
                              <Input
                                type="text"
                                name="text"
                                id="City"
                                placeholder="Layangan Putus Street"
                                onChange={e => this.handleFormChange(e)}
                                defaultValue={this.state.Address}
                              />
                            </FormGroup>
                            <Button onClick={() => this.userData()}>
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </TabPane>

                  {/*  INVESTMENT STATUS */}

                  <TabPane tabId="2">
                    <div className="investmentstatus__container">
                      <div>Product</div>
                      <div>Payment Amount</div>
                      <div>Payment Status</div>
                    </div>
                    <div className="investmentstatus__content">
                      <div>Boear Goat</div>
                      <div>$360</div>
                      <div className="invest_payoff">Paid off</div>
                    </div>
                    <div className="investmentstatus__content">
                      <div>Boear Goat</div>
                      <div>$860</div>
                      <div className="invest_payoffs">Not paid</div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </div>

        <div className="container__personaldetail">
          <div className="container__right">
            <Form></Form>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetail;
