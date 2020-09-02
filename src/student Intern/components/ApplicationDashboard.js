import React from 'react';
import '../assets/css/ApplicationDashboard.css';
// import arrow from '../assets'
import arrow from '../assets/images/baseline-arrow.png';
import docs from '../assets/images/docs.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import axios from '../../setup';
import { Modal } from 'react-bootstrap';


export default class Dashboard extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            application: [],
            page: 0,
            show: false,
            messages: [],
            applications: []

        }
    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };
    prev() {
        if (this.state.page === 0 || this.state.page<0) {
            this.setState({
                messages: []
            }, () => {
                this.state.messages.push("No More Previous Date..");
                this.setState({
                    show: true
                })

            });
        }
        else  {
            this.setState({
                application: [],
                page: this.state.page - 1
            }, () => {
                for (var i = this.state.page * 5; i < ((this.state.page + 1) * 5 && this.state.applications.length); i++) {
                    this.state.application.push(this.state.applications[i]);
                    console.log(this.state.application);
                }
            })
        }

    }
    next() {


        if (this.state.applications.length === this.state.page * 5 || this.state.applications.length <= this.state.page * 5 ) {
            this.setState({
                messages: []
            }, () => {
                this.state.messages.push("No More Date..");
                this.setState({
                    show: true
                })

            });

        }
        else {
            this.setState({
                application: []
            }, () => {

                for (var i = this.state.page * 5; i <( (this.state.page + 1) * 5 && this.state.applications.length); i++) {
                    this.state.application.push(this.state.applications[i]);
                    console.log(this.state.application);
                    this.setState({
                        page: this.state.page + 1
                    })
                }
            })

        }


    }
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

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
            // student/internship/view_applied
            axios.get('/api/accounts/student/internship/view_applied', headers)
                .then((res) => {
                    this.setState({
                        applications: res.data.data
                    }, () => {
                        this.next();
                    })
                })
                .catch((err) => console.log(err))

        }
    }

    render() {
        return (
            <div className="container-fluid container-main-box" style={{marginTop:"40px"}}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 "></div>
                        <div className="col-md-4 col-lg-4  mx-auto">
                            <p className=" main-heading-page text-center  mx-auto">My Applications</p></div>
                        <div className="offset-lg-2 col-md-2 col-lg-2  ">
                            {/* <NavLink className="btnApply" to="/student/internships" >Apply More</NavLink> */}
                        </div>
                    </div>
                </div>


                <div className="container-fluid container-inner-box mb-5">
                    <div className="row  no-guuters headings">
                        <div className="col-md-2 col-lg-2 ">
                            <p className="special-heading text-center mx-auto">Company <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>

                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading text-center mx-auto">Profile <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading text-center  mx-auto">Review Appli. <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading text-center  mx-auto">Applied Date <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading text-center mx-auto">No. of Appli.. <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading text-center  mx-auto">Status <img className="img-fluid" src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>

                    </div>
                    <hr className="main-hr" />
                    <div className="card border-0 ">
                        <br />
                        {this.state.application.map((item, key) =>
                            <div className="row" key={key} data-aos="fade-up" data-aos-duration="3000">
                                <div className="col-md-2 col-lg-2 ">
                                    <p className="special-sub-heading mx-auto">
                                        {item.company}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.profile}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">
                                        <NavLink to={{
                                            pathname: '/resume',
                                            id: {
                                                key: item.id
                                            }
                                        }} >
                                            <img src={docs} className="img-fluid"
                                                style={{ height: "20px", width: "20px" }} />
                                        </NavLink>
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.applydate}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.applicants}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{(item.status == "A") ?
                                        <button className="btn btnstatus">Selected</button>
                                        : (item.status === 'R' ? <button className="btn btnfail">Not Selected</button>
                                            : <button className="btn btnView">InReview</button>)}
                                    </p>
                                </div>
                                <hr />
                            </div>
                        )}
                    </div>

                </div>
                <div className="container row mx-auto">
                    <button className="btn mx-auto btn-sm btn-primary" onClick={() => { this.prev() }}>Prev</button>

                    <button className="btn mx-auto btn-sm btn-primary" onClick={() => { this.next() }}>Next</button>

                </div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={{marginTop:"60px"}}
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        {this.state.messages}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}