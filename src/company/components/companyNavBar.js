import React from "react";
import user from '../../assets/images/Merge..png';
import "../../assets/css/companyNavBar.css"
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

            <nav className="navbar navbar-expand-lg navbar-light  fixed-top bg-light" style={{ backgroundColor: "#4A00E0" }} >
                <NavLink className="navbar-brand" to="/company">
                    <img src={user} alt="Merge." className="img-fluid merge-logo-all-student" />

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
                        {/* &nbsp;&nbsp;&nbsp; */}
                        <li className="nav-item">
                            <button
                                className="btn companny-navbar-nav-link-subitem" style={{ background: "transparent" }}
                                onClick={() => {
                                    localStorage.removeItem("merge_jwt_c");
                                    this.props.history.push("/login/company");
                                }}
                            >Logout</button>

                        </li>

                    </ul>
                </div>
            </nav >
        )
    }
}

export default CompanyNavBar;