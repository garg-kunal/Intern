import React from "react";
import logo from "../assets/Merge..png";
import "../css/Screen2.css";

class Screen2 extends React.Component {
    constructor() {
        super();
        this.state = {
            other: ""
        }
    }
    changeColor = e => {
        var element = e.target;
        if (element.style.backgroundColor === "rgb(74, 0, 224)") {
            element.style.backgroundColor = "#9F9F9F";
        } else {
            element.style.backgroundColor = "rgb(74, 0, 224)";
        }
    }
    printData = e => {
        e.preventDefault();
        var boxes = [];
        var ele = document.getElementsByClassName("field");
        for (const child of ele) {
            for (const labels of child.childNodes) {
                for (const inputs of labels.getElementsByTagName('input')) {
                    if (inputs.checked) {
                        boxes.push(inputs.value);
                    }
                }
            }
        }
        var others = document.getElementsByClassName("otherFields")[0];
        boxes.push(others.value);
        console.log(boxes);

    }
    render() {
        var info = [
            { id: 1, field: "Front End", option1: "HTML", option2: "CSS", option3: "jQuery" },
            { id: 2, field: "Back End", option1: "Python", option2: "Node", option3: "PHP" },
            { id: 3, field: "Database", option1: "MySQL", option2: "MongoDB", option3: "FireStore" },
            { id: 4, field: "Server", option1: "AWS", option2: "GCP", option3: "Azure" }
        ];
        const rows = info.map((information) => {
            return (
                <div className="field d-flex flex-wrap">
                    <div className=" container row row-cols-2 ">
                        <div className="col-md-3 col-lg-3 col-sm-2 col-xs-1">
                            <span className="fieldName">{information.field + " :"}</span>
                        </div>
                        <div className="col-md-9 col-lg-9 col col-sm-10 col-xs-10">
                            <label className="checkLabel " onClick={this.changeColor}><input type="checkbox" className="check"
                                name={information.id + "field1"} value={information.option1} />{information.option1}</label>
                            <label className="checkLabel" onClick={this.changeColor}><input type="checkbox" className="check" name={information.id + "field2"} value={information.option2} />{information.option2}</label>
                            <label className="checkLabel" onClick={this.changeColor}><input type="checkbox" className="check" name={information.id + "field3"} value={information.option3} />{information.option3}</label>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container-fluid main-box">
                <div className="logo">
                    <img src={logo} className="img img-fluid" />
                </div>
                <div className="container-fluid  innerBox">
                    <h4 >What tools do you use for your projects?</h4><br />
                    <div className="inputs container">
                        {rows}
                        <div className="row">
                            <div className="col-md-1 col-lg-1 offset-md-1 ">
                                <span><b>Others: </b></span>
                                &nbsp;&nbsp;
                            </div>
                            <div className="col-md-9 col-lg-9">
                                <input type="text" className="form-control" onChange={(e) => { this.setState({ other: e.target.value }) }} placeholder="Add Hardware, Software, etc." />
                            </div>
                        </div>

                        <div className="buttons">
                            <button type="button" onClick={this.printData} className="confirmation btn">Done</button>
                            <button type="button" className=" btn confirmation1">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen2;