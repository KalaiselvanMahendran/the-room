import React, { useState, useEffect } from "react";
import "./form.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
let errors = "";
const value = {
  company: "",
  domain: "",
  head: "",
  number: "",
  email: "",
  region: ""
};
const value2 = {
  gender: "",
  customers: "",
  customersfree: "",
  funded: "",
  number: "",
  size: ""
};

function OnBoard(props) { 
  useEffect(() => {
    dataser()
    let email = localStorage.getItem("email");
    var domain = email.substring(email.lastIndexOf("@") + 1);
    document.getElementById("companydm").value = `${domain}`;
  }, []);
  let email = localStorage.getItem("email");
  var domain = email.substring(email.lastIndexOf("@") + 1);
  const [nothave, SetNot] = useState("");

  const access_token = localStorage.getItem("access_token");

  const dataser = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/checkcompany",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(res => {
      console.log(res);
      if (res.data.data === "works") {
        SetNot("They have");
        props.history.push("/edituser");
      } else if (res.data.role !== 1) {
        props.history.push("/edituser");
      }
    });
  };
  const image = localStorage.getItem("Image");
  const [form, FormData] = useState(value);
  const [form2, Formset] = useState(value2);
  const [values, valset] = useState([]);
  const [imh, setimage] = useState(null);
  const [comp, showcompany] = useState(true);
  const [data, setData] = useState([]);
  const handle = event => {
    FormData({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  let imgser = event => {
    setimage(event.target.files[0], event.target.files[0].name);
  };
  const getcompany = event => {
    event.preventDefault();

    setData(form);
    showcompany(false);
    window.scrollTo(500, 0);
  };
  const handler = event => {
    Formset({
      ...form2,
      [event.target.name]: event.target.value
    });
  };
  const getform = (e, response) => {
    e.preventDefault();
    valset(form2);
    if (
      data.company == "" ||
      data.email == "" ||
      data.head == "" ||
      data.number == "" ||
      data.region == "" ||
      form2.gender == "" ||
      form2.customers == "" ||
      form2.funded == "" ||
      form2.size == ""
    ) {
      window.scrollTo(500, 0);
      errors = "Please fill all the fields";
    } else {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/addcompany",
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        data: {
          comapny: data.company,
          email: data.email,
          domain: `${domain}`,
          head: data.head,
          number: data.number,
          region: data.region,
          gender: form2.gender,
          customers: form2.customers,
          customersfree: form2.customersfree,
          funded: form2.funded,
          size: form2.size,
          propicture: imh,
          pitchdesk: imh
        }
      }).then(function(response) {
        console.log(response);
        props.history.push("/edituser");
      });
    }
  };
  const makevisi = () => {
    document.getElementById("oprndef").style.display = "block";
  };
  const unvisi = () => {
    document.getElementById("oprndef").style.display = "none";
  };
  return (
    nothave !== "They have" && (
      <div>
        {comp && (
          <div id="form" className="_form">
            <form onSubmit={getcompany}>
              <h4 className="text-center">Enter company details</h4>
              <fieldset>
                <legend>Company Name</legend>
                <input type="text" name="company" onChange={handle} />
              </fieldset>

              <fieldset>
                <legend>Company Domain</legend>
                <input
                  type="text"
                  name="domain"
                  id="companydm"
                  readOnly
                  onChange={handle}
                />
              </fieldset>
              <fieldset>
                <legend>Head Quarters</legend>
                <input type="text" name="head" onChange={handle} />
              </fieldset>
              <fieldset>
                <legend>Phone number</legend>
                <input type="number" name="number" onChange={handle} />
              </fieldset>
              <fieldset>
                <legend>Email Address</legend>
                <input type="text" name="email" onChange={handle} />
              </fieldset>
              <fieldset>
                <legend>Region of operation</legend>
                <input type="text" name="region" onChange={handle} />
              </fieldset>
              <fieldset>
                <legend>Profile picture</legend>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    onChange={imgser}
                    accept="image/*"
                    name="pro"
                    id="prop"
                  />
                  <label className="custom-file-label">Choose file...</label>
                </div>
              </fieldset>

              <input type="submit" value="Continue" />
            </form>
          </div>
        )}
        {!comp && (
          <div>
            {errors && (
              <div
                style={{
                  color: "white",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "5%",
                  left: "10%",
                  padding: "10px",
                  textAlign: "center"
                }}
              >
                {" "}
                {errors}
              </div>
            )}
            <div id="form" className="_form">
              <form onSubmit={getform}>
                <h4 className="text-center">Enter company details</h4>
                <fieldset>
                  <legend>Choose the segment you cater into</legend>
                  <label
                    className=""
                    onClick={unvisi}
                    style={{ padding: "5px" }}
                  >
                    <input
                      type="radio"
                      value="startup"
                      onChange={handler}
                      name="gender"
                    />
                    <div className="radios imgradio">STARTUP</div>
                  </label>

                  <label
                    className=""
                    onClick={unvisi}
                    style={{ padding: "5px" }}
                  >
                    <input
                      type="radio"
                      onChange={handler}
                      value="SMB"
                      name="gender"
                    />
                    <div className="radios imgradio">SMB</div>
                  </label>

                  <label
                    className=""
                    onClick={unvisi}
                    style={{ padding: "5px" }}
                  >
                    <input
                      type="radio"
                      onChange={handler}
                      value="mid market"
                      name="gender"
                    />
                    <div className="radios imgradio">MID MARKET</div>
                  </label>
                  <label
                    onClick={makevisi}
                    className=""
                    style={{ padding: "5px" }}
                  >
                    <input
                      type="radio"
                      id="others"
                      name="gender"
                      value="others"
                    />
                    <div className="radios imgradio">OTHERS</div>
                  </label>
                </fieldset>
                <fieldset id="oprndef" style={{ display: "none" }}>
                  <legend>Define</legend>
                  <input type="text" name="gender" onChange={handler} />
                </fieldset>
                <fieldset>
                  <legend>How many customers do you have</legend>
                  <input
                    type="text"
                    onChange={handler}
                    name="customers"
                    placeholder="paid"
                  />
                  <input
                    type="text"
                    onChange={handler}
                    name="customersfree"
                    placeholder="free"
                    style={{ marginTop: "10px" }}
                  />
                </fieldset>
                <fieldset>
                  <legend>Is your Company funded ? </legend>
                  <label style={{ padding: "5px" }}>
                    <input
                      type="radio"
                      onChange={handler}
                      value="no"
                      name="funded"
                    />
                    <div className="radios imgradio">No</div>
                  </label>
                  <label style={{ padding: "5px" }}>
                    <input
                      type="radio"
                      onChange={handler}
                      value="public"
                      name="funded"
                    />
                    <div className="radios imgradio">Public</div>
                  </label>
                  <label style={{ padding: "5px" }}>
                    <input
                      type="radio"
                      onChange={handler}
                      value="private"
                      name="funded"
                    />
                    <div className="radios imgradio">Private</div>
                  </label>
                </fieldset>
                <fieldset>
                  <legend>What is typical deployment size? </legend>
                  <input type="text" onChange={handler} name="size" />
                </fieldset>
                <fieldset>
                  <legend>Upload pitch desk</legend>
                  <div className="custom-file">
                    <input type="file"
                      className="custom-file-input"
                      onChange={handler}
                      accept=".pdf"
                      name="pro"
                    />
                    <label className="custom-file-label" name="images">
                      Choose file...
                    </label>
                  </div>
                </fieldset>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        )}
        <img src={imh} />
      </div>
    )
  );
}
export default withRouter(OnBoard);
