import React, { Component } from "react";
import axios from "axios";
import "./TESTER.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Keralat extends Component {
    constructor() {
      super();
      this.state = {
        StateData: [],
        TestData: [],
        objarray1: []
      

      };

     
    }

     

    

  
    componentDidMount() {
      axios
        .get("https://data.covid19bharat.org/v4/min/data.min.json")
        .then((res) => {
          
          const States = res.data;
          this.setState({ StateData: States,TestData: res.data });
        });
    }

    compareByAsc(key) {
      return function(a, b) {
        if (a[key]  < b[key] ) return -1;
        if (a[key] > b[key] ) return 1;
        return 0;
      };
    }
  
    compareByDesc(key) {
      return function(a, b) {
        if (a[key]  < b[key] ) return 1;
        if (a[key] > b[key] ) return -1;
        return 0;
      };
    }
  
    sortBy(key) {
      var newE = this.state.StateData?.KL?.districts
        let keys= newE && Object.keys(newE)
        var objarray =[];
        

        (newE && Object.keys(newE).forEach(keyo => objarray.push({
          
          name: keyo, details: newE[keyo]
        
        })));
      /*this.setState({objarray1 : objarray})*/
      objarray = [...this.state.objarray1]
      let arrayCopy = [...this.state.objarray1];
      console.log(arrayCopy)
      const arrInStr = JSON.stringify(arrayCopy);
      arrayCopy.sort(this.compareByAsc(key));
      const arrInStr1 = JSON.stringify(arrayCopy);
      if (arrInStr === arrInStr1) {
        arrayCopy.sort(this.compareByDesc(key));
      }
      
      this.setState({ objarray : arrayCopy });
     
    }
      

  /*  compareBy(key, ascending) {
      let reverse = ascending ? 1 : -1;
      return function (a, b) {
        if (a[key] < b[key]) return -1 * reverse;
        if (a[key] > b[key]) return 1 * reverse;
        return 0;
      };
    }
       
  sortBy(key) {
    var newE = this.state.StateData?.KL?.districts
        let keys= newE && Object.keys(newE)
        var objarray =[];
        

        (newE && Object.keys(newE).forEach(keyo => objarray.push({
          
          name: keyo, details: newE[keyo]
        
        })));
    let arrayCopy = [...objarray];
    
    arrayCopy.sort(this.compareBy(key));
    this.setState({objarray: arrayCopy});
    console.log(objarray)
     }*/
  
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
        var data=this.state.StateData
        var newE = this.state.StateData?.KL?.districts;
        
        var objarray1 =[]; 
        

        (newE && Object.keys(newE).forEach(key => objarray1.push({
          
          name: key, details: newE[key]
        
        })));
        
        
      
        
    

       
       
       {/*  const data = this.state.StateData[0];
        if (data == null) return null;
        var a = parseInt (this.state.StateData[1].active)- parseInt (this.state.StateData[1].new_active)
      
        
        this.state.TestData.filter((itm, ky) => ky < 36).forEach(product => {
            
             product.QuantityOnHand = parseInt(product.new_positive) - parseInt(product.positive) ;
             Newdata.push(product)
         
         }) */}
         

      
        
        return (

            
            <div>
                 {this.state.StateData?.AN?.delta21_14?.confirmed} 
               <span>Andaman deceased now
               <input type="text" placeholder="Filter" onChange={this.filterList} />
                </span>
               
              

             

               <div id="mytable" className="table-responsive mt-4 ">
            <table  className="table table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th id="heade">Country</th>
                  <th onClick={() => this.sortBy("name")}>Total cases</th>
                  <th onClick={() => this.sortBy("deceased")}>New Cases</th>
                
      
                </tr>
              </thead>
              <tbody>
                { objarray1.map((filteredName,index) => {
                  return (
                    <tr>
                      <td>{filteredName?.name}</td>
                      <td className="text-end">{filteredName?.details?.total?.confirmed}</td>
                      <td className="text-end">{filteredName?.details?.total?.deceased}</td>
                      
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>



*/}  






            </div>
        )
    }
}
