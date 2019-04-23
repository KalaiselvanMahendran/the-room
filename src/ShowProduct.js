import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
          pro:[],
          user:null
        }
        this.getprc = this.getprc.bind(this);
    }
   componentDidMount() {
     this.getprc()
     this.getuser()
   }
   getuser = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/user",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then((response) => {
      this.setState({
        user: response.data.id

      })
    })
   }
getprc = () => {
  axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/getproducts",
  }).then((res) => {
    this.setState({
      pro: res.data
    })
  })
}
  render() {   
    const image = localStorage.getItem("Image");

      const loggedin = localStorage.getItem('access_token');
    return (
     loggedin ? 

      <div>
        <div
            style={{
              backgroundColor: "rgb(17, 141, 219)",
              padding: "2%",
              width: "100vw"
            }}
          >
            <form>
              <input
                type="text"
                style={{
                  color: "rgb(17, 141, 219)",
                  float: "right",
                  borderRadius: "6%",
                  display: "inline-block"
                }}
                placeholder="Search"
              />
              <i
                style={{ position: "absolute", left: "96%", top: "32px" }}
                className="fas fa-search"
              />
            </form>
          </div>
          <div className="row">
            <div
              className="col-lg-2 col-xl-2 col-md-2 col-sm-4 col-xs-4"
              style={{ boxShadow: "5px 0 5px -5px #333", height: "100vh" }}
            >
              <div className="" style={{ marginTop: "18%" }}>
                <div
                  className="text-center"
                  style={{
                    display: "inline-block",
                    width: "15.8vw",
                    padding: "0"
                  }}
                >
                  <img
                    src={image}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "50%"
                    }}
                  />
                  <center>
                    <span
                      className="mb-4"
                      type="button"
                      style={{
                        display: "block",
                        boxShadow: "0 0 5px #333",
                        backgroundColor: "white",
                        marginTop: "20px",
                        width: "60%",
                        color: "rgb(17, 141, 219)"
                      }}
                    >
                      Name
                    </span>
                  </center>
                </div>
                <div
                  className="text-center mt-3"
                  style={{
                    display: "inline-block",
                    width: "16vw",
                    padding: "0"
                  }}
                >
                  {" "}
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                      Dashboard
                    </h5>
                  </Link>
                  <Link to="/vendor" style={{ textDecoration: "none" }}>
                    <h5
                      className="mb-4"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(89, 224, 127)",
                        border: "2px solid green",
                        padding: "4px"
                      }}
                    >
                      Vendor
                    </h5>
                  </Link>
                  <Link to="/buyer" style={{ textDecoration: "none" }}>
                    <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                      Buyer
                    </h5>
                  </Link>
                  <Link to="/setting" style={{ textDecoration: "none" }}>
                    <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                      Settings
                    </h5>
                  </Link>
                  <Link to="/logout" style={{ textDecoration: "none" }}>
                    <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                      Logout
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xl-10 col-sm-8">
          <div className="row">
          {this.state.pro.map((res) => {
          return (
            <div key={res.id} className="col-lg-4 col-xl-4 col-sm-4">
              
              <div className="card mt-5" style={{ width: '18rem' }}>
  <img className="card-img-top" src={`http://127.0.0.1:8000/${res.image}`} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="text-center text-primary">{res.product}   {this.state.user}
</h5>
  { this.state.user === res.user_id &&
  <center><button className="btn-danger" style={{ color:'white', padding:'6px', width:'60%' }} onClick={() => {

    localStorage.setItem('pro_id', res.id);
    this.props.history.push('/edit/product')

 }}>Edit</button></center>}
  </div>
</div>

            </div>
          )
          })}
    
          </div>
</div>
    </div>
    
    </div> : this.props.history.push('/')
     )
  }
}
