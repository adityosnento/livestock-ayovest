import React, { Component } from "react";
import "../../components/paymentresume/paymentresume.scss";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class paymentresume extends Component {
  render() {
    return (
      <div>
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
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/investationlist">Investation</a></BreadcrumbItem>
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
            <input type="checkbox" />
            <img
            className="grafik"
            src={require("../../asset/image/grafik.png")}
            alt="grafik"/>
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
                <span>-</span>
                <input/>
                <span>+</span>
            <p className="slot">200 slots</p>
            </div>
            </div>
            </div>
          </div>
        </div>
            <div className="container__submit">
            <div className="total__payment">
                <p>TOTAL PAYMENT : 
                <span>    $640</span></p>
            </div>
            <div className="total__button">
                <button>Checkout</button>
            </div>
            </div>
           
      </div>
      </div>
    );
  }
}
