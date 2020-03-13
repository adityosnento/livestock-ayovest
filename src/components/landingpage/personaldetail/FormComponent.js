import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col
} from "reactstrap";

import "./formcomponent.scss";

const PersonalDetail = props => {
  return (
    <Form className="form">
      <Row>
        <Col>
          <h4 className="form-heading">Informasi Pribadi</h4>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Jenis Kelamin</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Laki-Laki</option>
              <option>Perempuan</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Agama</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Islam</option>
              <option>Kristen</option>
              <option>Hindu</option>
              <option>Budha</option>
              <option>Konghucu</option>
              <option>Dan Lain-lain</option>
              <option>United State</option>
              <option>United Kingdom</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Pendidikan Terakhir</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>SD</option>
              <option>SMP</option>
              <option>SMA/SMK</option>
              <option>Akademi/Diploma</option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleTempatLahir">Tempat Lahir</Label>
            <Input
              type="name"
              name="name"
              id="exampleTempataLahir"
              placeholder="Enter your pace of birth"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Nama Ibu Kandung</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your Mother name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Warga Negara</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Indonesia</option>
              <option>Afghanistan</option>
              <option>Aland Island</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>America Samoa</option>
              <option>United State</option>
              <option>United Kingdom</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status Perkawinan</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Sudah Menikah</option>
              <option>Belum Menikah</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalDetail;
