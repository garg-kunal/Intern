import React from "react";
import logo from "../../assets/images/Merge.-1.png";
import axios from '../../setup';
import "../../assets/css/Screen2.css";
import { Modal, Spinner } from 'react-bootstrap';
class Screen2 extends React.Component {
    constructor() {
        super();
        this.state = {
            other: "",
            array: [],
            info: [],
            boxes: [],
            frontEnd: [],
            backend: [],
            database: [],
            server: [],
            message: "Loading.....",

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
        }
        else if (element.style.backgroundColor === "#228B22") {
            element.style.backgroundColor = "#228B22"
        }
        else if (element.style.backgroundColor === "#FF0000") {
            element.style.backgroundColor = "#FF0000"
        }
        else {
            element.style.backgroundColor = "rgb(74, 0, 224)";
        }
    }
    hoveron(status) {
        if (status == 'R') {
            alert("Oops! You've not passed this Skill. Kindly try after One day.");
        }
        else {
            alert("Voila! You have cleared this Skill. Now you can apply for Internship.")
        }
    }

    addSkill(e) {
        if (e.target.checked)
            this.state.boxes.push(e.target.value);
        else {
            const index = this.state.boxes.indexOf(e.target.value);
            if (index > -1) {
                this.state.boxes.splice(index, 1);
            }
        }
    }
    printData = e => {
        e.preventDefault();
        // console.log(this.state.boxes);
        if (this.state.boxes.length === 0) {
            this.setState({
                message: "Please Checkout Technologies"
            }, () => {
                this.setState({
                    show: true
                })
            })
        }
        else {
            this.setState({
                message: "Loading...",
                show: true
            })
            const data = {
                skills: this.state.boxes
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
                        message: "Try Again Later"
                    })
                });
        }
    }
    componentDidMount() {

        if (localStorage.getItem("merge_jwt")) {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get('/api/accounts/student/tested_skills', headers)
                .then((res) => {
                    if (res.data.status === 200) {
                        this.setState({
                            array: res.data.data,
                            frontEnd: res.data.frontend,
                            backend: res.data.backend,
                            database: res.data.database,
                            server: res.data.server

                        }, () => {
                            // this.setState({
                            //     frontEnd: this.state.frontEnd.concat(this.state.backend)
                            // })

                        })
                    }
                    else {
                        this.setState({
                            message: "Please Login Again"
                        })
                        this.props.history.push("/login/student");
                    }
                })
                .catch((err) => console.log(err));

        }
        else {
            this.props.history.push('/login/student');
        }
    }
    pass() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get("/api/accounts/student/check_skills", headers)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 200)
                    this.props.history.push("/student/resume_form/false");
                else {
                    this.setState({
                        message: res.data.status_message.message
                    }, () => {
                        this.setState({
                            show: true
                        })
                    })
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="container-fluid main-box">

                <nav className="navbar pt-2 navbar-expand-lg navbar-light " style={{ background: "transparent !important" }}>
                    <img src={logo} className="img-fluid merge-logo-all-student" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">

                        </ul>
                        <span className="navbar-text">
                            <button className="btn" style={{ background: "transparent", color: "white" }} onClick={() => {
                                if (window.confirm("Are you sure")) {
                                    localStorage.removeItem("merge_jwt");
                                    this.props.history.push('/login/student');
                                }
                            }}>
                                Logout
                            </button>
                        </span>
                    </div>
                </nav>

                <div className="container mx-auto innerBox">
                    <h4 style={{ fontWeight: "800" }}>What tools do you use for your projects?</h4>
                    <p className="text-right step1">1/3 </p><br /><br />
                    <div className="inputs mx-auto container" >
                        <div className="row no-gutters row-cols">
                            <div className="col-md-3 mx-auto">
                                <h4 className="skill-name-frontend" style={{ color: "black" }}> Frontend:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="flew-wrap d-flex flex-row">
                                    {this.state.frontEnd.map((item, key) =>
                                        <div className="col-4 mx-auto ">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel"
                                                    onMouseEnter={() => this.hoveron(item.status)}

                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel checkLabel1"

                                                    style={{ backgroundColor: item.color }}
                                                    onClick={this.changeColor}>
                                                    <input type="checkbox"
                                                        onChange={(e) => { this.addSkill(e) }}

                                                        className="check"
                                                        name={item.skill} value={item.skill} />
                                                    {item.skill}
                                                </label>
                                            }</div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="row no-gutters row-cols">
                            <div className="col-md-3 text-left">
                                <h4 className="skill-name-frontend" style={{ color: "black" }}> Backend:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="flew-wrap d-flex flex-row">
                                    {this.state.backend.map((item, key) =>
                                        <div className="col-4 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel"
                                                    onMouseEnter={() => this.hoveron(item.status)}

                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel checkLabel1"

                                                    style={{ backgroundColor: item.color }}
                                                    onClick={this.changeColor}>
                                                    <input type="checkbox"
                                                        onChange={(e) => { this.addSkill(e) }}
                                                        className="check"
                                                        name={item.skill} value={item.skill} />
                                                    {item.skill}
                                                </label>
                                            }</div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="row no-gutters row-cols">
                            <div className="col-md-3 text-left">
                                <h4 className="skill-name-frontend" style={{ color: "black" }}> Database:</h4>
                            </div>
                            <div className="col-md-9  mx-auto">
                                <div className="flew-wrap d-flex flex-row">
                                    {this.state.database.map((item, key) =>
                                        <div className="col-4 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel"
                                                    onMouseEnter={() => this.hoveron(item.status)}

                                                    style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel checkLabel1"


                                                    style={{ backgroundColor: item.color }}
                                                    onClick={this.changeColor}>
                                                    <input type="checkbox"
                                                        onChange={(e) => { this.addSkill(e) }}
                                                        className="check"
                                                        name={item.skill} value={item.skill} />
                                                    {item.skill}
                                                </label>
                                            }</div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="row no-gutters row-cols">
                            <div className="col-md-3 text-left">
                                <h4 className="skill-name-frontend" style={{ color: "black" }}> Server:</h4>
                            </div>
                            <div className="col-md-9">
                                <div className=" flew-wrap d-flex flew-row">
                                    {this.state.server.map((item, key) =>
                                        <div className="col-4 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label
                                                    onMouseEnter={() => this.hoveron(item.status)}

                                                    className="checkLabel" style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label

                                                    className="checkLabel checkLabel1" style={{ backgroundColor: item.color }}
                                                    onClick={this.changeColor}>
                                                    <input type="checkbox"

                                                        onChange={(e) => { this.addSkill(e) }}
                                                        className="check"
                                                        name={item.skill} value={item.skill} />
                                                    {item.skill}
                                                </label>
                                            }</div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="buttons pt-3">
                        <button type="button" onClick={this.printData} className="confirmation btn">Move To Test</button>
                        <button type="button" onClick={() => { this.pass() }} className=" btn confirmation">Apply</button>
                    </div>
                    {/* <label className="checkLabel checkLabel1 pt-2 text-left" >Apply Test For These Skills</label> */}
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

            </div >
        );
    }
}

export default Screen2;