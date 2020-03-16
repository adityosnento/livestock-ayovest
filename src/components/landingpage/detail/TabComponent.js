import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import "./tabcomponent.scss";

const TabComponent = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
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
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Rincian
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
                <p>Periode Kontrak : 10 tahun</p>
                <p>Return yang didapat : 15-20% / Tahun</p>
                <p>Periode Bagi Hasil : 1 Tahun</p>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Card body className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis repudiandae quos laudantium totam ab deserunt
                molestiae ipsa sunt, quasi facere voluptatibus temporibus.
                Laborum labore, mollitia eos non qui amet sint?
                {/* <Button>Go somewhere</Button> */}
              </Card>
            </Col>
            {/* <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col> */}
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
    </div>
  );
};

export default TabComponent;
