import React from "react";
import checkImg from "../assets/images/Group 2881.png";
import "../assets/css/Screen4.css";
import {NavLink} from 'react-router-dom'
class Screen4 extends React.Component{
    componentDidMount(){
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt")===undefined) {
        
            this.props.history.push('/login/student');
        }
        else {
        }
    }
    render() {
        return (
                <div className="grid container mt-5">
                    <div className="one">
                        <img src={checkImg} alt="status" className="img-fluid" style={{height:"100px",width:"100px"}} /><br/>
                    </div>
                    <br/>
                    <div className="two">
                        <p className="submitted">Your Application has been submitted</p>
                        <p style={{fontStyle: "oblique"}}>You can track it's status on your dashboard</p>
                    </div>
                    <div className="three">
                        <NavLink to="/student/dashboard"   className="btn btn-intern-status">Go to internship search</NavLink>
                    </div>
                </div>
        );
    }
}

export default Screen4;