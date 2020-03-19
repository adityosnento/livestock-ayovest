import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../components/PersonalDetail/persoaldetail.scss";
import { profileCurrentUser, updateUserDataInvestor } from "../../utils/api";

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

  render() {
    return (
      <div className="container__personaldetail">
        <div className="container__left">
        <img src={require("../../asset/Payment/personal_detail.svg")} alt="logo" />
          <div className="container__content">
            <h5>Personal Detail</h5>
            <p>
              Whether you are an enterpreneur, businessman, employment, or
              someone with an interest in farm industry.
            </p>
          </div>
        </div>
        <div className="container__right">
          <form action="/action_page.php">
            <img src={this.state.uploaded_profile_picture} alt="logo" />
            <input
              type="file"
              id="myFile"
              name="filename"
              className="input__photo"
            />
          </form>
          <Form>
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
              <Label for="exampleIdentity">Identity Number</Label>
              <Input
                type="text"
                name="identity"
                id="identity"
                placeholder="757 000 000 616 0001"
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
                </Col>
              </Row>
            </div>
            <Button onClick={() => this.userData()}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default PersonalDetail;
