import React from "react";
import "../PersonalDetail/PersonalDetail.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PersonalDetail extends React.Component {
  constructor(props) {
    super(props);

    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    !token && (window.location.href = "/");

    this.state = {
      id: id
    };
  }
  render() {
    return (
      <div>
        <div className="full__container">
          <div className="container__left">
            <img src={require("../../asset/image/user1.jpeg")} alt="logo" />
            <h3>Adityo S. Nento</h3>
            <p>Investor</p>
            <div className="subclass__nav">
              <h4>Profile</h4>
              <h4>Password</h4>
              <h4>Address</h4>
            </div>
          </div>
          <div className="container__right">
            <div className="container__right__top">
              <h1>Your Details</h1>
              <p>Details will be saved to streamline future Investment</p>
            </div>
            <div className="container__right__bottom">
              <div className="container__title__profile">
                <i className="fa fa-user-edit"></i>
                <h4>Profile</h4>
              </div>
              <div className="display__flex">
                <form>
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Adityo S. Nento</label>
                  </div>

                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>adityosnento11@gmail.com</label>
                  </div>

                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>+6282194281585</label>
                  </div>
                </form>
              </div>

              <div className="container__title__profile">
                <i className="fa fa-map-marker-alt"></i>
                <h4>Location</h4>
              </div>
              <div className="display__flex">
                <form>
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Indonesia</label>
                  </div>

                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Gorontalo</label>
                  </div>

                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>JL. Sultan Botutihe No.54</label>
                  </div>

                  <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>76112</label>
                  </div>
                </form>
              </div>
            </div>

            <div className="container__right__bottom2">
              <div className="container__title__profile">
                <i className="fa fa-key"></i>
                <h4>Password</h4>
              </div>
              <div className="display__flex">
                <form>
                  <div className="group">
                    <input type="password" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                  </div>

                  <div className="group">
                    <input type="password" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password Confirmation</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
