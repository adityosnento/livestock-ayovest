import React, { Component } from 'react'
import './Ads.scss'

export default class Ads extends Component {
    render() {
        return (
            <div className="container__ads">
                 <img
                    src={require("../../asset/auth/Banner.png")}
                    alt="logo"
                  />
            </div>
        )
    }
}
