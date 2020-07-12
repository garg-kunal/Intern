import React from 'react';
import '../css/ApplicationDashboard.css';
import arrow from '../images/baseline-arrow.png';
import docs from '../images/docs.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class Dashboard extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            application: [
                {
                    company: "algo",
                    profile: "web development",
                    review: docs,
                    Applydate: "4/5/2020",
                    applicants: "25",
                    status: "not selected"
                },
                {
                    company: "algo",
                    profile: "web development",
                    review: docs,
                    Applydate: "4/5/2020",
                    applicants: "25",
                    status: "selected"
                },
                {
                    company: "algo",
                    profile: "web development",
                    review: docs,
                    Applydate: "4/5/2020",
                    applicants: "25",
                    status: "selected"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid container-main-box">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 "></div>
                        <div className="col-md-4 col-lg-4  mx-auto">
                            <p className=" main-heading-page  mx-auto">My Applications</p></div>
                        <div className="offset-lg-3 col-md-1 col-lg-1   ">
                            <button className="btn btnApply" >Apply More</button>
                        </div>
                    </div>
                </div>


                <div className="container container-inner-box">

                    <div className="row headings">
                        <div className="col-md-2 col-lg-2 ">
                            <p className="special-heading">Company <img src={arrow} height="30" /></p>

                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading">Profile <img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading">Review Application <img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading">Applied Date <img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading">No. of Applicants <img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-2 col-lg-2  ">
                            <p className="special-heading">Application Status <img src={arrow} height="30" /></p>
                        </div>

                    </div>
                    <hr className="main-hr" />
                    <div className="card border-0 ">
                        <br />
                        {this.state.application.map((item, key) =>

                            <div className="row" key={key} data-aos="fade-up" data-aos-duration="3000">
                                <div className="col-md-2 col-lg-2 ">
                                    <p className="special-sub-heading mx-auto"><img style={{ marginRight: "20px" }}
                                        src={docs}
                                        className="img rounded-circle" height="40" width="40" />
                                        {item.company}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.profile}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto"><img src={item.review} height="20" /></p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.Applydate}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{item.applicants}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto">{(item.status == "selected") ?
                                        <button className="btn btnstatus">Selected</button>
                                        : <button className="btn btnfail">Not Selected</button>}
                                    </p>
                                </div>
                                <hr />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}