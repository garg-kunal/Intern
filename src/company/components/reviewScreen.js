import React from "react";
import logo from "../assets/Merge..png";
import glassHour from "../assets/glassHour2.png";
import "../css/saveInternship.css";

class ReviewInternship extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-8 col-10 grid">
                <div className="one">
                    <img src={glassHour} width="120px" height="120px"/>
                </div>
                <p className="lead success">Your internship has been submitted for review.<br/> We will get back to you within 48 working hours.<br/> Thank you for your patience.</p>
                <button type="button" className="btn btn-primary closeScreen col-4">Close</button>
            </div>
        )
    }
}

export default ReviewInternship
