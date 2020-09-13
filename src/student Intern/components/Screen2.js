import React from "react";
import logo from "../../assets/images/Merge.-1.png";
import axios from '../../setup';
import "../../assets/css/Screen2.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Modal, Spinner } from 'react-bootstrap';
class Screen2 extends React.Component {
    constructor() {
        super();
        this.state = {
            other: "",
            array: [],
            info: [],
            boxes: [],
            skill: [],
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
        // alert(this.props.location.id)

        if (localStorage.getItem("merge_jwt")) {
            if (this.props.location.id === undefined || this.props.location.id === null) {
                this.props.history.push('/nav/skillset');
            }
            else {
                // console.log(this.props.location.id.skill);
                this.setState({
                    skill: this.props.location.id.skill
                })
            }

        }
        else {
            this.props.history.push('/login/student');
        }
    }
    
    render() {
        return (
            <div className="container-fluid main-box" style={{ padding: "0" }}>

             
                <div className="container mx-auto innerBox">
                    <br />
                    <h4 style={{ fontWeight: "800" }}>What tools do you use for your {this.props.location.id === undefined ? window.location.href = '/nav/skillset' : this.props.location.id.name} projects?</h4>
                    <p className="text-right step1">1/3 </p><br /><br />
                    <div className="inputs mx-auto container" >
                       
                        <div className="container  d-flex flex-wrap flex-row">
                            {this.state.skill.map((item, key) =>
                                <div className="col-md-2 col-4 text-center"  >
                                    {item.status === 'R' || item.status === 'A' ?
                                        <label className="checkLabel"
                                            onMouseEnter={() => this.hoveron(item.status)}

                                            style={{ backgroundColor: item.color }}
                                        >
                                            {item.skill}
                                        </label>
                                        :
                                        <label className="checkLabel checkLabel1" style={{ minWidth: "14rem" }}

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
                        {/* </div> */}

                        {/* </div> */}
                        <br />
                        
                    </div>
                    <div className="buttons pt-3">
                        <button type="button" onClick={() => { window.history.back() }} className=" btn confirmation">Back</button>
                        <button type="button" onClick={this.printData} className="confirmation btn">Move To Test</button>
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