import React, { Component } from "react";
import Paymentresumes from "../components/paymentresume/paymentresume";

export default class Paymentresume extends Component {
  render() {
    return (
      <div>
        <Paymentresumes livestockId={this.props.match.params.id} />
      </div>
    );
  }
}
