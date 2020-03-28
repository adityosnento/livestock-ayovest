import React from "react";
import { Button } from "reactstrap";
import "../payment/Payment.scss";
import { profileCurrentUser } from "../../utils/api";

class FormPayments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      payment_photo: null,
      payment_photo_url: null,
      fullname: "",
      id: this.props.userId
    };
  }

  componentWillMount() {
    profileCurrentUser().then(res => {
      const fullname = res.data.data.fullname;

      this.setState({
        fullname
      });
    });
  }

  handleImageChange = e => {
    const payment_photo = e.target.files[0];

    this.setState({
      payment_photo
    });
  };
  render() {
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
          <h1>{this.state.fullname}</h1>
          <div className="payment__flex">
            <div className="payment__content">
              <p>Contract Period</p>
              <p>Return Of Investment</p>
              <p>Time Period</p>
              <p>Total Lot</p>
            </div>
            <div className="payment__value">
              <p>: 10 years</p>
              <p>: 20% - 30%</p>
              <p>: After 4 years</p>
              <p>: 10 Lot</p>
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
          <div className="wrapper">
            <div className="photo_submit-container">
              <div className="photo_submit-container">
                {!this.state.payment_photo && (
                  <div>
                    <label className="photo_submit js-photo_submit2">
                      <input
                        className="photo_submit-input js-photo_submit-input"
                        type="file"
                        accept="image/*"
                        onChange={e => this.handleImageChange(e)}
                      />
                      <span className="photo_submit-plus"></span>
                      <span className="photo_submit-uploadLabel">
                        Upload photo
                      </span>
                      <span className="photo_submit-delete"></span>
                    </label>
                  </div>
                )}
                {this.state.payment_photo && (
                  <img src={this.state.payment_photo} alt="receipt" />
                )}
              </div>
            </div>
          </div>
          <div className="btn-payment">
            <Button>Pay for $450</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPayments;
