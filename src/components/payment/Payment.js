import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../components/payment/Payment.scss";

const FormPayments = props => {
  return (
    <div className="container__payment">
      <div className="container__left">
        <img src={require("../../asset/image/payment.svg")} alt="logo" />
        <div className="container__content">
          <h5>Payment Method</h5>
          <p>
            Whether you are an enterpreneur, businessman, employment, or someone
            with an interest in farm industry.
          </p>
        </div>
      </div>
      <div className="container__right">
        <Form>
          <FormGroup>
            <Label for="exampleAddress">Payment Method</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="Transfer Bank"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Card Number</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="0000 0000 0000 0000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Name on Card</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="Bayu Lestiawan"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCardExpired">Expired Date</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleCardExpired"
                  placeholder="MM/YY"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCVC">CVC</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleCVC"
                  placeholder="123"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default FormPayments;
