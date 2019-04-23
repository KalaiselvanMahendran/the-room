import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./addproduct.css";
import axios from "axios";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prcate: [],
      product: "",
      desc: "",
      cate: "",
      teams: "",
      userp: "",
      buyerp: "",
      keyword: "",
      url: "",
      featureimage: null,
      pitchdesk: null,
      image: null,
      disp: true,
      whteam: [],
      uper: [],
      buyer: [],
      keyword: []
    };
  }

  getval = e => {
    this.setState({
      product: e.target.value
    });
  };

  getdesc = e => {
    this.setState({
      desc: e.target.value
    });
  };

  getlogo = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  getpitch = e => {
    this.setState({
      pitchdesk: e.target.files[0]
    });
  };
  getbuy = e => {
    if (this.state.buyer.includes(e.target.name)) {
      console.log("already");
    } else {
      this.setState({
        buyer: [...this.state.buyer, e.target.name]
      });

      console.log(JSON.stringify(this.state.buyer));
    }
  };
  getupload = e => {
    this.setState({
      featureimage: e.target.files[0]
    });
  };
  getprc = e => {
    if (this.state.prcate.includes(e.target.name)) {
      console.log("already");
    } else {
      this.setState({
        prcate: [...this.state.prcate, e.target.name]
      });

      console.log(JSON.stringify(this.state.prcate));
    }
  };
  geturl = e => {
    this.setState({
      url: e.target.value
    });
  };
  getkeyword = e => {
    if (this.state.keyword.includes(e.target.name)) {
      console.log("already");
    } else {
      this.setState({
        keyword: [...this.state.keyword, e.target.name]
      });
      console.log(JSON.stringify(this.state.keyword));
    }
  };

  getwhteam = e => {
    if (this.state.whteam.includes(e.target.name)) {
      console.log("already");
    } else {
      this.setState({
        whteam: [...this.state.whteam, e.target.name]
      });
      console.log(JSON.stringify(this.state.whteam));
    }
  };
  getuper = e => {
    if (this.state.uper.includes(e.target.name)) {
      console.log("already");
    } else {
      this.setState({
        uper: [...this.state.uper, e.target.name]
      });
      console.log(JSON.stringify(this.state.uper));
    }
  };
  removepre = (res, e) => {
    this.setState({
      precate: this.state.prcate.splice(this.state.prcate.indexOf(res))
    });

    console.log(this.state.prcate);
  };
  removewhteam = (res, e) => {
    this.setState({
      whteam: [this.state.whteam.splice(this.state.whteam.indexOf(res))]
    });

    console.log(this.state.whteam);
  };
  product = event => {
    event.preventDefault();
    let pd = new FormData();
    pd.append("product", this.state.product);
    pd.append("desc", this.state.desc);
    pd.append("cate", this.state.prcate);
    pd.append("image", this.state.image, this.state.image.name);
    pd.append("teams", this.state.whteam);
    pd.append("userp", this.state.uper);
    pd.append("buyerp", this.state.buyer);
    pd.append("keyword", this.state.keyword);
    pd.append("url", this.state.url);
    pd.append(
      "featureimage",
      this.state.featureimage,
      this.state.featureimage.name
    );
    pd.append("pitchdesk", this.state.pitchdesk, this.state.pitchdesk.name);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/product",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      },
      data: pd
    })
      .then(res => {
        console.log(res);
        this.props.history.push("/products");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const token = localStorage.getItem("access_token");
    const image = localStorage.getItem("Image");

    return (
      token && (
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
              <div id="form" className="_form">
                <form onSubmit={this.product}>
                  <h4 className="text-center" style={{ color: "" }}>
                    Enter Product details
                  </h4>

                  {this.state.disp && (
                    <React.Fragment>
                      <fieldset>
                        <legend>Product Name</legend>
                        <input
                          onChange={this.getval}
                          type="text"
                          name="product"
                        />
                      </fieldset>

                      <fieldset>
                        <legend>Product Description</legend>
                        <input
                          onChange={this.getdesc}
                          type="text"
                          name="desc"
                        />
                      </fieldset>
                      <fieldset>
                        <legend>Product Logo</legend>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            name="pro"
                            id="input"
                            accept=".jpg, .png, .svg"
                            onChange={this.getlogo}
                          />
                          <label className="custom-file-label" id="file">
                            Choose file...
                          </label>
                        </div>
                      </fieldset>
                      {this.state.image && (
                        <legend>
                          <span style={{ color: "black" }}>
                            {" "}
                            <b>{this.state.image.name} </b>
                          </span>
                        </legend>
                      )}
                      <fieldset>
                        <legend>
                          Under which functional category it will fall?
                        </legend>
                        <div className="dropdown">
                          <input
                            type="text"
                            onChange={this.getfunccate}
                            style={{ display: "inline-block", width: "25vw" }}
                          />
                          <div className="dropdown-content">
                            {!this.state.prcate.includes("HR") && (
                              <a href="#" name="HR" onClick={this.getprc}>
                                Hr
                              </a>
                            )}
                            {!this.state.prcate.includes("Sales") && (
                              <a
                                href="#"
                                name="Sales"
                                onClick={this.getprc}
                                className="prc"
                              >
                                Sales
                              </a>
                            )}
                            {!this.state.prcate.includes("Engineering") && (
                              <a
                                href="#"
                                name="Engineering"
                                onClick={this.getprc}
                                className="prc"
                              >
                                Engineering
                              </a>
                            )}
                          </div>
                        </div>
                      </fieldset>

                      {this.state.prcate.map(res => {
                        return (
                          <span
                            id={res}
                            key={this.state.prcate.indexOf(res)}
                            className="alert alert-primary"
                            style={{
                              display: "inline-block",
                              marginTop: "20px"
                            }}
                          >
                            {" "}
                            &nbsp;<b>{res} </b>{" "}
                            <a
                              href="#"
                              style={{ textDecoration: "none" }}
                              onClick={(res, e) => {
                                this.setState({
                                  precate: this.state.prcate.splice(
                                    this.state.prcate.indexOf(res)
                                  )
                                });

                                console.log(this.state.prcate);
                              }}
                              className="text-danger"
                            >
                              {" "}
                              &nbsp;X
                            </a>
                          </span>
                        );
                      })}
                      <input
                        className="btn btn-block"
                        onClick={() => this.setState({ disp: false })}
                        type="button"
                        value="Continue"
                      />
                    </React.Fragment>
                  )}
                  {!this.state.disp && (
                    <React.Fragment>
                      <fieldset>
                        <legend>
                          Which teams are likely use your product?
                        </legend>
                        <div className="dropdown">
                          <input
                            type="text"
                            readOnly
                            style={{ display: "inline-block", width: "25vw" }}
                          />
                          <div className="dropdown-content">
                            {!this.state.whteam.includes("HR") && (
                              <a href="#" onClick={this.getwhteam} name="HR">
                                Hr
                              </a>
                            )}
                            {!this.state.whteam.includes("Sales") && (
                              <a
                                href="#"
                                name="Sales"
                                onClick={this.getwhteam}
                                className="prc"
                              >
                                Sales
                              </a>
                            )}
                            {!this.state.whteam.includes("Engineering") && (
                              <a
                                href="#"
                                name="Engineering"
                                onClick={this.getwhteam}
                                className="prc"
                              >
                                Engineering
                              </a>
                            )}
                          </div>
                        </div>
                      </fieldset>

                      {this.state.whteam.map(res => {
                        return (
                          <span
                            key={this.state.whteam.indexOf(res)}
                            name={res}
                            className="alert alert-primary"
                            style={{
                              display: "inline-block",
                              marginTop: "20px"
                            }}
                          >
                            {" "}
                            &nbsp;<b>{res} </b>{" "}
                            <a
                              href="#"
                              style={{ textDecoration: "none" }}
                              onClick={res => {
                                this.setState({
                                  whteam: this.state.whteam.filter(index =>
                                    this.state.whteam.indexOf(index)
                                  )
                                });
                                console.log(this.state.whteam);
                              }}
                              className="text-danger"
                            >
                              {" "}
                              &nbsp;X
                            </a>
                          </span>
                        );
                      })}

                      <fieldset>
                        <legend>Who is your ideal User personna?</legend>
                        <div className="dropdown">
                          <input
                            type="text"
                            readOnly
                            style={{ display: "inline-block", width: "25vw" }}
                          />
                          <div className="dropdown-content">
                            {!this.state.uper.includes("HR") && (
                              <a href="#" onClick={this.getuper} name="HR">
                                Hr
                              </a>
                            )}
                            {!this.state.uper.includes("ceo") && (
                              <a
                                href="#"
                                name="ceo"
                                onClick={this.getuper}
                                className="prc"
                              >
                                Ceo
                              </a>
                            )}
                            {!this.state.uper.includes("cto") && (
                              <a
                                href="#"
                                name="cto"
                                onClick={this.getuper}
                                className="prc"
                              >
                                Cto
                              </a>
                            )}
                          </div>
                        </div>
                      </fieldset>

                      {this.state.uper.map(res => {
                        return (
                          <span
                            key={this.state.uper.indexOf(res)}
                            name={res}
                            className="alert alert-primary"
                            style={{
                              display: "inline-block",
                              marginTop: "20px"
                            }}
                          >
                            {" "}
                            &nbsp;<b>{res} </b>{" "}
                            <a
                              href="#"
                              style={{ textDecoration: "none" }}
                              onClick={e => {
                                this.setState({
                                  uper: this.state.uper.filter(index =>
                                    this.state.uper.indexOf(index)
                                  )
                                });
                                console.log(this.state.uper);
                              }}
                              className="text-danger"
                            >
                              {" "}
                              &nbsp;X
                            </a>
                          </span>
                        );
                      })}

                      <fieldset>
                        <legend>Who is your ideal Buyer personna?</legend>
                        <div className="dropdown">
                          <input
                            type="text"
                            readOnly
                            style={{ display: "inline-block", width: "25vw" }}
                          />
                          <div className="dropdown-content">
                            {!this.state.buyer.includes("HR") && (
                              <a href="#" onClick={this.getbuy} name="HR">
                                Hr
                              </a>
                            )}
                            {!this.state.buyer.includes("ceo") && (
                              <a
                                href="#"
                                name="ceo"
                                onClick={this.getbuy}
                                className="prc"
                              >
                                CEO
                              </a>
                            )}
                            {!this.state.buyer.includes("cto") && (
                              <a
                                href="#"
                                name="cto"
                                onClick={this.getbuy}
                                className="prc"
                              >
                                CTO
                              </a>
                            )}
                          </div>
                        </div>
                      </fieldset>

                      {this.state.buyer.map(res => {
                        return (
                          <span
                            key={this.state.buyer.indexOf(res)}
                            name={res}
                            className="alert alert-primary"
                            style={{
                              display: "inline-block",
                              marginTop: "20px"
                            }}
                          >
                            {" "}
                            &nbsp;<b>{res} </b>{" "}
                            <a
                              href="#"
                              style={{ textDecoration: "none" }}
                              onClick={e => {
                                this.setState({
                                  buyer: this.state.buyer.filter(index =>
                                    this.state.buyer.indexOf(index)
                                  )
                                });
                                console.log(this.state.buyer);
                              }}
                              className="text-danger"
                            >
                              {" "}
                              &nbsp;X
                            </a>
                          </span>
                        );
                      })}

                      <fieldset id="keyw">
                        <legend>Keyword to discover your product better</legend>
                        <div className="dropdown">
                          <input
                            type="text"
                            readOnly
                            style={{ display: "inline-block", width: "25vw" }}
                          />
                          <div className="dropdown-content">
                            {!this.state.keyword.includes("HR") && (
                              <a
                                href="#keyw"
                                onClick={this.getkeyword}
                                name="HR"
                              >
                                Hr
                              </a>
                            )}
                            {!this.state.keyword.includes("Sales") && (
                              <a
                                href="#keyw"
                                name="Sales"
                                onClick={this.getkeyword}
                                className="prc"
                              >
                                Sales
                              </a>
                            )}
                            {!this.state.keyword.includes("Engineering") && (
                              <a
                                href="#keyw"
                                name="Engineering"
                                onClick={this.getkeyword}
                                className="prc"
                              >
                                Engineering
                              </a>
                            )}
                          </div>
                        </div>
                      </fieldset>

                      {this.state.keyword.map(res => {
                        return (
                          <span
                            key={this.state.keyword.indexOf(res)}
                            name={res}
                            className="alert alert-primary"
                            style={{
                              display: "inline-block",
                              marginTop: "20px"
                            }}
                          >
                            {" "}
                            &nbsp;<b>{res} </b>{" "}
                            <a
                              href="#"
                              style={{ textDecoration: "none" }}
                              onClick={res => {
                                this.setState({
                                  keyword: this.state.keyword.filter(index =>
                                    this.state.keyword.indexOf(index)
                                  )
                                });
                                console.log(this.state.keyword);
                              }}
                              className="text-danger"
                            >
                              {" "}
                              &nbsp;X
                            </a>
                          </span>
                        );
                      })}

                      <fieldset>
                        <legend>
                          Feature file uploads based on tags and details
                          mentioned
                        </legend>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            name="detailtag"
                            accept=".png,.jpg"
                            onChange={this.getupload}
                          />
                          <label className="custom-file-label" id="file">
                            Choose file...
                          </label>
                        </div>
                      </fieldset>
                      {this.state.featureimage && (
                        <legend>
                          <span style={{ color: "black" }}>
                            {" "}
                            <b>{this.state.featureimage.name} </b>
                          </span>
                        </legend>
                      )}
                      <fieldset>
                        <legend>Pitch Desk</legend>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            name="pitchdesk"
                            accept=".pdf"
                            onChange={this.getpitch}
                          />
                          <label className="custom-file-label" id="file">
                            Choose file...
                          </label>
                        </div>
                      </fieldset>
                      {this.state.pitchdesk && (
                        <legend>
                          <span style={{ color: "black" }}>
                            {" "}
                            <b>{this.state.pitchdesk.name} </b>
                          </span>
                        </legend>
                      )}
                      <fieldset>
                        <legend>Product URL</legend>
                        <input onChange={this.geturl} type="text" name="url" />
                      </fieldset>
                      <input type="submit" value="submit" />
                    </React.Fragment>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
