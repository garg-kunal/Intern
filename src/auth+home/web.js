import React from 'react';
import ui from './assets/uiux.png';
import front from './assets/frontend.png';
import backend from './assets/backend.png';
import fullstack from './assets/fullstack.png';
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
               <h2 className="card-tech-heading" style={{color:"black"}}>Internship Available:</h2>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card card-tech-inner mx-auto" >
                            <div className="card-img-top  text-center rounded-circle" >
                                <img src={ui} className="img-responsive img-fluid" />
                            </div>

                        </div><br />
                        <h3 className="text-center web-tech-card-inner-size">UI/UX Design</h3>
                    </div>
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card card-tech-inner mx-auto ">
                            <div className="card-img-top rounded-circle">
                                <img src={front} className="img img-fluid" />
                            </div>
                        </div><br/>
                        <h3 className="text-center web-tech-card-inner-size">Front End Development</h3>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card card-tech-inner mx-auto">
                            <div className="card-img-top ">
                                <img src={backend} className="img img-fluid mx-auto" />
                            </div>
                           
                        </div><br/>
                        <h3 className="text-center web-tech-card-inner-size">Back End Development</h3>
                    </div>
                    <div className="col-md-6 col-lg-6 card-web-outer">
                        <div className="card card-tech-inner mx-auto">
                            <div className="card-img-top rounded-circle">
                                <img src={fullstack} className="img img-fluid" />
                            </div>
                            
                        </div><br/>
                        <h3 className="text-center web-tech-card-inner-size">Full Stack Development</h3>
                    </div>
                </div>


            </div>
        )
    }
}