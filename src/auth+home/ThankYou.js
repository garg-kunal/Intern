import React, { Component } from "react";
import { Link,NavLink } from "react-router-dom";
import './assets/css/thank_you.css';
import ok from './assets/Group 83.png';
import tele from './assets/telegram.png'
export class ThankYou extends Component {
  render() {
    return (
      <div className="ThankYou vh-100 body-thanku ">
        <div className="container-fluid vh-100 violet_sq_bg">
          <div className="row px-3">
            <h2 style={{ color: "white" }}>
              <NavLink to="/">Merge.</NavLink>
            </h2>
          </div>
          <div
            className="bg-white col-sm-4 col-10 mx-auto"
            style={{ borderRadius: "30px" }}
          >
            <div className="row">
              <div className="mt-2 mx-auto">
                <img src={ok} className="img-fluid mt-2" style={{ height: "100px",width:"100px" }} />
              </div>
            </div>
            <div className="row">
              <div className="mt-2 mx-auto text-center text-dark font-weight-bolder">
                <p>Thank You For Subscribing</p>
                <br />
                <p>We Are Launching Very Soon</p>
                <p>Check Your Mailbox For Further Updates</p>
                <br />
              </div>
            </div>
          </div>
          <div className="row p-3 col-sm-4 col-10 mx-auto mt-2 text-center">
            <div className="col">
              <a
                href="https://www.instagram.com/mergeintern"
                className=""
                target="_blank"
              >
                <i className="fa fa-instagram fa-3x"></i>
              </a>
            </div>
            <div className="col">
              <a
                href="https://twitter.com/merge_intern"
                className=""
                target="_blank"
              >
                <i className="fa fa-twitter fa-3x"></i>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.youtube.com/channel/UCORJBqq-0tusMhTmCxaxEww/"
                className=""
                target="_blank"
              >
                <i className="fa fa-youtube-play fa-3x"></i>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.linkedin.com/company/mergeintern"
                className=""
                target="_blank"
              >
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
          <div className="row p-3 col-sm-4 col-10 mx-auto text-center">
            <div className="col-12">
              <div className="badge badge-pill badge-light my-2">
                <a
                  href="https://t.me/mergeintern"
                  className="ml-sm-2"
                  target="_blank"
                >
                  <span className="">
                    <label className="text-primary">Join Our Community</label>
                    <img
                      src={tele}
                      className="img-fluid ml-3"
                      alt=""
                      style={{height:"40px",width:"40px"}}
                    ></img>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
