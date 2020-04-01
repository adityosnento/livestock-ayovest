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
import { liveStockGetAll, liveStockGetCategory } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

class Investation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      livestocks: [],
      totalPages: 0
    };
  }

  componentDidMount = props => {
    liveStockGetAll()
      .then(res => {
        this.setState({
          livestocks: res.data.data.docs,
          totalPages: res.data.data.totalDocs
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

  handleFilterBy = e => {
    const category = e.target.value;

    if (category !== "") {
      liveStockGetCategory(category)
        .then(res => {
          this.setState({
            livestocks: res.data.data.docs,
            totalPages: res.data.totalDocs
          });
          toast.dismiss();
          toast.info("Showing " + category);
        })
        .catch(err => {
          toast.dismiss();
          toast.error(err.message);
        });
    } else {
      liveStockGetAll()
        .then(res => {
          this.setState({
            livestocks: res.data.data.docs,
            totalPages: res.data.totalDocs
          });
          toast.dismiss();
          toast.info("Showing All kinds");
        })
        .catch(err => {
          toast.dismiss();
          toast.error(err.message);
        });
    }
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
                <input
                  type="radio"
                  name="sort-by"
                  value={null}
                  onChange={this.handleFilterBy}
                />
                <p>All</p>
              </div>
              <div className="category__filter">
                <input
                  type="radio"
                  name="sort-by"
                  value="cow"
                  onChange={this.handleFilterBy}
                />
                <p>Cow</p>
              </div>
              <div className="category__filter">
                <input
                  type="radio"
                  name="sort-by"
                  value="chicken"
                  onChange={this.handleFilterBy}
                />
                <p>Chicken</p>
              </div>
              <div className="category__filter">
                <input
                  type="radio"
                  name="sort-by"
                  value="goat"
                  onChange={this.handleFilterBy}
                />
                <p>Goat</p>
              </div>
              <div className="category__filter">
                <input
                  type="radio"
                  name="sort-by"
                  value="duck"
                  onChange={this.handleFilterBy}
                />
                <p>Duck</p>
              </div>
            </div>
            <div className="category__right">
              <div className="category__top">
                <div>
                  <p>
                    Showing 1-{this.state.totalPages} of {this.state.totalPages}{" "}
                    results
                  </p>
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
