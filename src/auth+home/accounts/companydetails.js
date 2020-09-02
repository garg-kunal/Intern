import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import cookie from "react-cookies";
import Welcome from "../Welcome";
import Navbar from './companydetailNav';
import { Modal } from "react-bootstrap";
import '../assets/css/student_form.css';
import axios from '../../setup';
import logo1 from '../assets/comlogo.jpg';
import { ImagePicker } from 'react-file-picker';
export class CompanyRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            website: "",
            contact_person: "",
            logo: "",
            about: "",
            location: "",
            messages: [],
            company_name: "",
            mobile_number: "",
            email: "",
            company_type: "",
            show: false,
        };


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


    handleSubmit(event) {
        const form =new FormData();
        form.append("address", this.state.address);
        form.append("website", this.state.website);
        form.append("location", this.state.location);
        form.append("about", this.state.about);
        form.append("spoc", this.state.contact_person);
        // form.append("image", this.state.logo);


        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
                "Content-Type": "multipart/form-data",
            }
        }
        this.setState({
            messages: []
        })

        axios.post('/api/accounts/company/save_details', form, headers)
            .then((res) => {
                console.log(res.data.status_message.message)
                if (res.data.status === 200)
                    this.props.history.push('/save_company');
                else if (res.data.status !== 201)
                    this.state.messages.push(res.data.status_message.message)
                this.setState({
                    show: true
                })

            })
            .catch((err) => {
                console.log(err)
            })


        event.preventDefault();
    }
    componentDidMount() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        console.log(this.props.match.params);
        axios.get('/api/accounts/company/get_details', headers)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    email: res.data.data.email,
                    company_name: res.data.data.name,
                    company_type: res.data.data.type,
                    mobile_number: res.data.data.mobile_number
                })


            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: "0" }}>
                <Navbar />
                <div className="container mt-3 mx-auto company-detail-main" >

                    <form onSubmit={this.handleSubmit}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="col-md-3 col-lg-3 col-12 ">
                                    <div className="form-group">
                                        <img src={this.state.logo || logo1} style={{ height: "160px", width: "170px", border: "1px solid #4A00E0" }}
                                            className="img-fluid company-logo-main" alt="logo" />
                                        <ImagePicker
                                            extensions={['jpg', 'jpeg', 'png']}
                                            dims={{ minWidth: 100, maxWidth: 5000, minHeight: 100, maxHeight: 5000 }}
                                            onChange={(base64) => { this.setState({ logo: base64 }) }}
                                            onError={errMsg => (alert(errMsg))}
                                        >
                                            <button className="btn btns text-center mx-auto">
                                                + Add Image
                                                </button>
                                        </ImagePicker>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 col-12">
                                    <div className="mt-2">
                                      <b>Company:</b>&nbsp;&nbsp;{this.state.company_name}<br/>
                                         <b>Email:</b> &nbsp;&nbsp;{this.state.email}<br/>
                                          <b>Registered Mobile No:</b> &nbsp;&nbsp;{this.state.mobile_number}<br/>
                                         <b>Company Type:</b> &nbsp;&nbsp;{this.state.company_type}<br/>
                                    </div>

                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Website"
                                    maxLength="128"
                                    required
                                    id="id_name"
                                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                    onChange={(e) => { this.setState({ website: e.target.value }) }}
                                    value={this.state.website}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="location"
                                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                    className="form-control"
                                    placeholder="Location"
                                    maxLength="50"
                                    required
                                    id="id_email"
                                    onChange={(e) => { this.setState({ location: e.target.value }) }}
                                    value={this.state.location}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    rows="1"
                                    cols="2"
                                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                    className="form-control"
                                    placeholder="About Company.."
                                    onChange={(e) => { this.setState({ about: e.target.value }) }}
                                    value={this.state.about}
                                />
                            </div>

                            <div className="form-group ">
                                <input
                                    type="text"
                                    name="address"
                                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                    className="form-control"
                                    placeholder="Address.."
                                    maxLength="50"
                                    required
                                    id="id_email"
                                    onChange={(e) => { this.setState({ address: e.target.value }) }}
                                    value={this.state.address}
                                />
                            </div>



                            <div className="form-group">
                                <input
                                    type="text"
                                    name="mobile_number"
                                    className="form-control"
                                    placeholder="Contact Person Name"
                                    required
                                    style={{ borderRadius: "0", border: "1px solid lightgrey" }}
                                  
                                    onChange={(e) => { this.setState({ contact_person: e.target.value }) }}
                                    value={this.state.contact_person}
                                />
                            </div>
                            <center>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#89EA91",
                                        color: "white",
                                        borderRadius: "30px",
                                    }}
                                    className="btn btn-lg col-7 mb-3"
                                >
                                    Save Data
                  </button>
                            </center>
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
                            {this.state.messages}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>

        );
    }
}

export default CompanyRegister;
