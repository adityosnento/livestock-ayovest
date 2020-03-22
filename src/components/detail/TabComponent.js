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
import ButtonLink from "../../components/home/ButtonLink";

import "./tabcomponent.scss";

const TabComponent = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="fully__container">
      <h1>{props.name}</h1>
      <div className="price__star">
        <div className="price">
          <h4>${props.priceUnit}</h4>
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
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Ringkasan
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Prediksi
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Card className="tab-content">
                <p>{props.description}</p>
                <div className="identity">
                  <p>Periode Kontrak : {props.contractPeriod} tahun</p>
                  <p>Return yang didapat : {props.expectedReturn} </p>
                  <p>Periode Bagi Hasil : {props.sharingPeriod}</p>
                </div>
                <div className="input-lot">
                  <span>-</span>
                  <input></input>
                  <span>+</span>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Card body className="tab-content">
                {props.description}
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
      <div className="btn-invest">
      <button title="Invest Now">
      Start to Invest</button>
      </div>
    </div>
  );
};

export default TabComponent;
