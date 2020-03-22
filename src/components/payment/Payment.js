import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../payment/Payment.scss";

const FormPayments = props => {
  return (
    <div className="container__payment">
      <div className="container__left">
        {/* <img src={require("../../asset/Payment/payment.svg")}
        alt="logo" />
        <div className="container__content">
        <h5>Payment Method</h5>
        <p>Whether you are an enterpreneur, businessman, employment, or someone with an interest in farm industry.</p>
        </div> */}
        <h6>INVOICE</h6>
        <h1>Bills ELLIES</h1>
        <div className="payment__flex">
          <div className="payment__content">
            <p>Contract Period</p>
            <p>Return Of Investment</p>
            <p>Time Period</p>
            <p>Total Lot</p>
          </div>
          <div className="payment__value">
            <p>:  10 years</p>
            <p>:  20% - 30%</p>
            <p>:  After 4 years</p>
            <p>:  10 Lot</p>
          </div>
        </div>
        <div className="total__payment">
          <div className="payment__history">
            <h4>Total Payment</h4>
          </div>
          <div className="payment__value">
            <h4>$450</h4>
          </div>
        </div>
      </div>
      <div className="container__right">
      <div class="wrapper">
            <div class="photo_submit-container">
              <div class="photo_submit-container">
                <label class="photo_submit js-photo_submit2">
                  <input
                    class="photo_submit-input js-photo_submit-input"
                    type="file"
                    accept="image/*"
                  />
                  <span class="photo_submit-plus"></span>
                  <span class="photo_submit-uploadLabel">Upload photo</span>
                  <span class="photo_submit-delete"></span>
                </label>
              </div>
            </div>
          </div>
        <div className="btn-payment">
        <Button>Pay for $450</Button>
        </div>
      </div>
    </div>
  );
};

export default FormPayments;
