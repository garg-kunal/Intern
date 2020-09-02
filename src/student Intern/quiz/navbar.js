import React from "react";
import user from '../../student Intern/assets/images/user.png';
import '../../company/css/companyNavBar.css';
// import ProfileBox from "./profileBox"
import { NavLink } from "react-router-dom";
class CompanyNavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            showProfile: false
        }
       
    }

    logout(){
        localStorage.removeItem("merge_jwt");
        this.props.history.push("/login/student");
    }
    

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "#4A00E0" }} >
                <NavLink className="navbar-brand" to="/student/dashboard">
                    <strong className="company-navbar-heading-merge">Merge.</strong>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link student-navbar-nav-link-subitem" to="/student/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link student-navbar-nav-link-subitem" to="/student/internships">View Internships</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link student-navbar-nav-link-subitem" to="/student/resume_form/false">My Info</NavLink>
                        </li>
                        <li>
                            {/* <NavLink className="nav-link student-navbar-nav-link-subitem" to="/"> */}
                            <button  onClick={()=>{this.logout()}} className="btn " style={{background:"transparent"}}>Logout</button>
                               
                            {/* </NavLink> */}
                        </li>

                    </ul>
                   
                </div>
            </nav >
        )
    }
}

export default CompanyNavBar;