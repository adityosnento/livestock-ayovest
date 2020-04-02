import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import ModalComponent from "../components/ModalComponent";

import "../asset/style.css";
import "./topbar.scss";

const TopBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-color" dark expand="md" fixed="top">
        <NavbarBrand href="/">
          <img  src={require("../../src/asset/auth/ayovest.png")}
            alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/investationlist">INVESTATION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/help">HELP</NavLink>
            </NavItem>
          </Nav>
          <ModalComponent buttonLabel="SIGN IN" />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
