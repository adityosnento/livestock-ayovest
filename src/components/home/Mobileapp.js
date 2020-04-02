import React, { Component } from 'react'
import './Mobileapp.scss'

export default class Mobileapp extends Component {
    render() {
        return (
            <div className="container__mobileapp"> 
                <div className="container__img">
                <img
                    src={require("../../asset/auth/mockup.png")}
                    alt="logo"
                  />
                </div>
                <div className="container__contant">
                    <h1>The Best of AYOvest at Your Fingertips</h1>
                    <p>A great deal of options for invest in livestocks like cow, goat, duck, and chicken. Smart and secure livestocks with high technology. Even more convenient with AYOvest App. Download AYOvest App now!</p>
                    <div className="container__badge">
                    <img
                    src={require("../../asset/auth/playstore.png")}
                    alt="logo"
                  />
                  <p>or</p>
                  <img
                    src={require("../../asset/auth/apple.png")}
                    alt="logo"
                    id="applebadge"
                  />
                   </div>
                </div>
            </div>
        )
    }
}
