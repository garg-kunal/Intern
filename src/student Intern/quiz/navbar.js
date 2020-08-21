import React from 'react';
//import './top.css';
import user from '../form/images/user.png';
import { NavLink } from 'react-router-dom';
const navbar = () => {
    return (
        <nav className="navbar navbar-student navbar-expand-lg">
            <a className="navbar-brand navbar-brand-student" href="#">
                <strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px", fontFamily: "'Spartan', sans-serif" }}>Merge.</strong>
            </a>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarNav" style={{borderColor:"white"}}
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color:"white !important"}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link-student">
                        <NavLink className="nav-link " to="/student/internships">Internships</NavLink>
                    </li>
                    <li className="nav-item nav-link-student ">
                        <NavLink className="nav-link " to="/student/dashboard" >Dashboard</NavLink>
                    </li>
                    <li className="nav-item nav-link-student">
                        <NavLink className="nav-link" to="/student/resume_form/false">Resume</NavLink>
                    </li>
                    {/* <li className="nav-item nav-link-student">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li> */}
                    <li className="nav-item nav-link-student">
                        <a className="nav-link" href="#">
                            <img src={user}
                                style={{ height: "40px", width: "40px" }}
                                className="img-fluid"
                                alt="user" />
                        </a>
                    </li>

                </ul>

            </div>
        </nav >
    )
}

export default navbar;