import React from "react";
import logo from "../assets/images/Merge..png";
import axios from '../../setup';
import "../assets/css/Screen2.css";
import { Modal,Spinner } from 'react-bootstrap';
class Screen2 extends React.Component {
    constructor() {
        super();
        this.state = {
            other: "",
            message:"Loading....."
        }
    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };
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
                        // console.log(inputs.value);
                        boxes.push(inputs.value);
                    }
                }
            }
        }
        // var others = document.getElementsByClassName("otherFields")[0];
        // boxes.push(others.value);
        console.log(boxes);
        if (boxes.length === 0) alert("Please Checkout Technologies");
        else {
            this.setState({
                message:"Loading...",
                show: true
            })
            const data = {
                skills: boxes
            };
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/accounts/student/schedule_assessment', data, headers)
                .then((res) => {
                    if (res.data.status === 200)
                        this.props.history.push('/intern_data');
                    else if (res.data.status !== 200) {
                        this.setState({
                            message: res.data.status_message.message,
                            show: true
                        })
                    }
                })
                .catch((err) => {
                    console.log(err);
                   this.setState({
                       message:"Try Again Later"
                   })
                });
        }
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
                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-1">
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
                    <div className="inputs container" >
                        {rows}
                        <div className="buttons">
                            <button type="button" onClick={this.printData} className="confirmation btn">Done</button>
                            <button type="button" className=" btn confirmation1">Cancel</button>
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                       {this.state.message}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Screen2;