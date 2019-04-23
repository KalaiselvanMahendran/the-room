import React from 'react'
import sug from '../src/images/main_landing_page.png';
import {Link} from 'react-router-dom';
import './index.css'
export default function MainBoard() {
    const image = localStorage.getItem('Image')
  return (
    <div>
<div className="row">
        <div
          className="col-lg-2 col-xl-2 col-md-2 col-sm-4 col-xs-4"
          style={{ boxShadow: "5px 0 5px -5px #333", height: "100vh" }}
        >
          <div className="" style={{ marginTop: "18%" }}>
            <div
              className="text-center"
              style={{ display: "inline-block", width: "15.8vw", padding: "0" }}
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
              style={{ display: "inline-block", width: "16vw", padding: "0" }}
            > <Link to="/dashboard" style={{textDecoration:'none'}}>
              <h5
                className="mb-4"
                style={{
                  color: "white",
                  backgroundColor: "rgb(89, 224, 127)",
                  border: "2px solid green",
                  padding: "4px"
                }}
              >

                Dashboard
                
              </h5>
              </Link>
              <Link to="/vendor" style={{textDecoration:'none'}}>

              <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                Vendor
              </h5>
              </Link>
              <Link to="/buyer" style={{textDecoration:'none'}}>

              <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
                Buyer
              </h5>
              </Link><Link to="/setting" style={{textDecoration:'none'}}>

<h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
  Settings
</h5>
</Link>
<Link to="/logout" style={{textDecoration:'none'}}>

<h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}>
  Logout
</h5>
</Link>
    
            </div>
          </div>
          <img src={sug} alt="main dashboard" style={{ position:"absolute", height:'100vh', width:'90vw',top:'0', left:"100%", zIndex:'-1'}} />

        </div>
        <div className="col-lg-10 col-sm-10 col-xl-10">
         <Link to="/vendor" className="btn" style={{display:'inline-block', backgroundColor:'rgb(245, 168, 65)', marginTop:'50%', color:'white', marginLeft:'20%', width:'140px'}}><b>Vendor</b></Link>
         <Link to="/buyer" className="btn" style={{display:'inline-block', backgroundColor:'rgb(245, 168, 65)', marginTop:'50%', color:'white', marginLeft:'40%', width:'140px'}}><b>Buyer</b></Link>

        </div>
      </div>
</div>
  )
}
