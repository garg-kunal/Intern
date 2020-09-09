import React from "react";
import glassHour from '../assets/images/glassHour2.png'

class ReviewInternship extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-8 col-10 grid" style={{marginTop:"120px"}}>
                <div className="one">
                    <img src={glassHour} className="img-fluid" alt="" style={{width:"100px",height:"100px"}} />
                </div>
                <p className="lead success">Your Company details has been submitted for review.<br/> We will get back to you within 12-24 working hours.<br/> Thank you for your patience.</p>
                <button type="button"
                onClick={()=>{
                    localStorage.removeItem("merge_jwt_c");
                    this.props.history.push('/')}}
                 className="btn btn-primary closeScreen col-4">Close</button>
            </div>
        )
    }
}

export default ReviewInternship
