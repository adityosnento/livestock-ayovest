import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

import "./formcomponent.scss";

const FormComponent = props => {
  return (
    <Form className="form">
      <Row>
        <Col>
          <h4 className="form-heading">Informasi pribadi</h4>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your fullName"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">No. Handphone</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your PHone Number"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          placeholder="Enter Your Eddress"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampName">Kecamatan</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your fullName"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Kelurahan</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your PHone Number"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleSelect">Provinsi</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Batam</option>
              <option>Tanjungpinang</option>
              <option>Bandung</option>
              <option>Jakarta</option>
              <option>Surabaya</option>
              <option>Jogjakarta</option>
              <option>Banjarmasin</option>
              <option>Lampung</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleSelect">Kota</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Batam</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default FormComponent;
