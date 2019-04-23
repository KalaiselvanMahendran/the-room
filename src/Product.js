import React from 'react';
import {Link} from 'react-router-dom';

export default function Product() {
    const image = localStorage.getItem('Image')

  return (
    <div>
        <div style={{backgroundColor:'rgb(17, 141, 219)', padding:'2%', width:'100vw'}}>
  <form>
      <input type="text"  style={{ color:'rgb(17, 141, 219)', float:'right', borderRadius:'6%', display:'inline-block'}} placeholder="Search"/>
      <i style={{position:'absolute', left:'96%', top:'32px'}} class="fas fa-search"></i>
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
              <h5 className="mb-4" style={{ color: "rgb(17, 141, 219)" }}
              >

                Dashboard
                
              </h5>
              </Link>
              <Link to="/vendor" style={{textDecoration:'none'}}>

              <h5 className="mb-4"
                style={{
                  color: "white",
                  backgroundColor: "rgb(89, 224, 127)",
                  border: "2px solid green",
                  padding: "4px"
                }}>
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
          </div>
          <div className="col-lg-10 col-xl-10 col-md-2 col-sm-4 col-xs-4">
          <center>
              
          <div style={{marginTop:'50px', fontSize:'150px'}}>
             
              <span style={{border:'3px solid black', borderStyle:'dotted', display:'inline-block', padding:'100px', width:'30vw'}}>
              <Link style={{textDecoration:'none'}} to="/addproduct">
              +
              </Link>

              </span>

          </div>
          <b >Add a Product</b>

          </center>
          </div>

          </div>
    </div>
  )
}
