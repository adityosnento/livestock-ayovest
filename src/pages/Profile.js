import React, { Component } from "react";
import PersonalDetail from "../components/PersonalDetail/PersonalDetail";
import { investmentsGetAll } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: []
    };
  }

  componentDidMount = props => {};
  render() {
    return (
      <div>
        <ToastContainer />
        <PersonalDetail />
      </div>
    );
  }
}
