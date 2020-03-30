import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../Investasi/investation.scss";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import CardComponent from "../home/CardComponent";
import { liveStockGetAll } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

class Investation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      livestocks: []
    };
  }

  componentDidMount = props => {
    liveStockGetAll()
      .then(res => {
        console.log(res);
        this.setState({
          livestocks: res.data.data.docs,
          totalPages: res.data.data.totalPages
        });
      })
      .catch(err => {
        toast.error("Failed to get livestocks data");
      });
  };

  toggle = () => {
    const dropdownOpen = !this.state.dropdownOpen;

    this.setState({
      dropdownOpen
    });
  };

  render() {
    return (
      <div>
        <ToastContainer />
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
              <a href="/investationlist">Investasi</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Detail</BreadcrumbItem>
          </Breadcrumb>
          <div className="category__container">
            <div className="category__left">
              <h4>Filter By Category</h4>
              <div className="category__filter">
                <input type="radio" name="sort-by" />
                <p>All</p>
              </div>
              <div className="category__filter">
                <input type="radio" name="sort-by" />
                <p>Cow</p>
              </div>
              <div className="category__filter">
                <input type="radio" name="sort-by" />
                <p>Chicken</p>
              </div>
              <div className="category__filter">
                <input type="radio" name="sort-by" />
                <p>Goat</p>
              </div>
              <div className="category__filter">
                <input type="radio" name="sort-by" />
                <p>Duck</p>
              </div>
            </div>
            <div className="category__right">
              <div className="category__top">
                <div>
                  <p>Showing 1-9 of 10 results</p>
                </div>
                <div className="category__sort">
                  <ButtonDropdown
                    isOpen={this.statedropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret size="sm">
                      Sort by All
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Sort by Latest</DropdownItem>
                      <DropdownItem>Sort by Popularity</DropdownItem>
                      <DropdownItem>Sort by Alphabet</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </div>
              <CardComponent livestocks={this.state.livestocks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Investation;
