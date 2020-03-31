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
        livestock,
        totalPayment: livestock.priceUnit
      });
    });
  };

  handleUnitChange = e => {
    const val = e.target.value;
    const price = this.state.livestock.priceUnit;
    const totalPayment = parseInt(val) * parseInt(price);

    this.setState({
      unit: val,
      totalPayment
    });
  };

  incrementUnit = () => {
    const unit = parseInt(this.state.unit) + 1;
    const total = this.state.livestock.totalUnit;
    const price = this.state.livestock.priceUnit;
    const totalPayment = parseInt(unit) * parseInt(price);

    console.log(price);

    if (unit <= total) {
      this.setState({
        unit,
        totalPayment
      });
    } else {
      toast.dismiss();
      toast.error("Exceeds total number of units");
    }
  };

  decrementUnit = () => {
    const unit = parseInt(this.state.unit) - 1;
    const price = this.state.livestock.priceUnit;
    const totalPayment = parseInt(unit) * parseInt(price);

    if (unit > 0) {
      this.setState({
        unit,
        totalPayment
      });
    } else {
      toast.dismiss();
      toast.error("Unit must not be zero");
    }
  };

  postInvestments = () => {
    const data = {
      livestockId: this.props.livestockId,
      unit: this.state.unit
    };
    toast.info("Creating investment");

    investmentCreate(data)
      .then(res => {
        toast.success("Created investment");
        const investmentId = res.data.data.data._id;
        window.location.href =
          "/payment/" +
          investmentId +
          "/" +
          this.props.livestockId +
          "/" +
          this.state.unit;
      })
      .catch(err => {
        toast.dismiss();
        toast.error(err.message);
      });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="parallax-container">
          <div className="material-parallax">
            <img src={require("../../asset/image/invest.webp")} alt="logo" />
          </div>
          <div className="breadcrumbs-custom-body parallax-content context-dark">
            <div className="container">
              <h2 className="breadcrumbs-custom-title">CART DETAIL</h2>
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
                src={this.state.livestock.image}
                alt="grafik"
              />
              <p>{this.state.livestock.name}</p>
            </div>
            <div className="products__class">
              <div className="content__class">
                <p>Price: </p>
                <p>Quantity Slot:</p>
                <p>Remaining Slots:</p>
              </div>
              <div className="quantity__class">
                <div className="quantity__center">
                  <div className="increament">
                    <p>${this.state.livestock.priceUnit}</p>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={this.decrementUnit}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      // defaultValue="1"
                      value={this.state.unit}
                      onChange={e => this.handleUnitChange(e)}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={this.incrementUnit}
                    >
                      +
                    </span>
                    <p className="slot">
                      {this.state.livestock.totalUnit} slots
                    </p>
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
              <button href="#" onClick={this.postInvestments}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
