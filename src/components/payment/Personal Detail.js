import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../payment/Personal Detail.scss'

const PersonalDetail = (props) => {
  return (
    <div className="container__personaldetail">
    <div className="container__left">
      <img src={require("../../asset/Payment/personal_detail.svg")}
        alt="logo" />
        <div className="container__content">
        <h5>Personal Detail</h5>
        <p>Whether you are an enterpreneur, businessman, employment, or someone with an interest in farm industry.</p>
        </div>
    </div>
    <div className="container__right">
    <form action="/action_page.php">
    <img src={require("../../asset/image/user1.jpeg")} alt="logo" />
    <input type="file" id="myFile" name="filename" className="input__photo"/>
    <input type="submit" className="input__photosubmit"/>
  </form>
    <Form>
        <h4>Personal Information</h4>
    <FormGroup>
        <Label for="exampleName">FullName</Label>
        <Input type="text" name="name" id="exampleName" placeholder="Vicky Hermawan"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleIdentity">Identity Number</Label>
        <Input type="text" name="identity" id="identity" placeholder="757 000 000 616 0001"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleIdentity">Phone Number</Label>
        <Input type="text" name="identity" id="identity" placeholder="+6282194281342"/>
      </FormGroup>
      
      <div className="contact__information">
      <h4>Contact Information</h4>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCountry">Country</Label>
            <Input type="text" name="text" id="Country" placeholder="Indonesia" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Province">Province</Label>
            <Input type="text" name="text" id="Province" placeholder="Jekadaahh" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="City">City</Label>
            <Input type="text" name="text" id="City" placeholder="Jekadahh Timur" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="">Zipcode</Label>
            <Input type="text" name="text" id="zipcode" placeholder="96113" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input type="text" name="text" id="City" placeholder="Layangan Putus Street" />
          </FormGroup>
        </Col>
      </Row>
      </div>
      <Button>Submit</Button>
    </Form>
    </div>
    </div>
  );
}

export default PersonalDetail;