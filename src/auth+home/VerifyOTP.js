import React, { Component, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import cookie from "react-cookies";
import { Modal } from "react-bootstrap";
import merge from './assets/Merge..png';
import otp from './assets/otp.png'
import './assets/css/verify_otp.css'
import Axios from "../setup";
import {connect} from 'react-redux';
export class VerifyOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      mobile_number: "",
      name: "",
      messages: [],
      show: false,
    };
    this.handleResendSubmit = this.handleResendSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOTPChange = this.handleOTPChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleOTPChange(event) {
    const inputId = event.target.id;
    const value = event.target.value;
    console.log(value);
    if (value !== "") {
      switch (inputId) {
        case "otp_dig_1":
          document.getElementById("otp_dig_2").focus();
          break;
        case "otp_dig_2":
          document.getElementById("otp_dig_3").focus();
          break;
        case "otp_dig_3":
          document.getElementById("otp_dig_4").focus();
          break;
        default:
          break;
      }
    }
    const otp_dig_1 = document.getElementById("otp_dig_1").value;
    const otp_dig_2 = document.getElementById("otp_dig_2").value;
    const otp_dig_3 = document.getElementById("otp_dig_3").value;
    const otp_dig_4 = document.getElementById("otp_dig_4").value;
    this.setState(
      { otp: otp_dig_1 + otp_dig_2 + otp_dig_3 + otp_dig_4 },
      () => {
        console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
    const data={
      otp:this.state.otp,
      mobile_number:this.state.mobile_number,
      account_type:"student"
    }
    Axios.post('/api/accounts/verify_otp',data)
    .then((res)=>{
      console.log(res.data);
      if(res.data.status===200){
        localStorage.setItem('merge_jwt',res.data.jwt);
         this.props.history.push('/test_skills');
      }
      else if(res.data.status!==200)
         {
           this.state.messages.push(res.data.status_message.message)
           this.setState({
             show:true
           })
         }   
    })
    .catch((err)=>console.log(err))
   
    event.preventDefault();
  }

  handleResendSubmit(event) {
    const data={
      mobile_number:this.state.mobile_number,
    }
    Axios.post('/api/accounts/resend_otp',data)
    .then((res)=>{
      this.state.messages.push(res.data.status_message.message);
      this.setState({
        show:true
      })
    })
    .catch((err)=>console.log(err))
   
    event.preventDefault();
  }

  componentDidMount() {
    const { mobile_number } = this.props.match.params;
    console.log(this.props.match.params);
    this.setState({ mobile_number: mobile_number }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="VerifyOTP vh-100 body-otp" >
        <div className="container-fluid vh-100 violet_sq_bg">
          <div className="row px-3">

            <h2 style={{ color: "white", paddingTop: "20px" }}>
              <NavLink to="/">
                Merge.
              </NavLink>
            </h2>

          </div>
          <div
            className="bg-white col-sm-6 col-10 mx-auto"
            style={{ borderRadius: "30px" }}
          >
            <div className="row">
              <div className="mt-3 mx-auto">
                <img src={otp} className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="mx-auto">
                <form onSubmit={this.handleSubmit}>
                  <h2 className="m-3 text-violet text-center" style={{ fontSize: "25px" }}>
                    OTP Verification
                  </h2>
                  <div style={{ display: "flex" }} className="mt-3">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        id="otp_dig_1"
                        className="verify-otp-input text-center"
                        type="text"
                        pattern="\d*"
                        maxLength="1"
                        required
                        onChange={this.handleOTPChange}
                        style={{  textAlign: "center" }}
                      />

                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        id="otp_dig_2"
                        className="verify-otp-input text-center"
                        type="text"
                        pattern="\d*"
                        maxLength="1"
                        required
                        onChange={this.handleOTPChange}
                        style={{ textAlign: "center" }}
                      />
                      {/* <span>-</span> */}
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        id="otp_dig_3"
                        className="verify-otp-input text-center"
                        type="text"
                        pattern="\d*"
                        maxLength="1"
                        required
                        onChange={this.handleOTPChange}
                        style={{ textAlign: "center" }}
                      />
                      {/* <span>-</span> */}
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        id="otp_dig_4"
                        className="verify-otp-input text-center"
                        type="text"
                        pattern="\d*"
                        maxLength="1"
                        required
                        onChange={this.handleOTPChange}
                        style={{  textAlign: "center" }}
                      />
                    </div>
                  </div>
                  <br/>
                  <div className="row mx-auto">
                    <button
                      className="btn btn-secondary mt-md-5 mx-auto text-center "
                      style={{ borderRadius: "30px", width: "200px", alignSelf: "center" }}
                      type="submit"
                    >
                      SUBMIT
                  </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="mx-auto mt-3">
                OTP sent to: {this.state.mobile_number}
                <form onSubmit={this.handleResendSubmit}>
                  <button
                    className="btn text-violet bg-transparent mx-auto"
                    style={{ fontSize: "1.1em",paddingLeft:"40px", fontWeight: "800", color: "#4A00E0", marginTop: "-40px" }}
                    type="submit"
                  >
                    Resend OTP
                  </button>
                </form>
              </div>
            </div>
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


export default VerifyOTP;
