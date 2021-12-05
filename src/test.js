import React, { Component } from "react";
import axios from "axios";
import './test.css';
import moment from "moment";
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
    
        let now = new Date();
        var forceHour;
        const hour = forceHour == null ? now.getHours() : forceHour;
        if (hour < 9) {
          now = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        }
        //var c= now.getFullYear() + "/"+ now.getMonth()+ "/"+ now.getDate()+" 8:00";
        //var f = c.toString();
        //var e = "2021/10/22 8:00";
        
      
      

    {/*

      if (data == null) return null; */}
    return (
      <div>
        
        <div className="live-indicator-wrapper">
        <div className="pulse">    </div> 
        Last updated: 
        {moment(now).format(' MMM Do YYYY')}
        {moment("2021/10/23 22:00").startOf('hour').fromNow()}
        
        
        
      

        {/* {d.toString()} */}

 

        </div>
    
       
        

      </div>
    )
  }
}
