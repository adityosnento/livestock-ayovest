import React, { Component } from "react";
import { investorSignUp, investorLogin, loginwithgoogle } from "../../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { FormGroup, Label, Input, Form} from "reactstrap";


class Registerbreeder extends Component {
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

  showSignUp = () => {
    const signUp = !this.state.signUp;
    this.setState({
      signUp
    });
  };

  handleSignUpChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
    
    }

render() {
    return (
      <div>
          <div>
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
          </div>
        </div>
        )
    }
}


export default Registerbreeder;