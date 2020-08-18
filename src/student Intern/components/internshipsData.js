import React from "react";
import logo from "../assets/images/Merge..png";
import axios from '../../setup';
import "../assets/css/internshipsData.css";
import { Modal } from 'react-bootstrap';
class InternshipsData extends React.Component {
    constructor() {
        super();
        this.state = {
            domain1: "",
            domain2: "",
            domain3: "",
            internshipsType: "",
            message: "",
            show: false
        }

        this.checkInternshipType = this.checkInternshipType.bind(this)
        this.valueChange = this.valueChange.bind(this)
    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };
    saveInfo(e) {
        e.preventDefault();
        const data = {
            preference1: this.state.domain1,
            preference2: this.state.domain2,
            preference3: this.state.domain3,
            job_type: this.state.internshipsType,

        };
        const headers = {
            headers: {
                 'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            }
        }
        axios.post('/api/accounts/student/loc_preference',data,headers)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 200)
                    this.props.history.push('/quiz/instructions');
                else if (res.data.status !== 200) {
                    this.setState({
                        message: res.data.status_message.message,
                        show: true
                    })
                }
            })
            .catch((err) => console.log(err));

    }
    valueChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    checkInternshipType(e) {
        if (e.target.checked) {
            this.setState({
                internshipsType: e.target.value
            })
        }
    }

    render() {
        return (
            <div className="container-fluid main-box main-box-location">
                <div className="logo" style={{ marginBottom: "10px", paddingTop: "15px" }}>
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
                            <input type="radio" style={{ fontSize: "20px" }} className="form-control" name="role" value="full time" onClick={(e) => { this.checkInternshipType(e) }} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-lg-4 text-center">
                            <label className="roleLabel"> Part Time  Job/Internship</label>
                        </div>
                        <div className="col-md-1 col-lg-1 text-center">
                            <input type="radio" className="form-control" name="role" value="part time" onClick={(e) => { this.checkInternshipType(e) }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 text-center">
                            <label className="roleLabel"> Both</label>
                        </div>
                        <div className="col-md-1 col-lg-1 text-center">
                            <input type="radio" className="form-control" name="role" value="both" onClick={(e) => { this.checkInternshipType(e) }} />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" style={{ padding: "5px" }} onClick={(e) => { this.saveInfo(e) }} className="confirmation">Done</button>
                        <button type="button" style={{ padding: "5px" }} className="confirmation1"
                            onClick={() => {
                                this.setState({
                                    domain1: "",
                                    domain2: "",
                                    domain3: "",
                                    internshipsType: ""
                                })
                            }}>Cancel</button>
                    </div>
                </form>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <p style={{ color: "red" }}>{this.state.message}</p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default InternshipsData;
