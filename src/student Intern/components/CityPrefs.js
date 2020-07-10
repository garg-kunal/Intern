import React from "react";
import logo from "../assets/Merge..png";
import "../css/internshipsData.css";

class CityPrefs extends React.Component {
    constructor() {
        super();
        this.state = {
            city1 : "",
            city2 : "",
            city3 : "",
            workType : true
        }
        this.saveInfo = this.saveInfo.bind(this)
    }
    saveInfo() {
        console.log(this.state.city1 + " " + this.state.city2 + " " + this.state.city3 + " " + this.state.workType);
    }
    valueChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return (
            <div className="box">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="dataForm">
                    <h5>Select your preferences of cities :</h5>
                    <input type="text" className="prefs1" name="city1" onChange={this.valueChange} value={this.state.city1} placeholder="Select your 1st preference"/>
                    <input type="text" className="prefs1" name="city2" value={this.state.city2} onChange={this.valueChange} placeholder="Select your 2nd preference"/>
                    <input type="text" className="prefs1" name="city3" value={this.state.city3} onChange={this.valueChange} placeholder="Select your 3rd preference"/>
                    
                    <label className="roleLabel roleLabel1"><input type="radio" name="workType" className="role" defaultChecked={this.state.workType}/>  Work From Home</label><br/>
                    
                    <div className="buttons">
                        <button type="button" className="previous">Previous</button>
                        <button type="button" onClick={this.saveInfo} className="finish">Finish</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityPrefs;
