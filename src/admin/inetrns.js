import React from 'react';
import arrow from '../assets/images/baseline-arrow.png';
import docs from '../assets/images/docs.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Axios from '../setup';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
export default class Dashboardintern extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            application: []
        }
    }
    approve(key) {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const data = {
            id: key
        }
        Axios.post('/api/accounts/company/approve_internship', data,headers)
            .then((res) => {
                console.log(res.data)
                alert("Approved...");
                this.print();
            })
            .catch((err) => console.log(err));

    }
    reject(key) {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const data = {
            id: key
        }
        Axios.post('/api/accounts/company/reject_internship', data,headers)
            .then((res) => {
                console.log(res.data)
                alert("Rejected...");
                this.print();
            })
            .catch((err) => console.log(err));

    }
    print() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        Axios.get('/api/accounts/admin/view_internships', headers)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    application: res.data.data
                })
            })
            .catch((err) => console.log(err));
    }
    componentDidMount() {
        if(localStorage.getItem("admin_jwt")){
            this.print();
        }
        else 
        this.props.history.push("/login/admin");

    }

    render() {
        return (
            <div className="container-fluid container-main-box">
                <Navbar />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 "></div>
                        <div className="col-md-6 col-lg-6  mx-auto">
                            <p className=" main-heading-page text-center mx-auto">Intern Applications</p></div>
                        <div className="offset-lg-2 col-md-1 col-lg-1   ">
                            
                        </div>
                    </div>
                </div>
                <div className="container container-inner-box">
                    <div className="row headings">
                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">S.No   <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">Company
                            <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>

                        </div>
                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">Profile   <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>

                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">Edit Intern   <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">Approve   <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-2 col-lg-2 text-center  ">
                            <p className="special-heading">Reject   <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>

                    </div>
                    <hr className="main-hr" />
                    <div className="card border-0 ">
                        <br />
                        {this.state.application.map((item, key) =>

                            <div className="row" key={key} data-aos="fade-up" data-aos-duration="3000">
                                <div className="col-md-2 col-lg-2 text-center ">
                                    <p>{key}</p>
                                </div>
                                <div className="col-md-2 col-lg-2 ">
                                    <p className="special-sub-heading mx-auto text-center">
                                        {item.company}</p>
                                </div>
                                <div className="col-md-2 col-lg-2  ">
                                    <p className="special-sub-heading mx-auto text-center"><Link to={{
                                        pathname: "/view_intern",
                                        id: {
                                            key: item.id
                                        }
                                    }}>{item.profile}</Link></p>
                                </div>
                                <div className="col-md-2 col-lg-2 text-center ">
                                    <button className="btn btn-warning" onClick={() => { alert('Edit') }}>Edit</button>
                                </div>
                                <div className="col-md-2 col-lg-2 text-center ">
                                    <button className="btn btn-success" onClick={() => { this.approve(item.id) }}>Approve</button>
                                </div>
                                <div className="col-md-2 col-lg-2 text-center  ">
                                    <button className="btn btn-danger" onClick={() => { this.reject(item.id) }}>Reject</button>
                                </div>
                                <br /><br />
                            </div>
                        )}
                    </div>
                   
                </div>
                <div className="row no-gutters pt-5 mt-5"></div>
            </div>
        )
    }
}