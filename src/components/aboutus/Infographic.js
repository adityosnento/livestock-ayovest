import React, { Component } from 'react'
import './Infographic.scss'

export default class Infographic extends Component {
    render() {
        return (
            <div className="container__data">
        <div className="container__data2">
          <div className="container__data__content">
            <div className="flex__title">
              <img src={require("../../asset/Service/money.svg")} alt="logo" />
              <div className="container__data__content__padding">
              <h1>12-30%</h1>
              <p>AVERAGE OF SHARING</p>
            </div>
            </div>
          </div>

          <div className="container__data__content">
            <div className="flex__title">
              <img src={require("../../asset/Service/challenge.svg")} alt="logo" />
              <div className="container__data__content__padding">
              <h1>90.38%</h1>
              <p>LEVEL OF SUCCESS</p>
            </div>
            </div>
          </div>

          <div className="container__data__content">
            <div className="flex__title">
              <img src={require("../../asset/Service/accumulation.svg")} alt="logo" />
              <div className="container__data__content__padding">
              <h1>SGD 3M</h1>
              <p>Total Oustanding Loans</p>
            </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
