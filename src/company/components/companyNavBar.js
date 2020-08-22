import React from "react";
import user from '../../student Intern/assets/images/user.png';
import "../css/companyNavBar.css"
import ProfileBox from "./profileBox"
import { NavLink } from "react-router-dom";
class CompanyNavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this)
    }
    showProfile() {
        this.setState((prevState) => ({
            showProfile: !prevState.showProfile
        }))
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg  fixed-top bg-light" style={{ backgroundColor: "#4A00E0" }} >
                <NavLink className="navbar-brand" to="/company">
                    <strong className="company-navbar-heading-merge">Merge.</strong>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link companny-navbar-nav-link-subitem" to="/company/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link companny-navbar-nav-link-subitem" to="/company/post_intern">Post Internship</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link companny-navbar-nav-link-subitem" to="/">
                                <img src={user}
                                    className="img-fluid userpng-company-navbar"
                                    onClick={this.showProfile}
                                    alt="user" />
                            </NavLink>
                        </li>

                    </ul>
                    <a className="nav-link" href="#" style={{ float: "right" }}>

                        <ProfileBox show={this.state.showProfile} />
                    </a>
                </div>
            </nav >
        )
    }
}

export default CompanyNavBar;