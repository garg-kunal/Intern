import React from "react";
import Mobile from '../quiz/Mobilequiz';
import logo from "../../assets/images/Merge.-1.png";
import "../../assets/css/Screen2.css";
import { NavLink, Redirect, withRouter } from 'react-router-dom';
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
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

            this.props.history.push('/login/student');
        }
        else {
            document.getElementById("start-test").disabled = true;
        }
    }
    check(e) {
        if (e.target.checked) {
            document.getElementById("start-test").disabled = false;
        }
        else {
            document.getElementById("start-test").disabled = true;
        }

    }
    move() {
        // alert("Hello")
        localStorage.setItem("merge_test", true);
        // return <Redirect to="/quiz" />;

        this.props.history.push("/quiz");
    }
    render() {


        return (
            <div className="container-fluid" style={{ padding: "0" }}>
                {/* <div className="mobile-view-quiz">
                    <Mobile />
                </div> */}

                    <div className="container-fluid instruction-box-main mx-auto">
                        <h2 className="mx-auto text-center" style={{ fontWeight: "1000" }}><b>Instructions</b></h2>
                        <p className="text-right step1">3/3 </p>
                        <ul className="justify-content-center mx-auto text-left instructions-mobile" style={{ listStyle: "none" }} >
                            <li className="instructions-mobile"
                             style={{ fontSize: "20px", fontWeight: "400", padding: "15px" }}>
                                <b>1.</b> To save your answer press "NEXT" button.
                        </li>
                            <li  className="instructions-mobile"
                             style={{ fontSize: "20px", fontWeight: "400", padding: "15px" }}>
                                <b>2.</b> For each question alloted time is 30 seconds.
                        </li>
                            <li  className="instructions-mobile"
                             style={{ fontSize: "20px", fontWeight: "400", padding: "15px" }}>
                                <b>3.</b> Assessment test has 30 questions for every selected skill.

                        </li>
                            <li   className="instructions-mobile"
                            style={{ fontSize: "20px", fontWeight: "400", padding: "15px" }}>
                                <b>4.</b> Switching the tab or changing the browser will lead to disqualification.
                        </li>
                            <li   className="instructions-mobile"
                            style={{ fontSize: "20px", fontWeight: "400", padding: "15px" }}>
                                <b>5.</b>After clearing at least one skill, you can apply for internships.
                        </li>
                        </ul>
                        <div className="row no-gutters instruction-check">
                            <input type="checkbox" className="check-instruction"
                                onClick={(e) => { this.check(e) }}
                                style={{ height: "20px" }} id="vehicle1" name="vehicle1" value="Bike" />
                            <label  style={{ fontSize: "16px", marginLeft: "-50px" }} className="text-left instructions-mobile-accept" for="vehicle1"> I agree mentioned above all Instructions. </label>

                        </div>
                        <br />
                        <center>
                            <button id="start-test" className="btn btn-sm-primary btn-primary"
                                onClick={() => {
                                    this.move();
                                }}>
                                Proceed
                            </button>
                        </center>
                    </div>
                </div>
            
        );
    }
}

export default withRouter(Screen2);