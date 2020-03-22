import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import "./detailcomponent.scss";

export default class DetailComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
        <div> 
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/detail">Investasi</a></BreadcrumbItem>
        <BreadcrumbItem active>Detail</BreadcrumbItem>
      </Breadcrumb>
    </div>
        </Row>
      </Container>
    );
  }
}
