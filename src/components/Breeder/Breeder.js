import React, { Component } from "react";
import "../Breeder/Breeder.scss";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Breeder extends Component {
  handleFormChange = e => {
    const form = e.target;
    this.setState({
      [form.name]: form.value
    });
  };

  render() {
    return (
      <div className="breeder__container">
        <div className="breeder__cover">
          <img
            className="photo__cover"
            src={require("../../asset/component/background.jpg")}
            alt="logo"
          />
          <img
            className="photo__user"
            src={require("../../asset/image/user1.jpeg")}
            alt="logo"
          />
        </div>
        <div className="form__breeder">
          <div class="wrapper">
            <div class="photo_submit-container">
              <div class="photo_submit-container">
                <label class="photo_submit js-photo_submit2">
                  <input
                    class="photo_submit-input js-photo_submit-input"
                    type="file"
                    accept="image/*"
                  />
                  <span class="photo_submit-plus"></span>
                  <span class="photo_submit-uploadLabel">Upload photo</span>
                  <span class="photo_submit-delete"></span>
                </label>

                <label class="photo_submit js-photo_submit2">
                  <input
                    class="photo_submit-input js-photo_submit-input"
                    type="file"
                    accept="image/*"
                  />
                  <span class="photo_submit-plus"></span>
                  <span class="photo_submit-uploadLabel">Upload photo</span>
                  <span class="photo_submit-delete"></span>
                </label>
              </div>
            </div>
          </div>
          <Form>
          <div className="form__personalinformation">
          <h4>Detail Information</h4>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Input your name here"
                onChange={e => this.handleFormChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplekind">Kind</Label>
              <Input
                type="text"
                name="kind"
                id="kind"
                placeholder="Input your kind here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampledescription">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Input your description here"
              />
            </FormGroup>
          </div>
         
           

            <div className="contact__information">
              <h4>Location Information</h4>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCountry">Country</Label>
                    <Input
                      type="text"
                      name="text"
                      id="Country"
                      placeholder="Indonesia"
                      onChange={e => this.handleFormChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Province">Province</Label>
                    <Input
                      type="text"
                      name="text"
                      id="Province"
                      placeholder="Jekadaahh"
                      onChange={e => this.handleFormChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="City">City</Label>
                    <Input
                      type="text"
                      name="text"
                      id="City"
                      placeholder="Jekadahh Timur"
                      onChange={e => this.handleFormChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Zipcode</Label>
                    <Input
                      type="text"
                      name="text"
                      id="zipcode"
                      placeholder="96113"
                      onChange={e => this.handleFormChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input
                      type="text"
                      name="text"
                      id="City"
                      placeholder="Layangan Putus Street"
                      onChange={e => this.handleFormChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              </div>

              <div className="Livestock__information">
                <h4>Livestock Information</h4>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCountry">Contract Period</Label>
                      <Input
                        type="text"
                        name="text"
                        id="Country"
                        placeholder="How long the time period"
                        onChange={e => this.handleFormChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="Province">Return Of Investment</Label>
                      <Input
                        type="text"
                        name="text"
                        id="Province"
                        placeholder="10% / 20% / 30%  "
                        onChange={e => this.handleFormChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCountry">Sharing Period</Label>
                      <Input
                        type="text"
                        name="text"
                        id="Country"
                        placeholder="How many sharing session"
                        onChange={e => this.handleFormChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="Province">PriceUnit</Label>
                      <Input
                        type="text"
                        name="text"
                        id="Province"
                        placeholder="How much you invest"
                        onChange={e => this.handleFormChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
           
            <Button 
              onClick={() => this.userData()}
              className="btn-submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
