import React from "react";
import logo from "../assets/Merge..png";
import checkImg from "../assets/Group 2881.png";
import "../css/Screen4.css";

class Screen3 extends React.Component{
    render() {
        return (
            <div className="main">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="grid">
                    <div className="one">
                        <img src={checkImg} width="100px" height="100px"/>
                    </div>
                    <div className="two">
                        <p className="submitted">Congratulations !!!</p>
                        <p>You've scored 60/100. Keep it up.</p>
                    </div>
                    <div className="three three1">
                        <a href="#">Proceed</a>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Screen3;