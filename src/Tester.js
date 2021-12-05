import React, { Component } from "react";
import axios from "axios";
import "./TESTER.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Tester extends Component {
    constructor() {
      super();
      this.state = {
        StateData: [],
        TestData: []

      };

     
    }

     

    

  
    componentDidMount() {
      axios
        .get("https://www.mohfw.gov.in/data/datanew.json")
        .then((res) => {
          
          const States = res.data;
          this.setState({ StateData: States,TestData: res.data });
        });
    }

    compareByAsc(key) {
      return function(a, b) {
        if (parseInt(a[key])  < parseInt(b[key]) ) return -1;
        if (parseInt(a[key]) > parseInt(b[key])) return 1;
        return 0;
      };
    }

    compareByDesc(key) {
      return function(a, b) {
        if (parseInt(a[key]) < parseInt(b[key])) return 1;
        if (parseInt(a[key]) > parseInt(b[key])) return -1;
        return 0;
      };
    }

    sortBy(key) {
      let arrayCopy = [...this.state.TestData.filter((itm, ky) => ky < 36)];
      const arrInStr = JSON.stringify(arrayCopy);
      arrayCopy.sort(this.compareByAsc(key));
      const arrInStr1 = JSON.stringify(arrayCopy);
      if (arrInStr === arrInStr1) {
        arrayCopy.sort(this.compareByDesc(key));
      }
      this.setState({ TestData : arrayCopy });
    }
  
    filterList = (event) => {
      var updatedList = this.state.StateData;
      updatedList = updatedList.filter(function(list) {
        return (
          list.state_name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        );
      });
      this.setState({
        TestData: updatedList
      });
      };
    

    render() {
      
        var Newdata =[]
        const data = this.state.StateData[0];
        if (data == null) return null;
        var a = parseInt (this.state.StateData[1].active)- parseInt (this.state.StateData[1].new_active)
      
        
        this.state.TestData.filter((itm, ky) => ky < 36).forEach(product => {
            
             product.QuantityOnHand = parseInt(product.new_positive) - parseInt(product.positive) ;
             Newdata.push(product)
         
         })
         console.log(Newdata)
      
        
        return (
            <div>
                
               <span>Andaman deceased now-{this.state.StateData[2].sno}
               <input type="text" placeholder="Filter" onChange={this.filterList} />
               {this.state.StateData[1].tester} </span>

               {a}
               {parseInt (this.state.StateData[1].active)- parseInt (this.state.StateData[1].new_active)}
               {parseInt (this.state.StateData[34].new_positive)- parseInt (this.state.StateData[34].positive)}
               

               <div id="mytable" className="table-responsive mt-4 ">
            <table  className="table table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th id="heade">Country</th>
                  <th onClick={() => this.sortBy("new_positive")}>Total cases</th>
                  <th onClick={() => this.sortBy("QuantityOnHand")}>New Cases</th>
                
      
                </tr>
              </thead>
              <tbody>
                { Newdata.map((filteredName, index) => {
                  return (
                    <tr>
                      <td>{filteredName.state_name}</td>
                      <td className="text-end">{filteredName.new_positive}</td>
                      <td className="text-end">{filteredName.QuantityOnHand}</td>
                      
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>










            </div>
        )
    }
}

