import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../components/PersonalDetail/persoaldetail.scss";
import { profileCurrentUser, updateUserDataInvestor } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
      province: "",
      city: "",
      zipcode: null,
      address: ""
    };
  }

  userData = () => {
    toast.info("Updating data");

    let formdata = new FormData();

    formdata.append("fullname", this.state.fullname);
    formdata.append("phone_number", this.state.phone_number);
    formdata.append("identity_number", this.state.identity_number);
    formdata.append("photo_profile", this.state.uploaded_profile_picture);
    formdata.append("country", this.state.country);
    formdata.append("city", this.state.city);
    formdata.append("province", this.state.province);
    formdata.append("postal_code", this.state.zipcode);
    formdata.append("address", this.state.address);

    updateUserDataInvestor(formdata)
      .then(res => {
        toast.dismiss();

        MySwal.fire(
          "Success",
          "updated user data for: " + this.state.fullname,
          "success"
        );
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
        country: res.data.data.country,
        province: res.data.data.province,
        city: res.data.data.city,
        zipcode: res.data.data.postal_code,
        address: res.data.data.address
      });
    });
  }

  handleFormChange = e => {
    const form = e.target;
    this.setState({
      [form.name]: form.value
    });
  };

  handleProfilePicture = e => {
    const file = e.target.files;

    this.setState({
      uploaded_profile_picture: file[0],
      profile_picture: URL.createObjectURL(file[0])
    });
  };

  render() {
    return (
      <div className="container__personaldetail">
        <ToastContainer />
        <div className="container__left">
          <img src={this.state.profile_picture} alt="logo" />
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
            <img src={this.state.profile_picture} alt="logo" />
            <input
              type="file"
              id="myFile"
              name="filename"
              className="input__photo"
              onChange={e => this.handleProfilePicture(e)}
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
                placeholder="Name"
                onChange={e => this.handleFormChange(e)}
                defaultValue={this.state.fullname}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="identity_number">Identity Number</Label>
              <Input
                type="text"
                name="identity_number"
                id="identity_number"
                placeholder="757 000 000 616 0001"
                onChange={e => this.handleFormChange(e)}
                defaultValue={this.state.identity_number}
              />
            </FormGroup> */}
            <FormGroup>
              <Label for="phone_number">Phone Number</Label>
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
                    <Label for="country">Country</Label>
                    <Input
                      type="text"
                      name="country"
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
                      name="province"
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
                      name="city"
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
                      name="zipcode"
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
                      name="address"
                      id="City"
                      placeholder="Layangan Putus Street"
                      onChange={e => this.handleFormChange(e)}
                      defaultValue={this.state.address}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Button onClick={() => this.userData()} color="success" block>
              <i className="fa fa-paper-plane"></i> &nbsp; Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default PersonalDetail;
