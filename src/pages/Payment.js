import React, { Component } from "react";
import Paymethod from "../components/payment/Payment";

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment_photo: {},
      username: "",
      id: this.props.match.params.id
    };
  }
  render() {
    return (
      <div>
        <Paymethod paymentId={this.state.id} />
      </div>
    );
  }
}
