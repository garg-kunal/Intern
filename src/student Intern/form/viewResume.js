import React from 'react';
import './form.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImagePicker } from 'react-file-picker'
import Navbar from '../quiz/navbar';
import userpng from './images/NoPath.png';
import Past from './pastexpereince';
import Phd from './educations/Phd';
import SchoolX from './educations/10School';
import SchoolXII from './educations/school';
import PostGrad from './educations/postGraduation';
import Graduation from './educations/graduation';
import Skills from './skills';
import Additonal from './additional';
import Potfolio from './portfolioLink';
import axios from '../../setup';
import { Modal } from 'react-bootstrap';

export default class Form extends React.Component {

    constructor() {
        super();
        AOS.init();
        this.state = {
            picLink: "",
            url: "",
            school: "",
            college: "",
            university: "",
            address: "",
            dob: "",
            pin: "",
            portfolio: [],
            resume: [],
            showAdd: false,
            show: false,
            messages: [],
            data: "",
            pastexperience: [],
            skills: [],
            questions: [],
            answers: [],
            edu10: {},
            edu12: {},
            grad: {}
        }
    }
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {
            this.props.history.push('/login/student');
        }
        else {
            if (this.props.location.id === undefined) {
                this.state.messages.push("Please Try Again Later");
                alert("Try Again Later")
                this.setState({
                    show: true
                }, () => {
                    window.history.back();
                })

            }
            else {
                const headers = {
                    headers: {
                        'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
                axios.get('/api/accounts/student/review_application/' + this.props.location.id.key, headers)
                    .then((res) => {
                        console.log(res.data.data);
                        this.setState({
                            data: res.data.data,
                            skills: res.data.data.skills,
                            portfolio: res.data.data.portfolio,
                            pastexperience: res.data.data.experience,
                            questions: res.data.data.questions,
                            answers: res.data.data.answers,
                            edu10: res.data.data.edu10,
                            edu12: res.data.data.edu12,
                            grad: res.data.data.grad

                        }, () => {
                            console.log(res.data.data.edu10)
                            console.log(this.state.pastexperience)
                        })
                    })
                    .catch((err) => console.log(err));
            }
        }
    }

    imageHandler = (e) => {
        this.setState({
            picLink: e
        })
    }

    render() {
        return (
            <div className="container-fluid main-container" >
                <br />
                <div className="container-fluid inner-container" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="2500">
                    <div className="row"><h3 className="mx-auto heading">Student Information</h3></div>
                    <div className="row">
                        <div className=" col-md-2 col-lg-2">
                            <img src={this.state.picLink || userpng}
                                alt="user" className="img-fluid"
                                Height="180" width="180"
                            /><br />

                        </div>
                        <div className="col-md-10 col-lg-10 username mx-auto">
                            <h3><strong>{this.state.data.name}</strong></h3>
                            {this.state.data.email}<br />
                            {this.state.data.mobile_number}<br />
                            {this.state.data.city}<br />
                            <hr></hr>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-2">
                            <label className="labels">Education:</label>
                        </div>

                        <div className="col-md-10">
                            {/* <p className="education-pt"><button className="btn btnEdu" onClick={()=>{}} >+ Add Education</button></p> */}
                            {Object.getOwnPropertyNames(this.state.edu10).length >= 1 ?
                                <div>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>School:  </b> &nbsp;{this.state.edu10.school}<br />
                                            <b>Board:  </b>&nbsp; {this.state.edu10.board}<br />
                                            <b>CLass:  </b>&nbsp;X<br />
                                            <b>Marks:  </b>&nbsp;{this.state.edu10.cgpa_percentage}<br />
                                            <b>Start Date:  </b>&nbsp; {this.state.edu10.startdate}<br />
                                            <b>End Date:  </b>&nbsp; {this.state.edu10.enddate}

                                        </div>
                                    </div>

                                </div> : null}
                            <br />
                            {Object.getOwnPropertyNames(this.state.edu12).length >= 1 ?
                                <div>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>School:  </b> &nbsp;{this.state.edu12.school}<br />
                                            <b>Board:  </b>&nbsp; {this.state.edu12.board}<br />
                                            <b>CLass:  </b>&nbsp;X11<br />
                                            <b>Marks:  </b>&nbsp;{this.state.edu12.cgpa_percentage}<br />
                                            <b>Start Date:  </b>&nbsp; {this.state.edu12.startdate}<br />
                                            <b>End Date:  </b>&nbsp; {this.state.edu12.enddate}

                                        </div>
                                    </div>

                                </div> : null}
                            <br />

                            {Object.getOwnPropertyNames(this.state.grad).length >= 1 ?
                                <div>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>Branch:  </b> &nbsp;{this.state.grad.branch}<br />
                                            <b>University:  </b>&nbsp; {this.state.grad.university}<br />
                                            <b>Marks:  </b>&nbsp;{this.state.grad.cgpa_percentage}<br />
                                            <b>Start Date:  </b>&nbsp; {this.state.grad.startdate}<br />
                                            <b>End Date:  </b>&nbsp; {this.state.grad.enddate}

                                        </div>
                                    </div>

                                </div> : null

                            }


                        </div>
                    </div>

                    <hr />
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Past Expierence:</h3>
                        </div>
                        <div className="col-md-9">
                            {this.state.pastexperience.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="col-md-3">

                                    </div>
                                    <div className="col-md-6" style={{ fontSize: "20px" }}>
                                        <b>Organization: </b>{item.organization}<br />
                                        <b>Role: </b>{item.profile}<br />
                                        <b>Internship Type: </b>{item.internship_type}<br />
                                        <b>Start Date: </b>{item.startdate}<br />
                                        <b>End Date: </b>{item.enddate}<br />
                                        <b>Description: </b>{item.description}<br />
                                    </div>

                                    <div className="col-md-3" style={{ padding: "10px" }}>


                                    </div>


                                </div>)}
                        </div>
                    </div>

                    <hr />

                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Skills:</h3>
                        </div>
                        <div className="col-md-9">
                            {this.state.skills.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>Skill:  </b>{item.skill} <br></br>
                                            <b>Level: </b>{item.level}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <br /><br /><hr />
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Portfolio:</h3>
                        </div>
                        <div className="col-md-9">
                            {this.state.portfolio.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>{key}:  </b>{item.link} <br></br>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <br /><br /><br />
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Additional:</h3>
                        </div>
                        <div className="col-md-9  col-lg-9">
                            <p>  {this.state.data.bio}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    {/* Qiestins render here */}
                    <div className="">
                        {this.state.questions.map((item, key) =>
                            <div>
                                <div className="">
                                    <h4 className="">{item}</h4>
                                    <p>{this.state.answers[key]}</p>
                                </div>
                                <br />
                            </div>
                        )}
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
                        {this.state.messages}
                    </Modal.Body>
                </Modal>
                <br /><br />
            </div>
        )
    }

}