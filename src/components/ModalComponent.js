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
import "./ModalComponent.scss";
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
    const justLoggedin = localStorage.getItem("login")
      ? localStorage.getItem("login")
      : false;

    fullname && justLoggedin && toast.info(`Welcome back, ${fullname}!`);
    localStorage.removeItem("login");

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
      .catch(err => {
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

  // Action for SignIn function
  signInAction = () => {
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
        localStorage.setItem("login", true);

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

  // Action for signup function
  signUpAction = () => {
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

  handleSigninSubmit = () => {
    this.signInAction();
  };

  handleSigninKeyEnter = e => {
    if (e.keyCode === 13) {
      this.signInAction();
    }
  };

  handleSignUpSubmit = () => {
    this.signUpAction();
  };

  handleSignUpKeyEnter = e => {
    if (e.keyCode === 13) {
      this.signUpAction();
    }
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
            style={{ color: "black" }}
            color="link"
            title="logout"
            onClick={logout}
          >
            <i className="fa fa-sign-out"></i>
          </Button>
        )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ToastContainer />
          {this.state.isLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px"
              }}
            >
              <Loader type="Circles" height={100} width={100} />
              <p>Loading... Please wait</p>
            </div>
          )}

          {!this.state.isLoading && (
            <>
              <ModalHeader toggle={this.toggle}>
                {!this.state.signUp ? (
                  <div className="signin__logo">
                    <img src={require("../asset/image/logo.png")} alt="logo" />
                    <p>Welcome to AYOvest!</p>
                  </div>
                ) : (
                  <div className="signin__logo">
                    <img src={require("../asset/image/logo.png")} alt="logo" />
                    <p>Welcome to AYOvest!</p>
                  </div>
                )}
              </ModalHeader>

              <ModalBody>
                {!this.state.signUp && (
                  <Form>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label
                        for="exampleEmail"
                        className="mr-sm-2"
                        id="input_label"
                      >
                        Email <sup className="text-danger">*</sup>
                      </Label>
                      <Input
                        type="email"
                        name="SigninEmail"
                        id="exampleEmail"
                        placeholder="something@idk.cool"
                        onChange={this.handleSigninChange}
                        onKeyDown={this.handleSigninKeyEnter}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label
                        for="examplePassword"
                        className="mr-sm-2"
                        id="input_labelpassword"
                      >
                        Password <sup className="text-danger">*</sup>
                      </Label>
                      <Input
                        type="password"
                        name="SigninPassword"
                        id="examplePassword"
                        placeholder="******"
                        onChange={this.handleSigninChange}
                        onKeyDown={this.handleSigninKeyEnter}
                      />
                    </FormGroup>
                  </Form>
                )}

                {this.state.signUp && (
                  <Form>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label
                        for="Fullname"
                        className="mr-sm-2"
                        id="input_fullname"
                      >
                        Full Name <sup className="text-danger">*</sup>
                      </Label>
                      <Input
                        type="text"
                        name="signUpFullname"
                        id="Fullname"
                        placeholder="Your Name"
                        onChange={this.handleSignUpChange}
                        onKeyDown={this.handleSignUpKeyEnter}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label
                        for="exampleEmail"
                        className="mr-sm-2"
                        id="input_email"
                      >
                        Email <sup className="text-danger">*</sup>
                      </Label>
                      <Input
                        type="email"
                        name="signUpEmail"
                        id="exampleEmail"
                        placeholder="Your Active Email"
                        onChange={this.handleSignUpChange}
                        onKeyDown={this.handleSignUpKeyEnter}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label
                        for="phoneNumber"
                        className="mr-sm-2"
                        id="input_phonenumber"
                      >
                        Phone Number <sup className="text-danger">*</sup>
                      </Label>
                      <Input
                        type="tel"
                        name="SignUpPhoneNumber"
                        id="phoneNumber"
                        placeholder="Your Phone Number"
                        onChange={this.handleSignUpChange}
                        onKeyDown={this.handleSignUpKeyEnter}
                      />
                    </FormGroup>

                    <div className="password_container">
                      <div className="registration_password">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Label
                            for="examplePassword"
                            className="mr-sm-2"
                            id="input_pwd"
                          >
                            Password <sup className="text-danger">*</sup>
                          </Label>
                          <Input
                            type="password"
                            name="signUpPassword"
                            id="examplePassword"
                            placeholder="******"
                            onChange={this.handleSignUpChange}
                            onKeyDown={this.handleSignUpKeyEnter}
                          />
                        </FormGroup>
                      </div>

                      <div className="registration_passwordconfirmation">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Label
                            for="signUpConfirmationPassword"
                            className="mr-sm-2"
                            id="input_pwdconfirm"
                          >
                            Password Confirmation
                            <sup className="text-danger">*</sup>
                          </Label>
                          <Input
                            type="password"
                            name="signUpConfirmationPassword"
                            id="signUpConfirmationPassword"
                            placeholder="******"
                            onChange={this.handleSignUpChange}
                            onKeyDown={this.handleSignUpKeyEnter}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </Form>
                )}
                <Button
                  color="secondary"
                  onClick={this.logingoogle}
                  id="btn__google"
                >
                  <i className="fa fa-google"></i>
                  <p>Sign In with Google</p>
                </Button>
              </ModalBody>
              <ModalFooter>
                <div className="btn__flex">
                  {!this.state.signUp ? (
                    <div>
                      <Button
                        color="primary"
                        onClick={this.handleSigninSubmit}
                        id="sign_btn"
                      >
                        Sign In
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        color="primary"
                        onClick={this.handleSignUpSubmit}
                        id="sign_btn"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
                  <Button
                    color="link"
                    onClick={this.showSignUp}
                    id="change_btn"
                  >
                    Not a member ? please {this.state.signUp && "Sign In"}
                    {!this.state.signUp && "Sign Up"}
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
