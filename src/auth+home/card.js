import React from 'react';
import welcome from '../assets/images/star.png';
import '../assets/css/home.css';
import { Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wowjs'
import { Link } from 'react-router-dom';
export default class Main extends React.Component {
    constructor() {
        super();
        AOS.init();
    }

    componentDidMount() {

        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="card card-body-main mx-auto">
                <div className="card-body" data-aos="fade-up" data-aos-duration="500">
                    <div class="row mx-auto">
                        <div className="col-12 laptop-img-mobile ">
                            <img src={welcome} alt=""
                                className="justify-content-center img-fluid laptop-guy"
                            />

                        </div>
                        <div className="col-md-7 col-lg-7 col-12" >

                            <p className="welcome-heading">
                                An AI-Based platform for Tech Internships </p>
                            <p className="welcome-heading-2">
                                <Link to="/create_account/student">
                                    <button className="btn btn-intern">
                                        Apply Here
                                </button>
                                </Link>


                            </p>
                            <div className="row mx-auto">
                                <button
                                    className="btn btn-intern-mobile mx-auto text-center">
                                    <Link to="/create_account/student" style={{ color: "white", textDecoration: "none" }}>
                                        Apply Here
                                    </Link>
                                </button>
                            </div>
                            <br />
                            <p className=" card-intern-text" style={{ color: "black" }}>
                                Making the Internship process easier for students with
                                the skill-based assessment platform.
                        </p>

                        </div>
                        <div className="col-md-5 col-lg-5 laptop-img">
                            <img src={welcome} alt=""
                                className="img img-fluid laptop-guy wow bounce"
                                data-wow-iteration="100" data-wow-duration="4s" />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}