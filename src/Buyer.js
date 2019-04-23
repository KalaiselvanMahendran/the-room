import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BuyerDetails from "./BuyerDetails";
const value = {
  product: "",
  desc: "",
  cate: ""
};
let image = "";
export default function Buyer(props) {
  const access_token = localStorage.getItem('access_token');

  axios({
    method:'GET',
    url:'http://127.0.0.1:8000/api/checkcompany',
    headers:{
     Authorization: `Bearer ${access_token}`
    }
  })
  .then((res) => {
    console.log(res);
    if(res.data.data !== "works") {   
      props.history.push('/newuser')
    }
 })
  const image = localStorage.getItem("Image");
  const [form, FormData] = useState(value);
  const [data, setData] = useState([]);
  const [img, SetImg] = useState(image);

  const token = localStorage.getItem("access_token");

  const handle = event => {
    FormData({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const getcompany = event => {
    event.preventDefault();
    setData(form);
    console.log(image);
    console.log(document.getElementById("file").files);
    axios
      .post("http://127.0.0.1:8000/api/product", {
        product: form.product,
        desc: form.desc,
        cate: form.cate,
        image: event.target.files[0]
      })

      .then(function(response) {
        console.log(response);
        props.history.push("/dashboard");
      });
  };
  return (
    token && (
      <div>
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 col-xs-12 col-sm-12">
            <BuyerDetails />
          </div>
        </div>
      </div>
    )
  );
}
