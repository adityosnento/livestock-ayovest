import React, { Component } from "react";
import PersonalDetail from "../components/PersonalDetail/PersonalDetail";
import ButtonLink from "../components/home/ButtonLink";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <PersonalDetail />
        <ButtonLink title="Submit" />
      </div>
    );
  }
}
