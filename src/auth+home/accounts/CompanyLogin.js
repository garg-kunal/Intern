import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import Welcome from "../Welcome";
import { Modal } from "react-bootstrap";
import '../assets/css/student_form.css';


export class CompanyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile_number: "",
      company_type: "",
      messages: [],
      show: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleNameChange(event) {
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleNumberChange(event) {
    this.setState({ mobile_number: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleTypeChange(event) {
    this.setState({ company_type: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(event) {
    const endpoint = "/api/accounts/company/create";
    const csrfToken = cookie.load("csrftoken");
    const thisComp = this;
    const lookupOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
        credentials: "include",
      },
      body: JSON.stringify(this.state),
    };
    if (csrfToken !== undefined) {
      fetch(endpoint, lookupOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(response);
          }
          return response.json();
        })
        .then(function (jsonData) {
          console.log(jsonData);
          if (jsonData["status"] === 201) {
            thisComp.props.history.push(
              "/verify_otp/" +
              thisComp.state.mobile_number +
              "/" +
              thisComp.state.name
            );
          } else {
            console.log(jsonData.status_message);
            thisComp.setState({ messages: jsonData.status_message });
            thisComp.handleShow();
          }
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("Error: ", error);
        });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" style={{padding:"0"}}>
        <div className="row no-gutters">
          <div className="col-md-6 col-lg-6 text-white violet_sq_bg">
            <Welcome />
          </div>
          <div className="col-md-6 col-sm-12 mt-md-5 mt-3" style={{padding:"10px"}}>
            <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav">
                <li className="nav-item px-sm-3 px-xs-2 ml-0">
                  <h3
                    className="font-weight-bolder"
                    style={{
                      color: "#4A00E0",
                    }}
                  >
                    Sign In
                    </h3>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-3 font-weight-bolder">
                  <Link
                    to="/login/student"
                    style={{ color: "#4A00E0" }}
                  >
                    Student
                    </Link>
                </li>
                <li
                  className="nav-item px-3 font-weight-bolder"
                  style={{
                    color: "#4A00E0",
                    borderBottom: "solid 2px #4A00E0",
                  }}
                >
                  Company
                  </li>
              </ul>
            </nav>
            <form onSubmit={this.handleSubmit}>
              <div className="ml-md-3">
                

                <div className="form-group form-content text-left mt-md-5">
                  <input
                    type="email"
                    name="email"
                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                    className="form-control"
                    placeholder="Company E-mail ID"
                    maxLength="254"
                    required
                    id="id_email"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </div>

               
                
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#89EA91",
                    color: "white",
                    borderRadius: "30px",
                    float: "right"
                  }}
                  className="btn btn-lg col-5 pull-right"
                >
                  Sign In
                  </button>
              </div>
            </form>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <ul style={{ listStyleType: "none" }}>
                  {Object.keys(this.state.messages).map(
                    (message_key, index) => (
                      <li key={index}>{this.state.messages[message_key]}</li>
                    )
                  )}
                </ul>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyLogin;
