import React from 'react';
import '../css/Intern.css';
import $ from 'jquery';
import date from '../images/calender.png';
import rupee from '../images/rupee.png';
import start from '../images/start.png';
import unlimited from '../images/unlimited.png';
import path from '../images/Path.png'
import house from '../images/sydney-opera-house.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
            var nav = $('#filters');
            var intern = $('#internsAll');
            var button=$('#buttonsAll');

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
                <br /><br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <p className="text-center mx-auto Intern-main-heading">
                            Work From Home Internships
                         </p>
                    </div>
                </div>
                <br /><br />
                <div className="container">
                    <div className=" row">
                        <div className="col-md-3 col-lg-3 col-sm-3 " id="filters" >
                            <form class="form-inline">
                                <input class="form-control " type="search" placeholder="Location" aria-label="Search" />
                                <button class="btn" type="submit">Search</button>
                            </form>
                            <br />
                            <div className=" mx-auto">
                                Work From Home&nbsp;
                            <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div><br />
                            <div className=" mx-auto">
                                Part Time&nbsp;
                            <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div><br />
                            <div className=" mx-auto">
                                Full Time&nbsp;
                            <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>


                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-9 content-Div" id="internsAll" >
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
                                            <div className="row row-cols flex-wrap ">
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
                                                <p className="intern-details"> Job Details <img src={path} className="im" height="20" alt="path" /></p>
                                            </div>

                                        </div>
                                    </div>
                                    )


                            }

                            )}


                        </div>

                    </div>
                  
                </div>
               
               <br/><br/> <div className="container row mx-auto" id="buttonsAll">
                        {this.state.prev ? <button className="btn btn-lg intern-previous mx-auto" onClick={() => { this.dec() }}>Previous</button> : null}
                    &nbsp;&nbsp;&nbsp;
                    {this.state.next ? <button className="btn  btn-lg intern-next mx-auto" onClick={() => { this.inc() }}>Next</button> : null}

                    </div>


                <br /><br /><br />

            </div>
        )
    }
}