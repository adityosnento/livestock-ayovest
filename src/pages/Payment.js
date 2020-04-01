import React, { Component } from "react";
import Paymethod from "../components/payment/Payment";

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment_photo: {},
      username: "",
      id: this.props.match.params.id,
      livestockId: this.props.match.params.livestockId,
      unit: this.props.match.params.lot
    };
  }
  render() {
    return (
      <div>
        <Paymethod 
        investmentId={this.state.id}
        livestockId={this.state.livestockId}
        unit={this.state.unit} />
      </div>
    );
  }
}
