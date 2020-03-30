import React, { Component } from "react";
import "../../components/payment/Payments.scss";

export default class paymentresume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.userId
    };
  }

  componentDidMount() {
    console.log("state", this.state);
  }
  render() {
    return (
      <div className="container__payments">
        <h3>Keranjang Investment</h3>
        <div className="container__subpayment">
          <div className="product__payment">
            <p>Item</p>
          </div>
          <div className="product__class">
            <p>Payment Description</p>
          </div>
        </div>

        <div className="containers__subpayment">
          <div className="products__payment">
            <input type="checkbox" />
            <img
              className="grafik"
              src={require("../../asset/image/grafik.png")}
              alt="grafik"
            />
            <p>Boer Goat</p>
          </div>
          <div className="products__class">
            <div className="content__class">
              <p>Harga Satuan:</p>
              <p>Quantity Slot:</p>
              <p>Sisa Slot:</p>
            </div>
            <div className="quantity__class">
              <div className="quantity__center">
                <div className="increament">
                  <p>$320</p>
                  <span>-</span>
                  <input />
                  <span>+</span>
                  <p className="slot">200 slot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__submit">
          <div className="total__payment">
            <p>
              TOTAL PAYMENT :<span> $640</span>
            </p>
          </div>
          <div className="total__button">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
