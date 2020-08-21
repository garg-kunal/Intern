import React from "react";
import logo from "../assets/images/Merge..png";
import axios from '../../setup';
import "../assets/css/Screen2.css";
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
        console.log(this.state.boxes);
        if (this.state.boxes.length === 0){
            this.setState({
                message:"Please Checkout Technologies"
            },()=>{
                this.setState({
                    show:true
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
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt")===undefined) {
        
            this.props.history.push('/login/student');
        }
        else {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get('/api/accounts/student/tested_skills', headers)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        array: res.data.data,
                        frontEnd: res.data.frontend,
                        backend: res.data.backend,
                        database: res.data.database,
                        server: res.data.server

                    })
                })
                .catch((err) => console.log(err));
        }
    }
    pass(){
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get("/api/accounts/student/check_skills",headers)
        .then((res)=>{
            console.log(res.data);
            if(res.data.status===200)
                this.props.history.push("/student/resume_form/false");
            else{
                this.setState({
                    message:res.data.status_message.message
                },()=>{
                    this.setState({
                        show:true
                    })
                })
            }    
        })
        .catch((err)=>console.log(err));
    }
    render() {
        return (
            <div className="container-fluid main-box">
                <div className="logo">
                    <img src={logo} className="img img-fluid" />
                </div>
                <div className="container-fluid  innerBox">
                    <h4 >What tools do you use for your projects?</h4><br />
                    <div className="inputs container" >
                        <div className="row no-gutters">
                            <div className="col-md-3 mx-auto">
                                <h4 className="text-center" style={{ color: "black" }}> Frontend:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="container flew-wrap d-flex flex-row">
                                    {this.state.frontEnd.map((item, key) =>
                                        <div className="col-md-3 col-lg-3 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
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

                        <div className="row no-gutters">
                            <div className="col-md-3 mx-auto">
                                <h4 className="text-center" style={{ color: "black" }}> Backend:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="container flew-wrap d-flex flex-row">
                                    {this.state.backend.map((item, key) =>
                                        <div className="col-md-3 col-lg-3 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
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
                        <div className="row no-gutters">
                            <div className="col-md-3 mx-auto">
                                <h4 className="text-center" style={{ color: "black" }}> Database:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="container flew-wrap d-flex flex-row">
                                    {this.state.database.map((item, key) =>
                                        <div className="col-md-3 col-lg-3 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
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
                        <div className="row no-gutters">
                            <div className="col-md-3 mx-auto">
                                <h4 className="text-center" style={{ color: "black" }}> Server:</h4>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <div className="container flew-wrap d-flex flex-row">
                                    {this.state.server.map((item, key) =>
                                        <div className="col-md-3 col-lg-3 mx-auto">
                                            {item.status === 'R' || item.status === 'A' ?
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
                                                >
                                                    {item.skill}
                                                </label>
                                                :
                                                <label className="checkLabel" style={{ backgroundColor: item.color }}
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
                    <div className="buttons">
                        <button type="button" onClick={this.printData} className="confirmation btn">Done</button>
                        <button type="button" onClick={()=>{this.pass()}} className=" btn confirmation1">Cancel</button>
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
            </div >
        );
    }
}

export default Screen2;