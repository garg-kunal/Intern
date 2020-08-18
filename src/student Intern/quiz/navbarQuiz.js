import React from 'react';
//import './top.css';
import user from '../form/images/user.png';
const navbar = () => {
    return (
        <nav className="navbar navbar-student navbar-expand-lg">
            <a className="navbar-brand navbar-brand-student" href="#">
                <strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px", fontFamily: "'Spartan', sans-serif" }}>Merge.</strong>
            </a>
        </nav>
    )
}

export default navbar;