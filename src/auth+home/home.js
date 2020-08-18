import React from 'react';
import './assets/css/home.css';
import img1 from './assets/space.png';
import img2 from './assets/astro.png';
import img3 from './assets/bg-12.png';
import Card2 from './web';
import Footer from './footer';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
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
                <div className="welcome">
                    <Navbar />
                    <Main />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br/><br/>
                <div className="container-fluid hit-back" style={{ padding: "0" }}>
                    <Card2 /><br />
                </div>
                <div className="container-fluid  card-tech-body-main">
                    <img src={img3} alt="dot" align="right" className="img-fluid img-dot" />
                    <br /><br /><br/>
                    <div className="container-fluid  card-body-intern-main">
                        <div className="row">
                            <div
                            data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000"
                             className="col-md-7 col-lg-7 col-12" >
                                <h2 style={{ color: "white" }} className="card-tech-main-intern-heading">How it works</h2>
                                <br /><br />
                                <img src={one} alt="one" className=" img-fluid img-name" /><br /><br />
                                <h3 style={{ color: "white" }} className="intern-content-heading">Apply For Internship:</h3>
                                <p style={{ color: "white" }} className="intern-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                <br /><br />
                                <img src={two} alt="two" className="img-fluid img-name" /><br /><br />
                                <h3 style={{ color: "white" }} className="intern-content-heading">Apply For Internship:</h3>
                                <p style={{ color: "white" }} className="intern-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


                                <br /><br />
                                <img src={three} alt="three" className=" img-fluid img-name" /><br /><br />
                                <h3 style={{ color: "white" }} className="intern-content-heading">Apply For Internship:</h3>
                                <p style={{ color: "white" }} className="intern-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            </div>
                            <div className="col-md-5 col-lg-5">
                                <br />
                                <img src={img2} alt="astro"
                                data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000"
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
                            <h2 style={{color:"black"}}>Why Merge Intern?</h2>
                            <p className="get-info-p">Merge has been the result of a confluence between
                            three brilliant young minds. An Angel Investor, A
                            Final Year Engineering Student and A Start-Up
                            Enthusiast have come together to make the process
                            of connecting interns and companies easier. Our
                            Community is growing stronger by the day, with a
                            lot of ambitious students and start-ups subscribing
                            to us, thereby investing their time and trust in us!</p>
                        </div>
                        <div className="offset-md-1 col-md-5 col-lg-5 get-img-contain">
                            <img src={img1} alt=""
                            data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000"
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