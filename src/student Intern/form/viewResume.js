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
            console.log(this.props.location.id.key);

            axios.get('/api/accounts/student/review_application/' + this.props.location.id.key)
                .then((res) => {

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


    imageHandler = (e) => {
        this.setState({
            picLink: e
        })
    }

    render() {
        return (
            <div className="container-fluid main-container" >
                <div className="row no-gutters">
                    <button className="btn ml-5 mt-2" onClick={()=>{window.history.back()}} style={{background:"transparent",color:"#4A00E0"}}> Back</button>
                   </div>
                <br />
                <div className="container-fluid inner-container" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="2500">
                    <div className="row"><h3 className="mx-auto heading">Student Information</h3></div>
                    <div className="row">
                        <div className=" col-md-2 col-lg-2 pt-4">
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

                    <div className="row">
                        <div className="col-md-3">
                            <label className="labels label-education">Education:</label>
                        </div>

                        <div className="col-md-9">
                            {/* <p className="education-pt"><button className="btn btnEdu" onClick={()=>{}} >+ Add Education</button></p> */}
                            {Object.getOwnPropertyNames(this.state.edu10).length >= 1 ?
                                <div>
                                    <div className="row  no-gutters student-10-data">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-9 student-data-form">
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
                                    <div className="row no-gutters student-10-data">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-9 student-data-form" >
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
                                    <div className="row no-gutters student-10-data">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-9 student-data-form" >
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
                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            <label className="labels label-education">Past Expierence:</label>
                        </div>
                        <div className="col-md-9 ">
                            {this.state.pastexperience.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="row no-gutters student-10-data">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-9 student-data-form">
                                            <b>Organization: </b>{item.organization}<br />
                                            <b>Role: </b>{item.profile}<br />
                                            <b>Internship Type: </b>{item.internship_type}<br />
                                            <b>Start Date: </b>{item.startdate}<br />
                                            <b>End Date: </b>{item.enddate}<br />
                                            <b>Description: </b>{item.description}<br />
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>

                    <hr />

                    <br />
                    <div className="row no-gutters ">
                        <div className="col-md-3">
                            <label className="labels label-education">Skills:</label>
                        </div>
                        <div className="col-md-9">
                            {this.state.skills.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="row no-gutters student-10-data">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-p student-data-form">
                                            <b>Skill:  </b>{item.skill} <br></br>
                                            <b>Level: </b>{item.level}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <hr />
                    <div className="row no-gutters ">
                        <div className="col-md-3">
                            <label className="labels label-education">Portfolio:</label>
                        </div>
                        <div className="col-md-9">
                            {this.state.portfolio.map((item, key) =>
                                <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                    <div className="row no-gutters student-10-data pt-2">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 col-9 student-data-form" >
                                            <b>{key}:  </b>{item.link} <br></br>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <hr />
                    <div className="row no-gutters  student-10-data">
                        <div className="col-md-3">
                            <label className="labels label-education">Additional:</label>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-8  col-lg-8 student-data-form">
                            {this.state.data.bio}
                        </div>
                    </div>
                    <hr />
                    <br />
                    <label className=" labels label-education">Questions And Answers:</label>
                    <br /><br />
                    <div className="">
                        {this.state.questions.map((item, key) =>
                            <div className="">
                                <div className="row no-gutters">
                                    {/* <div className="col-md-1"></div> */}
                                    <div className="col-md-6 ml-3">
                                        <h4 className="student-data-form"><b>Q. &nbsp;</b>{item}</h4>
                                        <p className="student-data-form"><b>A. &nbsp;</b>{this.state.answers[key]}</p>
                                    </div>

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