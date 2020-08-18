import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import User from './assets/user.png';
import login from './assets/login.png';

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg" >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  text-white">
              <li className="nav-item px-lg-4 px-md-1 d-none d-lg-block">
                <div className="navbar-brand navbar-brand-home" to="/">
                  <h2 style={{ color: "white",fontFamily: "'Spartan', sans-serif" }}>Merge.</h2>
                </div>
              </li>
              <li className="nav-item nav-item-home  mr-auto">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav-item-home  nav-hide md-auto">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item nav-item-home  nav-hide md-auto">
                <a className="nav-link" href="#">
                  <NavLink to="/create_account/student">Register/Login</NavLink>
                </a>
              </li>
              <li className="nav-item signup-nav  mx-auto">
                  <NavLink className="nav-link" to="/create_account/student/">
                    Register/Login
                </NavLink>
                
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler navbar-dark navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="navbar-brand mobile-merge" href="/">
                Merge.
              </a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/create_account/student/" className="d-lg-none">

              </Link>
              {/* <div className="row">
                <button className="btn bg-transparent  round_border d-none d-lg-block">
                  <Link to="/create_account/student/">

                    Sign Up
                </Link>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn bg-transparent round_border d-none d-lg-block">
                  <Link to="/login/student/">

                    Sign In
                </Link>
                </button>
              </div> */}

            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
