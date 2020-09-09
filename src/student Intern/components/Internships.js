import React from 'react';
import '../../assets/css/Intern.css';
import $ from 'jquery';
import date from '../../assets/images/calender.png';
import rupee from '../../assets/images/rupee.png';
import start from '../../assets/images/start.png';
import unlimited from '../../assets/images/unlimited.png';
import path from '../../assets/images/Path.png'
import house from '../../assets/images/sydney-opera-house.png';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Axios from '../../setup';
import { Modal } from 'react-bootstrap';

export default class Internship extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            page: 0,
            messages: [],
            prev: true,
            next: true,
            show: false,
            filter: [],
            interns: [

                {
                    based: "php ",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                }
            ]
        }



        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        $("document").ready(function ($) {

            $(window).on("resize", function (e) {
                checkScreenSize();
            });
            checkScreenSize();
            function checkScreenSize() {
                var newWindowWidth = $(window).width();
                var nav = $('#filters');
                var intern = $('#internsAll');
                var button = $('#buttonsAll');
                if (newWindowWidth > 1250) {
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 150) {
                            nav.addClass("f-nav");
                            intern.addClass("f-nav1");
                            button.addClass("f-nav2");
                        } else {
                            nav.removeClass("f-nav");
                            intern.removeClass("f-nav1");
                            button.removeClass("f-nav2");
                        }
                    });
                }
                else {
                    $(window).scroll(function () {

                        nav.removeClass("f-nav");
                        intern.removeClass("f-nav1");
                        button.removeClass("f-nav2");

                    });

                }

            }


        });
    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };


    inc() {

        if (this.state.page > 0 && (this.state.page * 5 < this.state.interns.length)) {
            this.setState({
                next: false,
            })
        } else {
            this.setState({
                page: this.state.page + 1,
                prev: true
            })
        }

    }
    dec() {

        if (this.state.page === 0) {
            this.setState({
                prev: false
            })
        }
        else {
            this.setState({
                page: this.state.page - 1,
                next: true

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
            Axios.get('/api/accounts/student/view_internships', headers)
                .then((res) => {
                    // console.log(res.data)
                    if (res.data.status === 200) {
                        this.setState({
                            interns: res.data.data
                        })
                    }
                    else if (res.data.status !== 200) {
                        this.state.messages.push(res.data.status_message.message);
                        this.setState({
                            show: true
                        }, () => {
                            this.props.history.push('/test_skills')
                        })

                    }
                })
                .catch((err) => console.log(err))
        }
    }
    getIntern(e) {

        if (e.target.checked) {
            this.state.filter.push(e.target.value);
        }

    }
    applyFilter() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const data = {
            filter: this.state.filter
        }
        // console.log(this.state.filter);
        if (this.state.filter.length === 0) {
            Axios.get('/api/accounts/student/view_internships', headers)
                .then((res) => {
                    // console.log(res.data)
                    if (res.data.status === 200) {
                        this.setState({
                            interns: res.data.data
                        })
                    }
                    else if (res.data.status !== 200) {
                        this.state.messages.push(res.data.status_message.message);
                        this.setState({
                            show: true
                        }, () => {
                            this.props.history.push('/test_skills')
                        })

                    }
                })
                .catch((err) => console.log(err))


        }
        else {
            Axios.post('/api/accounts/student/filter_internships', data, headers)
                .then((res) => {
                    // console.log(res.data)
                    if (res.data.status === 200) {
                        this.setState({
                            interns: res.data.data,
                            filter: []
                        })
                    }
                    else if (res.data.status !== 200) {
                        this.state.messages.push(res.data.status_message.message);
                        this.setState({
                            show: true
                        }, () => {
                            this.props.history.push('/test_skills')
                        })

                    }
                })
                .catch((err) => console.log(err));
        }

    }

    render() {
        return (
            <div className="container-fluid  container-main-box-intern  pt-5" style={{ marginTop: "50px" }}>
                {/* <Navbar/> */}
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <p className="text-center mx-auto Intern-main-heading">
                            Internships
                         </p>
                    </div>
                </div>
                <div className="container-fluid container-intern" >
                    <div className="row no-gutters">
                        <div className="col-md-3 col-lg-3  col-12 intern-filters" id="filters" >
                            <h4 className="mx-auto text-center mb-3">Filters</h4>
                            {/* <label className="label-filter ml-3">Category</label> */}
                            {/* <input class="form-control form-filter" type="search" placeholder="e.g. Web Developer" aria-label="Search" /> */}

                            <div className=" mx-auto mt-5">
                                <section class="slider-checkbox mt-3 ml-3">
                                    <input type="checkbox" value="Work from home" onChange={(e) => { this.getIntern(e) }} id="1" />
                                    <label class="label-filter label" for="1">Work From Home&nbsp;</label>
                                </section>

                                <section class="slider-checkbox mt-3 ml-3" >
                                    <input type="checkbox" value="Part Time" onChange={(e) => { this.getIntern(e) }} id="1" />
                                    <label class="label-filter label" for="1">Part Time&nbsp;</label>
                                </section>
                                <section class="slider-checkbox mt-3 ml-3">
                                    <input type="checkbox" value="Full Time" onChange={(e) => { this.getIntern(e) }} id="1" />
                                    <label class="label-filter label" for="1">Full Time&nbsp;</label>
                                </section>
                                <button onClick={() => { this.applyFilter() }} className="btn btn-intern-search pull-right">Apply Filters</button>

                            </div>

                        </div>
                        <div className="col-md-9 col-lg-9  col-12 card-intern-student" id="internsAll" >
                            {this.state.interns.map((item, key) => {
                                if ((this.state.page * 6 <= key) && (this.state.page + 1) * 6 > key)
                                    return (<div className="card card-intern" key={key}>
                                        <div className="card-body" data-aos="zoom-in" data-aos-duration="1000">
                                            <div className="row flex-wrap">
                                                <div className="col-md-6 col-12">
                                                    <b className="intern-based">{item.profile}</b><br />
                                                    <b className="intern-company">{item.company}</b>

                                                </div>
                                                <div className="col-md-2 col-2"></div>
                                                <div className="col-md-4">
                                                    <img src={item.logo}
                                                        align="right" style={{ float: "top-right" }} style={{ height: "50px", width: "50px" }}
                                                        alt="company logo" className="img company-logo" />
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <p className="house">
                                                <img src={house} className="img-fluid" style={{ height: "20px", width: "20px" }} alt="Home" />
                                                <span className="intern-type">{item.place}</span></p>
                                            <div className="row no-gutters">
                                                <div className="col-md-3  col-lg-3 col-6  mx-auto">
                                                    <p className="intern-head ">
                                                        <img src={start} className="img-fluid details-icons " alt="Start" />&nbsp;Joining Date
                                    </p>
                                                    {item.joiningdate}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6  mx-auto">
                                                    <p className="intern-head">
                                                        <img src={date} className="img-fluid details-icons " alt="Duration" />&nbsp;Duration
                                    </p>
                                                    {item.duration}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6  mx-auto">
                                                    <p className="intern-head mx-auto">  <img src={rupee} className="img-fluid details-icons " alt="Rupee" />&nbsp;
                                                        Stipend</p>
                                                    {item.stipend_type}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6 mx-auto">
                                                    <p className="intern-head">
                                                        <img src={unlimited} className="img-fluid details-icons paisa" alt="Apply Date" />&nbsp;
                                                        Apply By</p>
                                                    {item.joiningdate}
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row" style={{ float: "right" }}>
                                                <p className="intern-details"><NavLink
                                                    style={{ color: "#4A00E0" }}
                                                    to={{
                                                        pathname: "/student/view_intern",
                                                        id: {
                                                            key: item.id
                                                        }

                                                    }}>Job Details </NavLink>
                                                    <img src={path} className="img-fluid" style={{ height: "10px", width: "10px" }} alt="path" /></p>
                                            </div>

                                        </div>
                                    </div>
                                    )


                            }

                            )}
                            <div className="row " id="buttonsAll">
                                {this.state.prev ?
                                    <button className="btn intern-previous" onClick={() => { this.dec() }}>
                                        <img src={path} style={{ height: "15px", width: "15px" }} />
                                    </button> :
                                    <button className="btn intern-previous"></button>}
                                <b className="page-no-intern">{this.state.page}</b>

                                {this.state.next ? <button className="btn intern-next pull-right" onClick={() => { this.inc() }}>
                                    <img src={path} style={{ height: "15px", width: "15px" }} />
                                </button> : <button className="btn intern-next"></button>}
                            </div>


                        </div>

                    </div>

                </div>
                <br />
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
        )
    }
}