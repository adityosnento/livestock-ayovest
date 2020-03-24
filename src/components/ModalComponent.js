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
import {
  investorSignUp,
  investorLogin,
  loginwithgoogle,
  investorRecoverPassword
} from "../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { logout } from "../utils/functions/page-behaviour";
import Loader from "react-loader-spinner";

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
      id: "",
      role: "",
      isLoading: false
    };
  }

  recoverPassword = () => {
    const data = {};
    investorRecoverPassword(data).then(res => {
      console.log(res);
    });
  };

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
    loginwithgoogle()
      .then(res => {
        toast.success("Logged in");
      })
      .then(err => {
        toast.error("failed to log in with Google");
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
    toast.info("Signing in");
    this.setState({
      isLoading: true
    });
    const data = {
      email: this.state.SigninEmail,
      password: this.state.SigninPassword
    };

    investorLogin(data)
      .then(res => {
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
          role: res.data.data.role,
          fullname: fullname
        });

        toast.dismiss();
        toast.success("Logged in");
        setTimeout(() => {
          this.doneLoading();
          this.toggle();
          window.location.href = "/";
        }, 1000);
      })
      .catch(err => {
        this.doneLoading();

        toast.error("Failed to log in", "Error!");
        this.setState({
          signUp: true
        });
        toast.info("Please sign up first");
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

    this.setState({
      isLoading: true
    });

    investorSignUp(data)
      .then(res => {
        toast.success("Sign up success!");
        this.doneLoading();
      })
      .catch(err => {
        toast.error("Sign up failed");
        this.doneLoading();
      });
  };

  doneLoading = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    return (
      <div>
        {!this.state.isLoggedin && (
          <Button color="success" onClick={this.toggle}>
            {!this.state.signUp ? this.props.buttonLabel : "Sign Up"}
          </Button>
        )}

        {this.state.isLoggedin && (
          <Button
            color="link"
            className="text-success"
            onClick={this.goToProfile}
          >
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
        {this.state.isLoading && (
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <div className="loader-div">
              {this.state.signUp ? (
                <h2>Signing up, please wait</h2>
              ) : (
                <h2>Signing in, please wait</h2>
              )}
            </div>
            <div className="loader-div">
              <Loader
                style={{ display: "block" }}
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
          </Modal>
        )}
        {!this.state.isLoading && (
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ToastContainer />
            <ModalHeader toggle={this.toggle}>
              {!this.state.signUp
                ? "Sign in to Ayovest!"
                : "Welcome to Ayovest!"}
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
              {!this.state.signUp && (
                <Button
                  color="link"
                  style={{ fontSize: "0.8rem", color: "red" }}
                >
                  Forgot password
                </Button>
              )}

              {!this.state.signUp ? (
                <Button color="success" onClick={this.handleSigninSubmit}>
                  Sign In
                </Button>
              ) : (
                <Button color="success" onClick={this.handleSignUpSubmit}>
                  Sign Up
                </Button>
              )}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
            <ModalFooter>
              <Button
                color="link"
                className="text-success"
                onClick={this.showSignUp}
              >
                {this.state.signUp && "Sign In"}
                {!this.state.signUp && "Sign Up"}
              </Button>
              <Button
                color="danger"
                style={{ borderRadius: "50%" }}
                onClick={this.logingoogle}
                title="Signin with Google"
              >
                <i className="fa fa-google"></i>
              </Button>
            </ModalFooter>
          </Modal>
        )}
        <style jsx="true">
          {`
            .loader-div {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ModalComponent;
