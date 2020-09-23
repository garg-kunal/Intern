import React from 'react';
import logo from '../../assets/images/Merge.-1.png';
const navbar = () => {
    return (
        <nav className="navbar  navbar-expand-lg" style={{backgroundColor:"#4a00e0",height:"70px"}}>
          
            <a className="navbar-brand " href="#">
            <img src={logo} className="img-fluid merge-logo-all-student" style={{float:"left"}} />
              
            </a>
        </nav>
    )
}

export default navbar;