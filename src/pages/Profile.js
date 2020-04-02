import React, { Component } from "react";
import PersonalDetail from "../components/PersonalDetail/PersonalDetail";


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: []
    };
  }

  componentDidMount = props => {};
  render() {
    return (
      <div>
        <PersonalDetail />
      </div>
    );
  }
}
