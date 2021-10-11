import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        console.log(res.data);
        const States = res.data;
        this.setState({ StateData: States });
      });
  }

  render() {
    const data = this.state.StateData.lastOriginUpdate;
       var d = new Date(data);
    {/*

      if (data == null) return null; */}
    return (
      <div>
        
  
    
         {d.toString()}


    
       
        

      </div>
    );
  }
}
