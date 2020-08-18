import React from "react";
import logo from "../assets/Merge..png";
import checkImg from "../assets/Group 2881.png";
import "../css/saveInternship.css";

class SaveInternship extends React.Component {
    move(){
        this.props.history.push('/intern/review_intern');
    }
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-8 col-10 grid">
                <div className="one">
                    <img src={checkImg} width="120px" height="120px"/>
                </div>
                <p className="lead success">Your internship has been saved successfully.</p>
                <button type="button" onClick={()=>{this.move()}} className="btn btn-primary closeScreen col-4">Close</button>
            </div>
        )
    }
}

export default (SaveInternship)
