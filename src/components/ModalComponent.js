import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import { investorSignUp, investorLogin } from "../utils/api";

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
      SigninPassword: ""
    };
  }

  toggle = () => {
    const modal = !this.state.modal;
    this.setState({
      modal
    });
  };

  showSignUp = () => {
    const signUp = !this.state.signUp;
    this.setState({
      signUp
    });
  };

  handleSigninChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUpChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSigninSubmit = () => {
    const data = {
      email: this.state.SigninEmail,
      password: this.state.signinpassword
    };

    investorLogin(data).then(res => alert("login berhasil"));
  };

  handleSignUpSubmit = () => {
    const data = {
      fullname: this.state.signUpFullname,
      phone_number: this.state.SignUpPhoneNumber,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      password_confirmation: this.state.signUpConfirmationPassword
    };

    investorSignUp(data).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {!this.state.signUp ? this.props.buttonLabel : "Sign Up"}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {!this.state.signUp ? "Sign in to Ayovest!" : "Welcome to Ayovest!"}
          </ModalHeader>
          <ModalBody>
            {!this.state.signUp && (
              <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="signinEmail"
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
                    name="signinPassword"
                    id="examplePassword"
                    placeholder="******"
                    onChange={this.handleSigninChange}
                  />
                </FormGroup>
              </Form>
            )}

            {this.state.signUp && (
              <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="Fullname" className="mr-sm-2">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    name="signUpFullname"
                    id="Fullname"
                    placeholder="Your Name"
                    onChange={this.handleSignUpChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="signUpEmail"
                    id="exampleEmail"
                    placeholder="something@idk.cool"
                    onChange={this.handleSignUpChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="phoneNumber" className="mr-sm-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    name="SignUpPhoneNumber"
                    id="phoneNumber"
                    placeholder="08123856"
                    onChange={this.handleSignUpChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="signUpPassword"
                    id="examplePassword"
                    placeholder="******"
                    onChange={this.handleSignUpChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="signUpConfirmationPassword" className="mr-sm-2">
                    Password Confirmation<sup className="text-danger">*</sup>
                  </Label>
                  <Input
                    type="password"
                    name="signUpConfirmationPassword"
                    id="signUpConfirmationPassword"
                    placeholder="******"
                    onChange={this.handleSignUpChange}
                  />
                </FormGroup>
              </Form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.showSignUp}>
              {this.state.signUp && "Sign Up"}
              {!this.state.signUp && "Sign In"}
            </Button>
            {!this.state.signUp ? (
              <Button color="primary" onClick={this.handleSigninSubmit}>
                Sign In
              </Button>
            ) : (
              <Button color="primary" onClick={this.handleSignUpSubmit}>
                Sign Up
              </Button>
            )}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
