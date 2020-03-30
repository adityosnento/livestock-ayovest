import React from 'react';
import {connect} from 'react-redux';
import '../MainPage/Mainpage.scss';
import Slider from '../FullyComponent/Slider/Slider'
import AboutUs from '../FullyComponent/AboutUs/AboutUs'
import Stepinvest from '../FullyComponent/StepInvestation/Stepinvest'
import Cardpopular from '../FullyComponent/Cardpopular/Cardpopular'

const Mainpage = () => {
    return (
        <div className="mainpage-container">
          <Slider/>
          <AboutUs/>
          <Stepinvest/>
          <Cardpopular/>
        </div>

    )
}

export default connect()(Mainpage);