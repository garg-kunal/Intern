import React from 'react';
import '../assets/css/Intern.css';
import $ from 'jquery';
import date from '../assets/images/calender.png';
import rupee from '../assets/images/rupee.png';
import start from '../assets/images/start.png';
import unlimited from '../assets/images/unlimited.png';
import path from '../assets/images/Path.png'
import house from '../assets/images/sydney-opera-house.png';
import {NavLink}  from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../quiz/navbar';
export default class Internship extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            page: 0,
            prev: true,
            next: true,
            interns: [
                {
                    based: "Web Devlopment",
                    company: "Samsung",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "26/8/2020",
                    Duration: "2 months",
                    stipend: "2500/month",
                    apply: "25/7/2020"
                },
                {
                    based: "UI/UX ",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                },
                {
                    based: "Design ",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                },
                {
                    based: "UI/UX Web ",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                },
                {
                    based: "Backend",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                },
                {
                    based: "UI/UX ",
                    company: "KG",
                    logo: "https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg",
                    workType: "Work from Home",
                    Join: "29/8/2020",
                    Duration: "1 months",
                    stipend: "2500/month",
                    apply: "20/7/2020"
                },
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
        $("document").ready(function ($) {
            
            $(window).on("resize", function (e) {
                checkScreenSize();
            });
            checkScreenSize();
            function checkScreenSize(){
                var newWindowWidth = $(window).width();
                var nav = $('#filters');
                var intern = $('#internsAll');
                var button = $('#buttonsAll');
                if (newWindowWidth > 1300) {
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 100) {
                            nav.addClass("f-nav");
                            intern.addClass("f-nav1");
                            button.addClass("f-nav1");
                        } else {
                            nav.removeClass("f-nav");
                            intern.removeClass("f-nav1");
                            button.removeClass("f-nav1");
                        }
                    });
                }
                else{
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 100) {
                            nav.removeClass("f-nav");
                            intern.removeClass("f-nav1");
                            button.removeClass("f-nav1");
                        } 
                    });
    
                }
                
            }

           
        });
    }

    inc() {
        var c = this.state.interns.length;
        if (this.state.page < 0) {
            this.setState({
                prev: false
            })
        }

        if (this.state.page * 6 > c) {
            this.setState({
                next: false
            })
        } else {
            this.setState({
                page: this.state.page + 1,
                prev: true
            })
        }

    }
    dec() {

        this.setState({
            page: this.state.page - 1
        })
        var c = this.state.interns.length;

        if (this.state.page * 5 > c) {
            this.setState({
                next: true
            })
        }
        if (this.state.page < 0) {
            this.setState({
                prev: false
            })
        }

    }


    render() {
        return (
            <div className="container-fluid  container-main-box-intern">
                {/* <Navbar/> */}
                <br /><br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <p className="text-center mx-auto Intern-main-heading">
                             Internships
                         </p>
                    </div>
                </div>
                <br /><br />
                <div className="container-fluid container-intern" >
                    <div className=" row">
                        <div className="col-md-3 col-lg-3 col-12 intern-filters" id="filters" >
                                <input class="form-control form-filter" type="search" placeholder="Web Developer" aria-label="Search" />
                            <div className=" mx-auto" style={{ margin: "30px" }}>

                                <section class="slider-checkbox" style={{ fontSize: "20px" }}>
                                    <input type="checkbox" value="home" onChange={(e) => {  }} id="1" />
                                    <label class="label" for="1">Work From Home&nbsp;</label>
                                </section>
                            </div>
                            <div className=" mx-auto"  >

                                <section class="slider-checkbox" style={{ fontSize: "20px" }}>
                                    <input type="checkbox" value="part" onChange={(e) => {  }} id="1" />
                                    <label class="label" for="1">Part Time&nbsp;</label>
                                </section>
                            </div>
                            <div className="mx-auto" style={{ margin: "30px" }}>
                                <section class="slider-checkbox" style={{ fontSize: "20px" }}>
                                    <input type="checkbox" value="full" onChange={(e) => {  }} id="1" />
                                    <label class="label" for="1">Full Time&nbsp;</label>
                                </section>
                            </div>

                            <button className="btn btn-intern-search">Apply Filters</button>

                        </div>
                        <div className="col-md-8 col-lg-8 col-12" style={{ minWidth: "21rem" }} id="internsAll" >
                            {this.state.interns.map((item, key) => {
                                if ((this.state.page * 6 <= key) && (this.state.page + 1) * 6 > key)
                                    return (<div className="card card-intern" key={key}>
                                        <div className="card-body" data-aos="zoom-in" data-aos-duration="3000">
                                            <div className="row flex-wrap">
                                                <div className="col-md-4 col-6">
                                                    <b className="intern-based">{item.based}</b><br />
                                                    <b className="intern-company">{item.company}</b>

                                                </div>
                                                <div className="col-md-4 col-6"></div>
                                                <div className="col-md-4">
                                                    <img src={item.logo}
                                                        align="right" style={{ float: "top-right" }} height="70" alt="company logo" className="img company-logo" />

                                                </div>
                                            </div>
                                            <br />
                                            <img src={house} className="img" height="30" alt="Home" />&nbsp;&nbsp;
                            <span className="intern-type">{item.workType}</span><br /><br />
                                            <div className="row no-gutters">
                                                <div className="col-md-3  col-lg-3 col-6">
                                                    <p className="intern-head ">Joining Date
                                    </p>
                                                    <img src={start} className="im" height="20" alt="Start" />&nbsp;&nbsp;{item.Join}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6">
                                                    <p className="intern-head">Duration
                                    </p>
                                                    <img src={date} className="img" height="20" alt="Duration" />&nbsp;&nbsp;{item.Duration}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6  mx-auto">
                                                    <p className="intern-head mx-auto">Stipend</p>
                                                    <img src={rupee} className="img" height="20" alt="Rupee" />&nbsp;&nbsp;{item.stipend}
                                                </div>
                                                <div className="col-md-3  col-lg-3 col-6 mx-auto">
                                                    <p className="intern-head">Apply By</p>
                                                    <img src={unlimited} className="img" height="20" alt="Apply Date" />&nbsp;&nbsp;{item.apply}
                                                </div>
                                            </div>
                                            <br /><br />
                                            <div className="row" style={{ float: "right" }}>
                                                <p className="intern-details"><NavLink to={{
                                                    pathname:"/apply_intern",
                                                    id:{
                                                        key:5
                                                    }
                                                }}>Job Details </NavLink> <img src={path} className="im" height="20" alt="path" /></p>
                                            </div>

                                        </div>
                                    </div>
                                    )


                            }

                            )}
                            <div className="container row mx-auto" id="buttonsAll">
                                {this.state.prev ? <button className="btn btn-lg intern-previous mx-auto" onClick={() => { this.dec() }}>Previous</button> : null}
                                {this.state.next ? <button className="btn  btn-lg intern-next mx-auto" onClick={() => { this.inc() }}>Next</button> : null}

                            </div>


                        </div>

                    </div>

                </div>
                <br />

            </div>
        )
    }
}