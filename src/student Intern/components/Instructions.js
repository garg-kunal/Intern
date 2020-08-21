import React from "react";
import logo from "../assets/images/Merge..png";
import "../assets/css/Screen2.css";
import { NavLink } from 'react-router-dom';
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
    componentDidCatch(){
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt")===undefined) {
        
            this.props.history.push('/login/student');
        }
        else {
        }
    }
    render() {


        return (
            <div className="container-fluid main-box-instructions">
                <div className="logo">
                    <img src={logo} className="img img-fluid" />
                </div>
                <div className="container-fluid"
                    style={{ backgroundColor: "white", padding: "60px", maxWidth: "70%", borderRadius: "50px" }}>
                    <h2 className="mx-auto text-center" style={{ fontWeight: "1000" }}><b>Instructions</b></h2><br />

                    <ul className="justify-content-center mx-auto" style={{ justifyContent: "center" }} >
                        <li style={{ fontSize: "20px", fontWeight: "400", padding: "20px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li style={{ fontSize: "20px", fontWeight: "400", padding: "20px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li style={{ fontSize: "20px", fontWeight: "400", padding: "20px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li style={{ fontSize: "20px", fontWeight: "400", padding: "20px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li style={{ fontSize: "20px", fontWeight: "400", padding: "20px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                    </ul>
                    <center><button className="btn btn-sm-primary btn-primary" style={{ width: "150px" }}>
                        <NavLink to="/quiz">Proceed</NavLink>
                    </button></center>
                </div>
            </div>
        );
    }
}

export default Screen2;