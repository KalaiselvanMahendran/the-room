import React, { useState, useEffect } from "react";
import "./type.css";
import $ from "jquery";
const val = {
  value: ""
};
export default function BuyerDetails(props) {
  useEffect(() => {
    $(".btn").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800
        );
      }
    });
  });
  const [data, setdata] = useState(val);
  const [superdata, Setsuper] = useState([]);
  const [truedata, setrue] = useState(true);
  const [truenext, setnext] = useState(false);
  const [next, setNxt] = useState("");
  const [start, setstart] = useState("");
  const [vals, vas] = useState(true);
  const [settim, ts] = useState(true);
  const [esc, setesc] = useState("");
  const [vic, setvic] = useState(false);
  const [truee, settrue] = useState(false);
  const willgo = () => {
    ts(false);
  };
  const handlego = e => {
    setNxt(e.target.value);
  };
  const willget = e => {
    setesc(e.target.value);
    setvic(true);
    props.history.push("/dashboard");
  };
  const hands = e => {
    setstart(e.target.value);
    vas(false);
  };
  const make = () => {
    settrue(true);
  };
  const handle = event => {
    setdata({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const handleall = e => {
    e.preventDefault();
    Setsuper(data);
    setrue(false);
    setnext(true);
  };
  return (
    <div>
      <a href="/" alt="" style={{ color: "white" }}>
        hello world
      </a>
      <section id="page-1" className="page">
        <p>what is the product that you are looking for?</p>
        <form className="form-de">
          <div className="dropdown">
            <input
              type="text"
              className="form-control"
              style={{ display: "inline-block" }}
            />
            <div className="dropdown-content">
              <a href="#page-1" name="HR">
                Hr
              </a>
              <a href="#page-1" name="Sales">
                Sales
              </a>
              <a href="#page-1" name="Engineering">
                {" "}
                Engineering
              </a>
            </div>
          </div>
        </form>

        <div>
          <a href="#page-2" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-2" className="page">
        <p>Which industry are you in?</p>
        <form className="form-de">
          <div className="dropdown">
            <input
              type="text"
              className="form-control"
              style={{ display: "inline-block" }}
            />
            <div className="dropdown-content">
              <a href="#page-2" name="HR">
                Hr
              </a>
              <a href="#page-2" name="Sales">
                {" "}
                Sales
              </a>
              <a href="#page-2" name="Engineering">
                {" "}
                Engineering
              </a>
            </div>
          </div>
        </form>
        <div>
          <a href="#page-1" className="btn btn-dark">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-3" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-3" className="page">
        <p>Are you looking for a product from a ?</p>
        <form className="form-de">
          <div className="dropdown">
            <input
              type="text"
              className="form-control"
              style={{ display: "inline-block" }}
            />
            <div className="dropdown-content">
              <a href="#page-3" alt="HR" name="HR">
                Hr
              </a>
              <a href="#page-3" alt="Sales" name="Sales">
                Sales
              </a>
              <a href="#page-3" alt="Engineering" name="Engineering">
                {" "}
                Engineering
              </a>
            </div>
          </div>
        </form>
        <div>
          <a href="#page-2" className="btn btn-dark">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-4" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-4" className="page">
        <p>
          Are you looking for a product from you multiple teams or a single
          team?
        </p>
        <form className="form-de">
          <fieldset>
            <label className="">
              <input type="radio" value="startup" name="gender" />
              <div style={{ padding: "19px" }} className="radios imgradio">
                Single
              </div>
            </label>

            <label className="" style={{ padding: "9px" }}>
              <input type="radio" value="SMB" name="gender" />
              <div style={{ padding: "19px" }} className="radios imgradio">
                Multiple
              </div>
            </label>
          </fieldset>
        </form>
        <div>
          <a href="#page-3" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-5" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-5" className="page">
        <p>Which functional team is planning to use this product?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </form>
        <div>
          <a href="#page-4" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-6" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-6" className="page">
        <p>Do you cater to specific verticals?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-5" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-7" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-7" className="page">
        <p>Are you using an existing product?</p>
        <form className="form-de">
          <fieldset>
            <label className="">
              <input type="radio" value="startup" name="gender" />
              <div style={{ padding: "19px" }} className="radios imgradio">
                Yes
              </div>
            </label>

            <label className="" style={{ padding: "9px" }}>
              <input type="radio" value="SMB" name="gender" />
              <div style={{ padding: "19px" }} className="radios imgradio">
                No
              </div>
            </label>
          </fieldset>{" "}
        </form>
        <div>
          <a href="#page-6" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-8" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>{" "}
      <section id="page-8" className="page">
        <p>What teams are likely to use your product?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-7" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-9" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-9" className="page">
        <p>Who is your Ideal User Personna?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-8" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-10" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-10" className="page">
        <p>What is your security requirement?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-9" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-11" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-11" className="page">
        <p>Are you also looking for any other tools?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-10" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-12" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-12" className="page">
        <p>Could you please share your budget for this?</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-11" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-13" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-13" className="page">
        <p>Features looking for</p>
        <form className="form-de">
          <select className="custom-select custom-select-lg mb-3">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>{" "}
        </form>
        <div>
          <a href="#page-12" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-14" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-14" className="page">
        <p>Challenges that you want to solve</p>
        <form className="form-de">
          <textarea className="form-control" />
        </form>
        <div>
          <a href="#page-13" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-15" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-15" className="page">
        <p>What is your criteria for building a strong case?</p>
        <form className="form-de">
          <textarea className="form-control" />
        </form>
        <div>
          <a href="#page-14" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-16" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-16" className="page">
        <p>When are you planning to implement this?</p>
        <form className="form-de">
          <textarea className="form-control" />
        </form>
        <div>
          <a href="#page-15" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-17" className="btn">
            Next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-17" className="page">
        <p>Any keywords that can help us find your product better.</p>
        <form className="form-de">
          <input className="form-control" placeholder="Keyword" />
        </form>
        <div>
          <a href="#page-16" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
          <a href="#page-18" className="btn">
            next Page <i className="fas fa-arrow-circle-down" />
          </a>
        </div>
      </section>
      <section id="page-18" className="page">
        <p>How many people are planning to use?</p>
        <form className="form-de">
          <input type="text" className="form-control" placeholder="number"/>
        </form>
        <div>
          <a href="#page-17" className="btn">
            Prev Page <i className="fas fa-arrow-circle-up" />
          </a>
        </div>
      </section>
    </div>
  );
}
