import React, { Component } from "react";
import axios from "axios";

export default class Moh extends Component {
  constructor() {
    super();
    this.state = {
      StateData1: [] , StateData2: []
    };
  }

  async componentDidMount() {

    const [firstResponse, secondResponse]= await Promise.all ([
      axios
      .get("https://www.mohfw.gov.in/data/datanew.json"),

      axios
      .get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")

    ])
  
        this.setState({ StateData1: firstResponse.data , StateData2: secondResponse.data });
    
  }

  render() {
    const data = this.state.StateData1[0];
    if (data == null) return null;
    const datao = this.state.StateData2.regionData;
    if (datao == null) return null;
    return (
      <div>
    
        <span>Andaman deceased-{this.state.StateData1[2].sno} </span>
       
        <span>Andhra deceased-{this.state.StateData2.regionData[3].region} </span>

      </div>
    )
  


   

       

  }


}
