import React, { Component } from 'react'
import './Infographic.scss'

export default class Infographic extends Component {
    render() {
        return (
            <div className="container__data">
        <div className="container__data2">
          <div className="container__data__content">
            <div className="flex__title">
              <h1>01</h1>
              <img src={require("../../asset/image/money.svg")} alt="logo" />
            </div>
            <div className="container__stepinvest__content__padding">
              <h1>INSTRUMENT INVESTASI</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>

          <div className="container__data__content">
            <div className="flex__title">
              <h1>02</h1>
              <img src={require("../../asset/image/bank.svg")} alt="logo" />
            </div>
            <div className="container__data__content__padding">
              <h1>PAYMENT</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>

          <div className="container__data__content">
            <div className="flex__title">
              <h1>03</h1>
              <img src={require("../../asset/image/smartfarm.svg")} alt="logo" />
            </div>
            <div className="container__data__content__padding">
              <h1>CAPITAL TO BREEDER</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
