import React, { Component } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import "../Login/loginbreeder.scss";

class ModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      signUp: false,
      signUpFullname: "",
      SignUpPhoneNumber: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpConfirmationPassword: "",
      SigninEmail: "",
      SigninPassword: "",
      isLoggedin: false,
      fullname: "",
      id: ""
    };
  }

  componentWillMount(props) {
    const token = localStorage.getItem("token");
    const fullname = localStorage.getItem("fullname");
    const id = localStorage.getItem("id");

    this.setState({
      id,
      fullname,
      isLoggedin: token && true
    });
  }

  goToProfile = () => {
    window.location = "/profile/" + this.state.id;
  };

  handleSigninChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleSigninSubmit = () => {
  //   const data = {
  //     email: this.state.SigninEmail,
  //     password: this.state.SigninPassword
  //   }
  // }

  render() {
    return (
      <div>
        <div className="containerlogin__breeder">
          <div className="containerleft__breeder">
            <img src={require("../../../asset/image/breeder.jpg")} alt="halo" />
          </div>
          <div className="containerright__breeder">
            <h1>Breeder Login Livestock</h1>

            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="SigninEmail"
                  id="exampleEmail"
                  placeholder="something@idk.cool"
                  onChange={this.handleSigninChange}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Password
                </Label>
                <Input
                  type="password"
                  name="SigninPassword"
                  id="examplePassword"
                  placeholder="******"
                  onChange={this.handleSigninChange}
                />
              </FormGroup>
            </Form>

            <div className="container__checkbox">
              <div className="checkbox">
                <input
                  type="checkbox"
                  class="shopee-checkbox__input"
                  value="Ingat saya"
                ></input>
                <p>ingat saya?</p>
              </div>
              <div className="forgotpassword">
                <p>Forgot your password ?</p>
              </div>
            </div>

            <div className="container-btn">
              <Button
                color="primary"
                onClick={this.handleSigninSubmit}
                className="btn-forbreeder"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalComponent;
