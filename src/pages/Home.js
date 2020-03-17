import React, { Component } from "react";
import CarouselComponent from "../components/home/CarouselComponent";
import AboutComponent from "../components/home/AboutComponent";
import InvestmentComponent from "../components/home/InvestmentComponent";
import CardComponent from "../components/home/CardComponent";
import ButtonLink from "../components/home/ButtonLink";
import PaginationComponent from "../components/PaginationComponent";
import InvestasiTerpopler from "../components/InvestasiTerpopler";

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <CarouselComponent />
        <AboutComponent />
        <InvestmentComponent />
        <ButtonLink title="Lihat Investasi" />
        <InvestasiTerpopler />
        <CardComponent />
        <PaginationComponent />
        <ButtonLink title="Lihat Lebih Banyak" />
      </div>
    );
  }
}
