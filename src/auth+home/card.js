import React from 'react';
import welcome from './assets/star.png';
import './assets/css/home.css';
import img3 from './assets/bg-12.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wowjs'

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
                    <div class="row">
                        <div className="col-12 laptop-img-mobile ">
                            <img src={welcome} alt=""
                                className="justify-content-center img-fluid laptop-guy"
                            />

                        </div>
                        <div className="col-md-7 col-lg-7" >
                            <p className="welcome-heading display-4">
                                Work with experts who can </p>
                            <p className="welcome-heading-2 display-4"> deliver world-class service<br /><br />
                                <button className="btn btn-intern">Get Internships</button>
                                <br />
                            </p>

                            <p className=" card-intern-text" style={{ color: "black" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s;
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