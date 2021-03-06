import React, { Component } from "react";
import Welcome from "../Welcome";
import { Modal } from "react-bootstrap";
import '../../assets/css/student_form.css';
import axios from '../../setup';
export class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile_number: "",
            city: "",
            messages: [],
            show: false,
            password: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    handleNameChange(event) {
        this.setState({ name: event.target.value }, () => {
            console.log(this.state);
        });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value }, () => {
            console.log(this.state);
        });
    }

    handleNumberChange(event) {
        this.setState({ mobile_number: event.target.value }, () => {
            console.log(this.state);
        });
    }



    handleSubmit(event) {
        const data = {
            mobile_number: this.state.mobile_number,
            password:this.state.password
        }
        this.setState({
            messages: []
        })
        axios.post('/api/accounts/admin/secret_login', data)
            .then((res) => {
                
                if (res.data.status === 200){
                    localStorage.setItem("admin_jwt",res.data.jwt);
                    this.props.history.push('/admin');
                }
                else if (res.data.status !== 200)
                    this.state.messages.push(res.data.status_message.message);
                this.setState({
                    show: true
                })
            })
            .catch((err) => {
                console.log(err)
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: "0" }}>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-6 text-white violet_sq_bg">
                        <Welcome />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-md-5 mt-3" style={{ padding: "10px" }}>
                        <nav className="navbar navbar-expand-lg">
                            <ul className="navbar-nav">
                                <li className="nav-item px-sm-3 px-xs-2 ml-0">
                                    <h3
                                        className="font-weight-bolder"
                                        style={{
                                            color: "#4A00E0",
                                        }}
                                    >
                                        Sign In
                    </h3>
                                </li>
                            </ul>

                        </nav>
                        <form onSubmit={this.handleSubmit}>
                            <div className="ml-md-3">



                                <div className="form-group form-content text-left mt-md-5">
                                    <input
                                        type="text"
                                        name="mobile_number"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        pattern="^\d{10}$"
                                        maxLength="12"
                                        required
                                        style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                        id="id_mobile_number"
                                        onChange={this.handleNumberChange}
                                        value={this.state.mobile_number}
                                    />
                                </div>
                                <div className="form-group form-content text-left mt-md-5">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                        style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                        id="id_mobile_number"
                                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                                        value={this.state.password}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#89EA91",
                                        color: "white",
                                        borderRadius: "30px",
                                        float: "right"
                                    }}
                                    className="btn btn-lg col-5 pull-right"
                                >
                                    Sign In
                  </button>
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
                                <ul style={{ listStyleType: "none" }}>
                                    {Object.keys(this.state.messages).map(
                                        (message_key, index) => (
                                            <li key={index}>{this.state.messages[message_key]}</li>
                                        )
                                    )}
                                </ul>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>

        );
    }
}

export default AdminLogin;
