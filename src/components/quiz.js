import React from 'react';

//import './top.css';
const Quiz = () => {
    return (
        <div className="container-fluid" style={{ marginTop: "20px", padding: "20px" }}>
            <p className="display-5"><strong>Your Multiple Choice Questions Are Here:</strong></p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4">ALL THE BEST!!!</div>
                    <div className="col-md-4 col-lg-4 ">Question1/40</div>
                    <div className="col-md-4 col-lg-4">Questions</div>
                </div>
            </div>
            <div className="container" style={{marginTop:"20px"}}>
                <div className="card">
                    <div class="card-body">
                        {/* <div className="row">&nbsp;&nbsp;&nbsp;<img src={msg} className="img img-fluid" style={{height:"35px"}}/><b style={{fontSize:"18px"}}>Question 1</b></div><br/> */}
                        <div className="row"> <b>&nbsp;&nbsp;&nbsp;This is some text within a card body.</b></div><br/>
                         <div className="row">Options</div>
                    </div>
                </div>
                <center><button className="btn btn-lg">Next</button></center>
            </div>
        </div>

    )
}
export default Quiz;