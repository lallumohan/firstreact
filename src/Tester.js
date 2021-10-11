import React, { Component } from "react";
import axios from "axios";

export default class Tester extends Component {
    constructor() {
      super();
      this.state = {
        StateData: []
      };
    }
  
    componentDidMount() {
      axios
        .get("https://www.mohfw.gov.in/data/datanew.json")
        .then((res) => {
          console.log(res.data);
          const States = res.data;
          this.setState({ StateData: States });
        });
    }
  

    render() {
        const data = this.state.StateData[0];
        if (data == null) return null;
        var a = parseInt (this.state.StateData[1].active)- parseInt (this.state.StateData[1].new_active)

        return (
            <div>

               <span>Andaman deceased now-{this.state.StateData[2].sno} </span>
               {a}
               {parseInt (this.state.StateData[1].active)- parseInt (this.state.StateData[1].new_active)}
               {parseInt (this.state.StateData[36].new_positive)- parseInt (this.state.StateData[36].positive)}


                
            </div>
        )
    }
}

