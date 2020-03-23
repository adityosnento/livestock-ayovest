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
  const [isOpen, setIsOpen, isModalVisble, setIsModalVisible] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-color" dark expand="md" fixed="top">
        <NavbarBrand href="/">Ayovest</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">investasi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Cara Kerja
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Tentang</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Bantuan</NavLink>
            </NavItem>
          </Nav>
          <ModalComponent buttonLabel="Sign In" />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
