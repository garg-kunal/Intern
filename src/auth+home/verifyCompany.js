import React, { Component, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import otp from './assets/otp.png'
import './assets/css/verify_otp.css'
import Axios from "../setup";


export class VerifyOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      email: "",
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
      email:this.state.email,
      account_type:"company"
    }
    Axios.post('/api/accounts/verify_otp',data)
    .then((res)=>{
      console.log(res.data);
      if(res.data.status===200){
        localStorage.setItem('merge_jwt_c',res.data.jwt);
         this.props.history.push('/create/company_detail/'+this.state.email);
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
    const { email } = this.props.match.params;
    console.log(this.props.match.params);
    this.setState({ email: email });
  }

  render() {
    return (
     <div className="container-fluid body-otp " >
        <div className="container-fluid vh-100 violet_sq_bg">
          <div className="row px-2">

            <h2 style={{ color: "white", paddingTop: "20px" }}>
            <NavLink to="/" className="merge-verify-otp mb-3" style={{ color: "white",fontFamily: "'Spartan', sans-serif" }}>
              Merge.
              </NavLink>
            </h2>

          </div>
          <div
          className="otp-box-home bg-white col-md-8 col-lg-6 col-sm-10 col-11 verify-otp-mobile mx-auto"
          style={{ borderRadius: "20px" }}
          >
            <div className="row">
              <div className="mt-3 mx-auto">
                <img src={otp} className="img-fluid otp-image-verify" />
              </div>
            </div>
            <div className="row">
              <div className="mx-auto">
                <form onSubmit={this.handleSubmit}>
                  <h2 className="m-3 text-violet text-center" style={{ fontSize: "25px" }}>
                    OTP Verification
                  </h2>
                  <div style={{ display: "flex" }} className="mt-3">
                    <div style={{ display: "flex", alignItems: "center" }} className="mx-auto">
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
                    <div style={{ display: "flex", alignItems: "center" }} className="mx-auto">
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
                    <div style={{ display: "flex", alignItems: "center" }} className="mx-auto">
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
                    <div style={{ display: "flex", alignItems: "center" }} className="mx-auto">
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
                  <div className="row mx-auto">
                  <button
                    className="btn btn-secondary btn-submit-verify mt-md-5 mx-auto text-center "
                    type="submit"
                  >
                      SUBMIT
                  </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="mx-auto text-center mt-3">
                OTP sent to: {this.state.email}
                <form onSubmit={this.handleResendSubmit}>
                  <button
                    className="btn text-violet bg-transparent mx-auto"
                    style={{ fontSize: "1.1em",paddingLeft:"20px", fontWeight: "800", color: "#4A00E0", marginTop: "-40px" }}
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
