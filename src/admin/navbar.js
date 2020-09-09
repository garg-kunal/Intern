import React from 'react';
import user from '../assets/images/user.png';
import { NavLink, Redirect, withRouter } from 'react-router-dom';

const navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-inverse" >
            <a className="navbar-brand" href="#">
                <strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px", color: "#4A00E0" }}>Merge.
                    </strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink to="/admin" className="nav-link" style={{ color: "black" }} href="#">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/companies" className="nav-link" style={{ color: "black" }} href="#">Companies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/internship" className="nav-link" style={{ color: "black" }} href="#">Internships</NavLink>
                    </li>

                </ul>
                <button className="btn" onClick={
                    ()=>{
                        localStorage.removeItem("admin_jwt");
                        window.location.href="/login/admin"
                    }
                    } style={{ float: "right", background: "transparent" }}>
                   Logout
                </button>
            </div>
        </nav >
    )
}

export default withRouter(navbar);