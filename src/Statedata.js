import React, { Component } from "react";
import axios from "axios";

export default class Statedata extends Component {
  constructor() {
    super();
    this.state = {
      StateData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        console.log(res.data);
        const States = res.data;
        this.setState({ StateData: States });
      });
  }

  render() {
    const data = this.state.StateData.AN;
    if (data == null) return null;
    return (
      <div>
        <span>Andaman deceased-{this.state.StateData.AN.total.deceased}</span>
        <span>Andaman confirmed-{this.state.StateData.AN.total.confirmed}</span>
        <span>ANDHRA deceased-{this.state.StateData.AP.total.deceased}</span>

      </div>
    );
  }
}
