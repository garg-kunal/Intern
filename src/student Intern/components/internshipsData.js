import React from "react";
import logo from "../assets/Merge..png";
import "../css/internshipsData.css";

class InternshipsData extends React.Component {
    constructor() {
        super();
        this.state = {
            domain1: "",
            domain2: "",
            domain3: "",
            internshipsType: ""
        }
        this.saveInfo = this.saveInfo.bind(this)
        this.checkInternshipType = this.checkInternshipType.bind(this)
        this.valueChange = this.valueChange.bind(this)
    }
    saveInfo() {
        console.log(this.state.domain1 + " " + this.state.domain2 + " " + this.state.domain3 + " " + this.state.internshipsType);
    }
    valueChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    checkInternshipType() {
        var choices = document.getElementsByClassName("role");
        for(var i=0;i<3;i++){
            if(choices[i].checked){
                this.setState({internshipsType:choices[i].value});
                console.log(choices[i].value);
            }
            
        }
        // console.log(this.state.internshipsType);
        // this.setState({
        //     internshipsType: (choices[0].checked) ? choices[0].value : ((choices[1].checked) ? choices[1].value : choices[2].value)
        // })
        // console.log(this.state.internshipsType);
        // console.warn();
    }

    render() {
        return (
            <div className="container">
                <div className="logo">
                    <img src={logo} className="img img-fluid" />
                </div>
                <form className="dataForm form-group">
                    <h5>What do you want to apply for?</h5>
                    <input type="text" name="domain1" onChange={this.valueChange} value={this.state.domain1} className="prefs form-control" placeholder="Select your 1st preference" />
                    <input type="text" name="domain2" onChange={this.valueChange} value={this.state.domain2} className="prefs form-control" placeholder="Select your 2nd preference" />
                    <input type="text" name="domain3" onChange={this.valueChange} value={this.state.domain3} className="prefs form-control" placeholder="Select your 3rd preference" />
                    <h5>What type of job are you looking for?</h5>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 text-center">
                            <label className="roleLabel"> Full Time  Job/Internship</label>
                        </div>
                        <div className="col-md-1 col-lg-1 text-center">
                            <input type="radio" className="role " name="role" value="full time" onChange={this.checkInternshipType} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-lg-4 text-center">
                            <label className="roleLabel"> Part Time  Job/Internship</label>
                        </div>
                        <div className="col-md-1 col-lg-1 text-center">
                            <input type="radio" className="role " name="role" value="part time" onChange={this.checkInternshipType} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 text-center">
                            <label className="roleLabel"> Both</label>
                        </div>
                        <div className="col-md-1 col-lg-1 text-center">
                            <input type="radio" className="role  " name="role" value="both" onChange={this.checkInternshipType} />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" style={{padding:"5px"}} onClick={this.saveInfo} className="confirmation">Done</button>
                        <button type="button" style={{padding:"5px"}} className="confirmation1">Cancel</button>
                    </div>
                </form >
            </div >
        );
    }
}

export default InternshipsData;
