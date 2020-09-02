import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import cookie from "react-cookies";
import Welcome from "../Welcome";
import { Modal } from "react-bootstrap";
import '../assets/css/student_form.css';
import axios from '../../setup';

export class CompanyRegister extends Component {
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

    const data = {
      email: this.state.email,
      name: this.state.name,
      mobile_number: this.state.mobile_number,
      company_type: this.state.company_type
    }
    this.setState({
      messages: []
    })

    axios.post('/api/accounts/company/create', data)
      .then((res) => {
        console.log(res.data.status_message.message)
        if (res.data.status === 201)
          this.props.history.push('/login/verify/' + this.state.email);
        else if (res.data.status !== 201)
          this.state.messages.push(res.data.status_message.message)
        this.setState({
          show: true
        })

      })
      .catch((err) => {
        console.log(err)
      })


    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" style={{ padding: "0" }}>
        <div className="row no-gutters">
          <div className="col-md-6 col-lg-6 text-white violet_sq_bg">
            <Welcome />
          </div>
          <div className="col-md-6 col-sm-12 mt-md-5 mt-3" style={{ padding: "10px" }}>
            <nav className="navbar navbar-expand-lg">
              <ul className="navbar-nav">
                <li className="nav-item px-sm-3 px-xs-2 ml-0">
                  <h3
                    className="font-weight-bolder sign-up-heading-main"
                    style={{
                      color: "#4A00E0",
                    }}
                  >
                    Sign Up
                    </h3>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-3 font-weight-bolder">
                  <Link
                    to="/create_account/student"
                    style={{ color: "black" }}
                  >
                    Student
                    </Link>
                </li>
                <li
                  className="nav-item px-3 font-weight-bolder"
                  style={{
                    color: "black",
                    borderBottom: "solid 2px #4A00E0",
                  }}
                >
                  Company
                  </li>
              </ul>
            </nav>
            <form onSubmit={this.handleSubmit}>
              <div className="ml-md-3">
                <div className="form-group form-content text-left mt-md-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Company name"
                    maxLength="128"
                    required
                    id="id_name"
                    style={{ borderRadius: "0", color: "black", fontWeight: "200", border: "1px solid lightgrey" }}
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </div>

                <div className="form-group form-content text-left mt-md-3">
                  <input
                    type="email"
                    name="email"
                    style={{ borderRadius: "0", color: "black", fontWeight: "200", border: "1px solid lightgrey" }}
                    className="form-control"
                    placeholder="Company E-mail ID"
                    maxLength="254"
                    required
                    id="id_email"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </div>

                <div className="form-group form-content text-left mt-md-3">
                  <div className="form-group form-content text-left">
                    <select
                      className="form-control industry"
                      name="industry"
                      id="select"
                      style={{ borderRadius: "0", color: "black", fontWeight: "200", border: "1px solid lightgrey", fontSize: "20px", padding: "3px" }}
                      onChange={this.handleTypeChange}
                      value={this.state.company_type}
                      required
                    >
                      <option className="option-company-main" value="">
                        Industry
                        </option>
                      <option className="option-company-main">E-commerce</option>
                      <option className="option-company-main">Saas</option>
                      <option className="option-company-main">Fintech</option>
                      <option className="option-company-main">Web Dev./Marketing Agency</option>
                      <option className="option-company-main">Services</option>
                      <option className="option-company-main">Media & Entertainment</option>
                      <option className="option-company-main">Food & Beverage</option>
                      <option className="option-company-main">Automobile</option>
                      <option className="option-company-main">Hyperlocal</option>
                      <option className="option-company-main">Logistics</option>
                      <option className="option-company-main">Fashion</option>
                      <option className="option-company-main">Agritech</option>
                      <option className="option-company-main">Non-Profit</option>
                      <option className="option-company-main">Others</option>
                    </select>
                  </div>
                </div>

                <div className="form-group form-content text-left mt-md-3">
                  <input
                    type="text"
                    name="mobile_number"
                    className="form-control"
                    placeholder="Office Number"
                    pattern="^\d{10}$"
                    maxLength="16"
                    required
                    style={{ borderRadius: "0", color: "black", fontWeight: "200", border: "1px solid lightgrey" }}
                    id="id_mobile_number"
                    onChange={this.handleNumberChange}
                    value={this.state.mobile_number}
                  />
                </div>
                <div className="container row no-gutters">
                  <div className=" mx-auto text-center">
                    Already Have An Account?
                  <NavLink style={{ color: "#4A00E0" }} to="/login/company">&nbsp;&nbsp; Login.</NavLink>
                  </div>
                </div>
                <br />
                <div className="row mx-auto no-gutters">
                  <button
                    type="submit"
                    className="btn btn-lg btn-sign-up-home-main-page-land col-5 mx-auto">
                    Sign Up
                  </button>
                </div>
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
                {this.state.messages}
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div >
    );
  }
}

export default CompanyRegister;
