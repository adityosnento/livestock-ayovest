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
import { investorSignUp, investorLogin, loginwithgoogle } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { logout } from "../utils/functions/page-behaviour";

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

  logingoogle = () => {
    loginwithgoogle().then(res => {
      console.log(res);
    });
  };

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
      password: this.state.SigninPassword
    };

    investorLogin(data)
      .then(res => {
        toast.success("login berhasil");
        console.log("login", res);
        const token = res.data.data.jwt_token;
        const fullname = res.data.data.fullname;
        const id = res.data.data.id;

        localStorage.setItem("id", id);
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("token", token);

        this.setState({
          isLoggedin: true,
          id: id,
          fullname: fullname
        });

        setTimeout(() => {
          this.toggle();
        }, 1500);
      })
      .catch(err => {
        toast.error("Failed to log in", "Error!");
        console.log(err);
      });
  };

  handleSignUpSubmit = () => {
    const data = {
      fullname: this.state.signUpFullname,
      phone_number: this.state.SignUpPhoneNumber,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      password_confirmation: this.state.signUpConfirmationPassword
    };

    investorSignUp(data)
      .then(res => {
        toast.success("Sign up success!");
      })
      .catch(err => toast.error("Sign up failed"));
  };


  render() {
    return (
      <div>
        {!this.state.isLoggedin && (
          <Button color="primary" onClick={this.toggle}>
            {!this.state.signUp ? this.props.buttonLabel : "Sign Up"}
          </Button>
        )}

{this.state.isLoggedin && (
          <Button color="link" onClick={this.goToProfile}>
            {this.state.fullname}
          </Button>
        )}

{this.state.isLoggedin && (
          <Button
            style={{ color: "white" }}
            color="link"
            title="logout"
            onClick={logout}
          >
            <i className="fa fa-sign-out"></i>
          </Button>
        )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ToastContainer />

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
              {this.state.signUp && "Sign In"}
              {!this.state.signUp && "Sign Up"}
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
            <Button color="secondary" onClick={this.logingoogle}>
              <i className="fa fa-google"></i>
              SignUp with Google
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
