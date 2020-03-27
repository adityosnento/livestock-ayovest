import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
// import ButtonLink from "../../components/home/ButtonLink";

import "./tabcomponent.scss";
import { toast, ToastContainer } from "react-toastify";

class TabComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      quantity: 0
    };
  }

  toggle = activeTab => {
    this.setState({
      activeTab
    });
  };

  setQuantity = e => {
    const value = e.target.value;

    if (value > -1) {
      if (value <= this.props.totalUnit) {
        this.setState({
          quantity: value
        });
      } else {
        toast.dismiss();
        toast.warn("Purchase exceeds total unit");
      }
    } else {
      toast.dismiss();
      toast.warn("Purchase must not be below zero");
    }
  };

  decreaseAmount = () => {
    if (this.state.quantity !== 0) {
      const quantity = this.state.quantity - 1;

      this.setState({
        quantity
      });
    } else {
      toast.dismiss();
      toast.warn("reached the minimal amount");
    }
  };

  increaseAmount = () => {
    if (this.state.quantity <= this.props.totalUnit) {
      const quantity = parseInt(this.state.quantity) + 1;

      this.setState({
        quantity
      });
    } else {
      toast.dismiss();
      toast.error("Reached the maximum available unit");
    }
  };

  render() {
    return (
      <div className="fully__container">
        <ToastContainer />
        <h1>{this.props.name}</h1>
        <div className="price__star">
          <div className="price">
            <h4>${this.props.priceUnit}</h4>
          </div>
          <div className="star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <Nav tabs className="tab-box">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Ringkasan
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Prediksi
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Card className="tab-content">
                  <p>{this.props.description}</p>
                  <div className="identity">
                    <p>Periode Kontrak : {this.props.contractPeriod} tahun</p>
                    <p>Return yang didapat : {this.props.expectedReturn} </p>
                    <p>Periode Bagi Hasil : {this.props.sharingPeriod}</p>
                    <p>Stok : {this.props.totalUnit}</p>
                    <p>Periode Kontrak : {this.props.profitContractPeriod}</p>
                  </div>
                  <div className="input-lot">
                    <span
                      className="control-button"
                      onClick={() => this.decreaseAmount()}
                    >
                      -
                    </span>
                    <input
                      name="quantity"
                      defaultValue={0}
                      value={this.state.quantity}
                      onChange={e => this.setQuantity(e)}
                    ></input>
                    <span
                      className="control-button"
                      onClick={() => this.increaseAmount()}
                    >
                      +
                    </span>
                  </div>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Card body className="tab-content">
                  <p>{this.props.description}</p>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Card className="tab-content">
                  <img
                    className="grafik"
                    src={require("../../asset/image/grafik.png")}
                    alt="grafik"
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <hr />
        <div className="btn-invest">
          <button title="Invest Now">Start to Invest</button>
        </div>
      </div>
    );
  }
}

export default TabComponent;
