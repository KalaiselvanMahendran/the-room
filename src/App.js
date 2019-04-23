import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

import { withRouter } from "react-router-dom";
import "./style.css";
import svg from "./images/welcome_page.png";
import axios from "axios";
function App(props) {
  const role = 1;
  const [errors, setError] = useState("");
  const responseGoogle = response => {
    console.log(response);
    if (response.profileObj.email.includes("@google.com")) {
      setError("This account is not a authorized account from a organization");
      console.log("error");
    } else {
      localStorage.setItem("Image", response.profileObj.imageUrl);
      localStorage.setItem("email", response.profileObj.email);

      axios
        .post("http://127.0.0.1:8000/api/register", {
          name: response.profileObj.givenName,
          email: response.profileObj.email,
          password: response.profileObj.email,
          role: role
        })

        .then(function(response) {
          localStorage.setItem("access_token", response.data.success.token);
          localStorage.setItem("role", response.data.success.role);
          props.history.push("/newuser");
          console.log(response);
        })

        .catch(function(error) {
          console.log(error)
          console.log('refused to connect to server');
          // if (
          //   error.response.data.errors.email ==
          //   "The email has already been taken."
          // ) {
            login();
          
        });
      const login = () => {
        localStorage.setItem("email", response.profileObj.email);

        axios
          .post("http://127.0.0.1:8000/api/login", {
            email: response.profileObj.email,
            password: response.profileObj.email
          })
          
          .then(response => {

            localStorage.setItem("access_token", response.data.success.token);
            localStorage.setItem("role", response.data.success.role);

            console.log(response);
            props.history.push("/dashboard");
          });
      };
    }
  };
  const newPage = () => {
    props.history.push("/nm");
  };
  const checklogeed = () => {
    return localStorage.getItem("access_token");
  };
  return (
    <div>
      {errors && (
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            position: "absolute",
            top: "5%",
            padding: "10px",
            textAlign: "center"
          }}
        >
          {" "}
          {errors}
        </div>
      )}
      
      <img src={svg} alt="welcome" className="setimage" />
      {checklogeed() ? null : (
        <GoogleLogin
           render={renderProps => (
            <button
              className="newLoginBtn--google"
              onClick={renderProps.onClick}
            >
              Signin with Google
            </button>
          )}
          onSuccess={responseGoogle}
        />
      )}
    </div>
  );
}
export default withRouter(App);
