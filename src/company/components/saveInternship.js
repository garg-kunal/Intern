import React from "react";
import checkImg from "../../assets/images/Group 2881.png";
import "../../assets/css/saveInternship.css";

class SaveInternship extends React.Component {
    move(){
        this.props.history.push('/company/intern/review_intern');
    }
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-8 col-10 grid" style={{marginTop:"150px"}}>
                <div className="one">
                    <img src={checkImg} className="img-fluid" alt="" style={{width:"100px",height:"100px"}}/>
                </div>
                <p className="lead success">Your internship has been saved successfully.</p>
                <button type="button" onClick={()=>{this.move()}} className="btn btn-primary closeScreen col-4">Close</button>
            </div>
        )
    }
}

export default (SaveInternship)
