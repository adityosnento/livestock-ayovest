import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../Investasi/investation.scss";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CardComponent from "../home/CardComponent"

const Investation = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);

    return (
      <div>
        <div class="parallax-container">
          <div class="material-parallax">
            <img src={require("../../asset/image/invest.webp")} alt="logo" />
          </div>
          <div class="breadcrumbs-custom-body parallax-content context-dark">
            <div class="container">
              <h2 class="breadcrumbs-custom-title">INVESTATION LIST</h2>
            </div>
          </div>
        </div>
        <div className="container__invest">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/detail">Investasi</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Detail</BreadcrumbItem>
          </Breadcrumb>
          <div className="category__container">
            <div className="category__left">
              <h4>Filter By Category</h4>
              <div className="category__filter">
                <input type="checkbox" />
                <p>All</p>
              </div>
              <div className="category__filter">
                <input type="checkbox" />
                <p>Cow</p>
              </div>
              <div className="category__filter">
                <input type="checkbox" />
                <p>Chicken</p>
              </div>
              <div className="category__filter">
                <input type="checkbox" />
                <p>Goat</p>
              </div>
            </div>
            <div className="category__right">
              <div className="category__top">
                <div>
                <p>Showing 1-9 of 10 results</p>
                </div>
                <div className="category__sort">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret size="sm">
                    Sort by All
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Sort by Newness</DropdownItem>
                    <DropdownItem>Sort by Popularity</DropdownItem>
                    <DropdownItem>Sort by Aplphabet</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                </div>
              </div>
              <CardComponent/>
              <CardComponent/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Investation;
