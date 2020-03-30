import React, { Component } from "react";

export default class ImagesComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="yeya" style={{ width: "100%" }} />
      </div>
    );
  }
}
