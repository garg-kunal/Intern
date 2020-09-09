import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light" >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navabr-nav-home  text-white">
              <li className="nav-item px-lg-4 px-md-1 d-none d-lg-block">
                <div className="navbar-brand navbar-brand-home" to="/">
                  <h2 className="home-main-merge">Merge.</h2>
                </div>
              </li>
              <li className="nav-item nav-item-home  mr-auto">
                <NavLink style={{ color: "black" }} className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item nav-item-home  nav-hide md-auto">
                <NavLink style={{ color: "black" }} className="nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item nav-item-home  nav-hide md-auto">

                <NavLink className="nav-link"
                  style={{ color: "black" }} to="/create_account/student">Register/Login
                </NavLink>

              </li>
              <li className="nav-item signup-nav">
                <NavLink style={{ color: "black" }} className="nav-link" to="/create_account/student/">
                  Register/Login
                </NavLink>

              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler  navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"

            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "black !important" }}></span>
          </button>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="navbar-brand mobile-merge" style={{ color: "black",fontSize:"20px",marginLeft:"-50px" }} to="/">
                Merge.
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/create_account/student/" className="d-lg-none">

              </Link>


            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
