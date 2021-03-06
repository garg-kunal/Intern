import React from "react";
import glassHour from "../../assets/images/glassHour2.png";
import "../../assets/css/saveInternship.css";




class ReviewInternship extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-8 col-10 grid" style={{marginTop:"120px"}}>
                <div className="one">
                    <img src={glassHour} className="img-fluid" alt="" style={{width:"100px",height:"100px"}} />
                </div>
                <p className="lead success">Your internship has been submitted for review.<br/> We will get back to you within 48 working hours.<br/> Thank you for your patience.</p>
                <button type="button" onClick={()=>{this.props.history.push('/company/dashboard')}}
                 className="btn btn-primary closeScreen col-4">Close</button>
            </div>
        )
    }
}

export default ReviewInternship
