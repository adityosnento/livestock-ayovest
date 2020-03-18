import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal
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
        <NavbarBrand href="/">monggovest</NavbarBrand>
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
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <ModalComponent buttonLabel="Sign In" />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
