import React from 'react';
import ui from '../assets/images/uiux.png';
import front from '../assets/images/frontend.png';
import backend from '../assets/images/backend.png';
import fullstack from '../assets/images/fullstack.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Card2 extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            data: [
                {
                    heading: "UI/UX Design",
                    img: ui
                },
                {
                    heading: "Front End Development",
                    img: front
                },
                {
                    heading: "Back End Development",
                    img: backend
                },
                {
                    heading: "Full Stack Development",
                    img: fullstack
                },
            ]
        }
    }
    render() {
        return (
            <div className="card-intern-main mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500"  >
                <h2 className="card-tech-heading" style={{ color: "black" }}> Available Internships</h2>
                <div className="row no-gutters">
                    {/* one start */}

                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card border-0 card-tech-inner mx-auto">
                            <div className="card-img-top ">
                                <img src={fullstack} className="img-fluid" />
                            </div>
                            <br />
                            <h3 className="text-center web-tech-card-inner-size">Full Stack Development</h3>
                        </div>
                    </div>

                    {/* one end */}
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card border-0 card-tech-inner mx-auto ">
                            <div className="card-img-top">
                                <img src={front} className="img-fluid" />
                            </div>
                            <br />
                            <h3 className="text-center web-tech-card-inner-size">Front End Development</h3>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card border-0 card-tech-inner mx-auto">
                            <div className="card-img-top ">
                                <img src={backend} className=" img-fluid " />
                            </div>
                            <br />
                            <h3 className="text-center web-tech-card-inner-size">Back End Development</h3>
                        </div>
                    </div>

                    {/* fourth */}
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card border-0 card-tech-inner mx-auto" >
                            <div className="card-img-top  text-center" >
                                <img src={ui} className="img-fluid" />
                            </div>
                            <br />
                            <h3 className="text-center web-tech-card-inner-size">UI/UX Design</h3>
                        </div>
                    </div>



                    {/* fourth end */}
                </div>

            </div>
        )
    }
}