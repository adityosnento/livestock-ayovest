import React, { Component } from "react";
import AboutComponent from "../components/home/AboutComponent";
import InvestmentComponent from "../components/home/InvestmentComponent";
import CardComponent from "../components/home/CardComponent";
import ButtonLink from "../components/home/ButtonLink";
import PaginationComponent from "../components/PaginationComponent";
import InvestasiTerpopler from "../components/InvestasiTerpopler";
import Aboutus from "../components/home/AboutUs"
import StepInvest from "../components/home/Stepinvest"
import Sliders from "../components/home/Slider/Slider"
import WhyUs from "../components/home/WhyUs";

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">

        <Sliders/>
        <WhyUs/>
        {/* <Aboutus/> */}
        <StepInvest/>      
        <InvestasiTerpopler />
        <CardComponent />
        <ButtonLink title="Lihat Lebih Banyak" />
      </div>
    );
  }
}
