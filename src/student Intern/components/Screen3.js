import React from "react";
import logo from "../assets/images/Merge..png";
import checkImg from "../assets/images/Group 2881.png";
import "../assets/css/Screen4.css";
import { NavLink } from "react-router-dom";

class Screen3 extends React.Component{
    render() {
        return (
            <div className="container-fluid main">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="grid">
                    <div className="one">
                        <img src={checkImg}  className="img-fluid" style={{height:"80px",width:"80px"}}/>
                    </div>
                    <div className="two">
                        <p className="submitted">Congratulations !!!</p>
                        <p>You've scored 60/100. Keep it up.</p>
                    </div>
                    <div className="three three1">
                        <NavLink to="/student/resume_form">Proceed</NavLink>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Screen3;