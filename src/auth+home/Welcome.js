import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import merge from './assets/Merge..png';
import './assets/css/student_form.css';

export class Welcome extends Component {
  render() {
    return (
      <div className="container-fluid welcome-form" style={{ margin: "0" }}>
        <NavLink to="/">
          <p className="welcome-merge">
            Merge.
        </p>
        </NavLink>
        <div className="welcome-screen-mobile">
          <h3 className="mt-md-3 ml-md-2 d-md-block d-none" style={{ fontWeight: "600" }}>Welcome,</h3>
          <h4 className="mt-md-3 ml-md-2 d-md-none" style={{ fontWeight: "600" }}>Welcome,</h4>
          <p className="mt-md-3 ml-md-2 " style={{ fontWeight: "400", letterSpacing: "2px" }}>
            It’s absolutely necessary for companies and students to connect! We
            are here to make the process easier for both sides. Students can
            directly connect to the companies who are ready to offer internships,
            based on their assessment results. Companies can save their time and
            resources in testing the candidate, as our assessment covers it all.
        </p>
        </div>
        <div className="welcome-logo-online">
          <div className="row">
            <h5 className="d-none d-md-block welcome-logo-online-1">Follow Us On: </h5>
          </div>
          <div className="row">
            <div className="col-logo-online">
              <a
                href="https://www.instagram.com/mergeintern"
                className=""
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fa fa-instagram  fa-2x"></i>
              </a>
            </div>
            <div className="col-logo-online">
              <a
                href="https://twitter.com/merge_intern"
                className=""
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="col-logo-online">
              <a
                href="https://www.youtube.com/channel/UCORJBqq-0tusMhTmCxaxEww/"
                className=""
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fa fa-youtube-play fa-2x"></i>
              </a>
            </div>
            <div className="col-logo-online">
              <a
                href="https://www.linkedin.com/company/mergeintern"
                className=""
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
