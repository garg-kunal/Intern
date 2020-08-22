import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import cookie from "react-cookies";
import Welcome from "../Welcome";
import { Modal } from "react-bootstrap";
import '../assets/css/student_form.css';
import axios from '../../setup';
export class StudentRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile_number: "",
      city: "",
      messages:["Loading..Please Wait"],
      show: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
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

    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value }, () => {

    });
  }

  handleNumberChange(event) {
    this.setState({ mobile_number: event.target.value }, () => {
    });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value }, () => {
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.state.messages.push("Loading...Please wait");
    this.setState({
      show: true
    })
    const data = {
      email: this.state.email,
      name: this.state.name,
      mobile_number: this.state.mobile_number,
      city: this.state.city
    }
    
    axios.post('/api/accounts/student/create', data)
      .then((res) => {
        this.setState({
          messages:[]
        })
        console.log(res.data);
        if (res.data.status === 201)
          this.props.history.push('/login/verify_otp/'+this.state.mobile_number);
        else if (res.data.status !== 201)
           {
             this.state.messages.push(res.data.status_message.message)
         this.setState({
           show:true
         })
        }
      })
      .catch((err) => {
        console.log(err)
      })

    

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
                      color: "#4A00E0"
                    }}
                  >
                    Sign Up
                    </h3>

                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li
                  className="nav-item px-3 font-weight-bolder"
                  style={{
                    color: "black",
                    borderBottom: "solid 2px #4A00E0",
                  }}
                >
                  Student
                  </li>
                <li className="nav-item px-3 font-weight-bolder">
                  <Link
                    to="/create_account/company"
                    style={{ color: "black" }}
                  >
                    Company
                    </Link>
                </li>
              </ul>
            </nav>
            <form onSubmit={this.handleSubmit}>
              <div className="ml-md-3">
                <div className="form-group form-content text-left mt-md-5">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Student Full Name"
                    pattern="^[a-zA-Z\s]+$"
                    maxLength="128"
                    required
                    id="id_name"
                    style={{ borderRadius: "0",color:"black",fontWeight:"200", border: "1px solid lightgrey" }}
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </div>

                <div className="form-group form-content text-left mt-md-5">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Student E-mail ID"
                    maxLength="254"
                    required
                    id="id_email"
                    style={{ borderRadius: "0",color:"black",fontWeight:"200", border: "1px solid lightgrey" }}
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </div>

                <div className="form-group form-content text-left mt-md-5">
                  <input
                    type="text"
                    name="mobile_number"
                    className="form-control"
                    placeholder="Mobile Number"
                    pattern="^\d{10}$"
                    maxLength="16"
                    required
                    style={{ borderRadius: "0",color:"black",fontWeight:"200", border: "1px solid lightgrey" }}
                    id="id_mobile_number"
                    onChange={this.handleNumberChange}
                    value={this.state.mobile_number}
                  />
                </div>

                <div className="form-group form-content text-left mt-md-5">
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    pattern="^[a-zA-Z0-9\s]+$"
                    maxLength="64"
                    style={{ borderRadius: "0",color:"black",fontWeight:"200", border: "1px solid lightgrey" }}
                    required
                    id="id_city"
                    onChange={this.handleCityChange}
                    value={this.state.city}
                  />
                </div>
                <button
                  style={{
                    backgroundColor: "#4A00E0",
                    color: "white",
                    borderRadius: "30px",
                    float: "left"
                  }}
                  className="btn btn-lg col-5 pull-right"
                >
                <NavLink style={{color:"white"}} to="/login/student"> Login</NavLink>
                 
                  </button>
                <button
                  type="submit"
                  
                  className="btn btn-lg btn-sign-up-home-main-page-land col-5 pull-right"
                >
                  Sign Up
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

export default StudentRegister;
