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
    //  {/* <nav className="navBar">
    //             <div className="navBarElements">
    //                 <img src={logo} alt=""/>
    //                 <a href="" className="navItems">Home</a>
    //                 <a href="" className="navItems">Post Internships</a>
    //                 <a href="" className="navItems">Dashboard</a>
    //                 <img className="userIcon" src={userIcon} onClick={this.showProfile} alt=""/>
    //             </div>
    //             <ProfileBox show={this.state.showProfile}/>
    //         </nav> */}
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#4A00E0" }} >
                <NavLink className="navbar-brand" to="/company"><strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px" }}>Merge.</strong></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={{ color: "white" }} to="/company">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: "white" }} to="/company/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: "white" }} to="/company/post_intern">Post Intern</NavLink>
                        </li>

                    </ul>
                    <a className="nav-link" href="#" style={{ float: "right" }}><img src={user}
                        className="img img-fluid userpng"
                        onClick={this.showProfile}
                        style={{ height: "40px", float: "right" }}
                        alt="user" />
                        <ProfileBox show={this.state.showProfile} />
                    </a>
                </div>
            </nav >
        )
    }
}

export default CompanyNavBar;