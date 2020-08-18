import React from 'react';
//import './top.css';
import user from '../student Intern/assets/images/user.png';
import { NavLink } from 'react-router-dom';
// import user from '../form/images/user.png';
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:"#4A00E0" }} >
            <a className="navbar-brand" href="#"><strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px" }}>Merge.</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink to="/admin" className="nav-link" style={{ color: "white" }} href="#">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/companies" className="nav-link" style={{ color: "white" }} href="#">Companies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/internship" className="nav-link" style={{ color: "white" }} href="#">Internships</NavLink>
                    </li>

                </ul>
                <a className="nav-link" href="#" style={{ float: "right" }}><img src={user}
                    className="img img-fluid userpng"
                    style={{ height: "40px", float: "right" }}
                    alt="user" />
                </a>
            </div>
        </nav >
    )
}

export default navbar;