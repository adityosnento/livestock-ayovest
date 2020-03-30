import React, { Component } from "react";
// import AboutComponent from "../components/home/AboutComponent";
// import InvestmentComponent from "../components/home/InvestmentComponent";
import CardComponent from "../components/home/CardComponent";
import ButtonLink from "../components/home/ButtonLink";
import InvestasiTerpopler from "../components/InvestasiTerpopler";
import Sliders from "../components/home/Slider/Slider"
import WhyUs from "../components/home/WhyUs";
import StepInvests2 from "../components/home/Stepinvest(2)"

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">

        <Sliders/>
        <WhyUs/>
        <StepInvests2/>      
        <InvestasiTerpopler />
        <CardComponent />
        <ButtonLink title="Find More"/>
      </div>
    );
  }
}
