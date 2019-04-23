import React, { Component } from 'react'
import CsvParse from '@vtex/react-csv-parse'
import axios from 'axios';

export default class AddUsers extends Component {
  constructor(props) {
      super(props);
      this.state  = {
       email: []
      }
  }
  handleData = data => {
    this.setState({ data })

    console.log(data)
  }
  capemail = (e) => {
      if(e.target.value === "")
 {
    this.setState({
        email:[...this.state.email]
    })
 }   
 else {
 this.setState({
          email:[...this.state.email, e.target.value]
      })
      console.log(this.state.email);

  }
}
getdatausers = () => {

    // var dat = new FormData();

    //     dat.append('users', this.state.email);

    axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/createuser",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        data: {
          users: this.state.email
        }

      }).then(function(response) {
        console.log(response);
      });
    }
  getinput = () => {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text")
    x.classList.add('form-control')
    x.addEventListener('change', this.capemail);
    x.classList.add('mt-3')

document.getElementById("valuess").appendChild(x);
  }
  render() {
    const keys = [
        "header1",
        "header2",
        "header3",
        "header4",
        "header5",
      ]
    return (
        
      <div>
          <h1></h1>
        <CsvParse
      keys={keys}
      onDataUploaded={this.handleData}
      onError={this.handleError}
      render={onChange =>  <fieldset>
        <legend>Add Employees</legend>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            name="pro"
            id="input"
            disabled
            accept=".csv"
            onChange={this.getlogo}
          />
          <label className="custom-file-label" id="file">
upload csv          </label>
        </div>
      </fieldset>}
    /> 
    
    <span style={{ display:'block', fontWeight:'bold',marginTop:'10px', color:'black', textAlign:'center' }}>Or</span>
<div>
    <fieldset id="valuess" style={{ marginTop:'10px' }}>
                        <legend>Email</legend>
                        <input
                          type="text"
                          style={{ display:'inline' }}
                          onBlur={this.capemail}
                          name="desc"
                        />
                      </fieldset>

                      <input
                      onClick={this.getinput}
                      type="button" value="Add multiple Users" className=" btn-primary btn-block" style={{ marginTop:'10px', padding:'10px' }}/>
                     
                     <input
                      onClick={this.getdatausers}
                      type="button" value="submit" className=" btn-warning btn-block" style={{ marginTop:'10px', color:'white', padding:'10px' }}/>
                      
                      </div>
                      {this.state.email.map(res => {
                        return <h1>{res.email}</h1>
                      })}
         </div>
    );
  }
}
