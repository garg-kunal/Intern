import React from 'react';
import '../assets/css/home.css';
import img1 from '../assets/images/space.png';
import img2 from '../assets/images/astro.png';
import img3 from '../assets/images/bg-12.png';
import Card2 from './web';
import Footer from './footer';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import Main from './card';
import Navbar from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Home extends React.Component {
    constructor() {
        super();
        AOS.init();

    }

    render() {
        return (
            <div className="container-fluid main-welcome">
                <div className="welcome bg-light">
                    <Navbar />
                    <Main />
                </div>
                <br /><br />
                <div className="container-fluid hit-back" style={{ padding: "0" }}>
                    <Card2 /><br />
                </div>
                <div className="container-fluid  card-tech-body-main">
                    <img src={img3} alt="dot" align="right" className="img-fluid img-dot" />
                    <br />
                    <div className="container-fluid  card-body-intern-main">
                        <div className="row">
                            <div
                                data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000"
                                className="col-md-7 col-lg-7 col-12 " >
                                <h2 style={{ color: "white" }} className="card-tech-main-intern-heading">How it works</h2>
                                <br /><br />
                                <img src={one} alt="one" className=" img-fluid img-name" /><br /><br />
                               
                                <h3 style={{ color: "white" }} className="intern-content-heading intern-content-heading-0">Fill Your Internship Preferences</h3>
                                <p style={{ color: "white" }} className="intern-content">
                                    Select your location, Area of Interest & Skill-set.
                                </p>

                                <br /><br />
                                <img src={two} alt="two" className="img-fluid img-name" /><br /><br />
                                <h3 style={{ color: "white" }} className="intern-content-heading intern-content-heading-1">Apply for Skill-Assessment</h3>
                                <p style={{ color: "white" }} className="intern-content">
                                    Appear for an online test to assess your Skill-set.
                                </p>


                                <br /><br />
                                <img src={three} alt="three" className=" img-fluid img-name" /><br /><br />
                                <h3 style={{ color: "white" }} className="intern-content-heading intern-content-heading-2">Apply For Internship</h3>
                                <p style={{ color: "white" }} className="intern-content ">
                                    Voila! Apply with your favourite Company.
                                    </p>

                            </div>
                            <div className="col-md-5 col-lg-5">
                                <br />
                                <img src={img2} alt="astro"
                                    data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"
                                    className="img-fluid astro-img" />
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>

                <br />
                <div className="container-fluid home-container-1 mx-auto">
                    <div className="row ">
                        <img src={img1} alt="" className="img img-fluid get-img-false mx-auto" />
                        <div
                            data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000"
                            className="col-md-6  col-lg-6 get-info" >
                            <h2 style={{ color: "black" }}>Why Merge Intern?</h2>
                            <p className="get-info-p">
                                We have built this platform with a lot of research on
                                why students are not getting into right internships
                                despite having a number of platforms! Why companies delay
                                in the hiring process of Interns! So, to make the process
                                smoother & hassle-free we provide you with a platform to
                                measure your skills and apply to enable the hiring process
                                much faster.
                            </p>
                        </div>
                        <div className="offset-md-1 col-md-5 col-lg-5 get-img-contain">
                            <img src={img1} alt=""
                                data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"
                                className="img img-fluid get-img"
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="contact" style={{ padding: "0", marginTop: "80px" }}>
                    <Footer />
                </div>
            </div >


        )
    }
}