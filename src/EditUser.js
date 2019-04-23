import React, { Component } from 'react';
import AddUsers from './AddUsers';
import axios from 'axios';

export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            deapartment:'',
            role: '',
            dash:false
        }

    }
    getUsers = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('name', this.state.name);
        data.append('department', this.state.deapartment);
        data.append('roleincompany', this.state.role );
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/edituser",
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            data: data
          }).then(function(response) {
            console.log(response);
          });
          this.props.history.push("/dashboard");


    }
    
    getname = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    getrole = (e) => {
        this.setState({
            role: e.target.value
        })
    }
    getDepartment = (e) => {
        this.setState({
            deapartment: e.target.value
        })
    }
  render() {
const access_token = localStorage.getItem('access_token');
const role = localStorage.getItem('role'); 

if(!access_token){
    this.props.history.push('/');
}
    return ( access_token && 
     <div id="form" className="_form">
     <h1 className="text-center">Enter your details</h1>
              <h3 style={{ color:'black' }}> This will edit your personal details</h3>
      <form onSubmit={this.getUsers}>    
              

              <fieldset>
                <legend>Fullname</legend>
                <input type="text" name="name" onChange={this.getname} />
              </fieldset>

              <fieldset>
                <legend>Role in company</legend>
                <input
                  type="text"
                  id="companydm"
                  onChange={this.getrole}
                />
              </fieldset>
              <fieldset>
                <legend>Department</legend>
                <input type="text" name="head" onChange={this.getDepartment} />
              </fieldset>
              <input type="submit" value="Submit" />

              </form>

              {role == 1 && 
            <div>
                <AddUsers/>

             </div>
            }

      </div>
    )
  }
}
