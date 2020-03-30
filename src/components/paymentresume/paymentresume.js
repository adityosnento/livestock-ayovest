import React, { Component } from "react";
import "../../components/paymentresume/paymentresume.scss";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import { livestockGetOne, investmentCreate } from "../../utils/api";

export default class paymentresume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livestock: [],
      unit: 1,
      totalPayment: 0
    };
  }

  componentDidMount = props => {
    livestockGetOne(this.props.livestockId).then(res => {
      const livestock = res.data.data;

      this.setState({
        livestock
      });
    });
  };

  handleUnitChange = e => {
    const val = e.target.value;

    this.setState({
      unit: val
    });
  };

  incrementUnit = () => {
    const unit = this.state.unit + 1;
    this.setState({
      unit
    });
  };

  decrementUnit = () => {
    const unit = this.state.unit - 1;

    if (unit > 0) {
      this.setState({
        unit
      });
    } else {
      toast.error("Unit must not be zero");
    }
  };

  postInvestments = () => {
    const data = {
      livestockId: this.props.match.params.id,
      unit: this.state.unit
    };
    investmentCreate(data)
      .then(res => {
        toast.success("Created investment");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div class="parallax-container">
          <div class="material-parallax">
            <img src={require("../../asset/image/invest.webp")} alt="logo" />
          </div>
          <div class="breadcrumbs-custom-body parallax-content context-dark">
            <div class="container">
              <h2 class="breadcrumbs-custom-title">CART DETAIL</h2>
            </div>
          </div>
        </div>
        <div className="container__payments">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/investationlist">Investation</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cart</BreadcrumbItem>
          </Breadcrumb>
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
              {/* <input type="checkbox" /> */}
              <img
                className="grafik"
                src={require("../../asset/image/grafik.png")}
                alt="grafik"
              />
              <p>Boer Goat</p>
            </div>
            <div className="products__class">
              <div className="content__class">
                <p>Price:</p>
                <p>Quantity Slot:</p>
                <p>Remaining Slots:</p>
              </div>
              <div className="quantity__class">
                <div className="quantity__center">
                  <div className="increament">
                    <p>$320</p>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => this.decrementUnit}
                    >
                      -
                    </span>
                    <input
                      defaultValue={this.state.unit}
                      value={this.state.unit}
                      onChange={e => this.handleUnitChange(e)}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => this.incrementUnit}
                    >
                      +
                    </span>
                    <p className="slot">200 slots</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__submit">
            <div className="total__payment">
              <p>
                TOTAL PAYMENT :<span> ${this.state.totalPayment}</span>
              </p>
            </div>
            <div className="total__button">
              <a href="/payment">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
