import React, { Component } from "react";
import axios from "axios";
//import styles from './india.css'
import 'bootstrap-table/dist/bootstrap-table.min.js';
import 'bootstrap-table/dist/bootstrap-table.min.css';

//import "./vaccine.css";
export default class Vaccine extends Component {
  constructor() {
    super();
    this.state = {
      StateData: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports").then((res) => {
      console.log(res.data);
      const States = res.data;
      this.setState({ StateData: States });
    });
  }

  render() {
    var data = this.state.StateData.getBeneficiariesGroupBy;
    if (data == null) return null;
    

     var x_sum = this.state.StateData.getBeneficiariesGroupBy.reduce((acc, curr) => acc + curr.totally_vaccinated, 0);
    
      

     
     
    return (
    
      <div>
        <div className="container-fluid mt-5">

        <div className="row mt-5 ">
                    
                    <div className="col-md-6 mt-4">
                      <div class="card  text-center" style={{boxShadow: '#4db5ff 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 class="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400, color:'rgb(52, 224, 30)'}}>Total Vaccinations</h4>
                          <h1 class="card-title" style={{fontFamily:'Rubik',fontWeight:700,fontSize: "3rem"}}>{this.state.StateData.topBlock.vaccination.total}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                         
                        </div>
                      </div>
                    </div>
            
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#dc3545 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Dose 1</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.tot_dose_1}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#4cd97a 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Dose 2</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.tot_dose_2}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#ffc107 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Today Vaccination</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.today}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
    
                
</div>        


          
          <table data-toggle="table" data-click-to-select="true" data-pagination="true" data-page-list="[5, 10, 15, 20]" data-height="340" data-search="true" class="table-hover table-responsive" >
              <thead>
                <tr className="text-center">
                  <th data-sortable="true"></th>
                  <th data-sortable="true">TOTAL VACCINATIONS</th>
                  <th data-sortable="true">PARTIALLY VACCINATED</th>
                  <th data-sortable="true">FULLY VACCINATED</th>
                  <th data-sortable="true">VACCINATION TODAY</th>
                </tr>
              </thead>
              <tbody>
              {this.state.StateData.getBeneficiariesGroupBy.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td data-sortable="true" >{item.state_name}</td>
                      <td data-sortable="true" data-sort-order="desc" >{parseInt(item.total) }</td>
                      <td data-sortable="true" >{item.partial_vaccinated}</td>
                      <td  data-sortable="true">{item.totally_vaccinated}</td>
                      <td data-sortable="true" >{item.today}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          
  
          gggh
          {x_sum}
          
        </div>
      </div>
    );
  }
}
