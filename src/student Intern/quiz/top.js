import React from 'react';
import './top.css';
import iconic from '../../assets/images/Group 250.png';
const Top = () => {
    return (
        <div className="container-fluid top">
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <p style={{color:"white"}}>BE DIGITAL,BE SMART</p>
                        <p style={{color:"white",fontSize:"20px",fontWeight:"900"}}>Hi,user help us to know you<br/>
                        with some quick questions..</p>
                        <p style={{color:"white"}}>There are Questions given under below<br/>
                        each carry some marks.Best of luck!!</p>
                </div>
                    <div className="col-md-5">
                        <img src={iconic} className="img img-fluid  group" />
                    </div>
                </div>
                <br/>
            </div>

        </div>
    )
}

export default Top;