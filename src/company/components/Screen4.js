import React from "react";
import checkImg from "../../assets/images/Group 2881.png";
import "../../assets/css/Screen4.css";

class Screen4 extends React.Component{
    render() {
        return (
                <div className="grid">
                    <div className="one">
                        <img src={checkImg} width="120px" height="120px"/>
                    </div>
                    <div className="two">
                        <p className="submitted">Your Application has been submitted</p>
                        <p style={{"fontStyle": "oblique"}}>You can track it's status on your dashboard</p>
                    </div>
                    <div className="three">
                        <a href="#">Go to internship search</a>
                    </div>
                </div>
        );
    }
}

export default Screen4;