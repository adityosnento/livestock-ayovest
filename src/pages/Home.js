import React, { Component } from "react";
// import AboutComponent from "../components/home/AboutComponent";
// import InvestmentComponent from "../components/home/InvestmentComponent";
import CardComponent from "../components/home/CardComponent";
import ButtonLink from "../components/home/ButtonLink";
import InvestasiTerpopler from "../components/InvestasiTerpopler";
import Sliders from "../components/home/Slider/Slider";
import WhyUs from "../components/home/WhyUs";
import StepInvests2 from "../components/home/Stepinvest(2)";
import Mobileapp from "../components/home/Mobileapp";
// import Ads from "../components/home/Ads"
import { liveStockGetAll } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <div className="page-container">
        <ToastContainer />
        <Sliders />
        <WhyUs />
        <StepInvests2 />
        <Mobileapp/>
        {/* <Ads/> */}
        <InvestasiTerpopler />
        <CardComponent livestocks={this.state.livestocks} />
        <ButtonLink title="Find More" />
      </div>
    );
  }
}
