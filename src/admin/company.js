import React from 'react';
import arrow from '../assets/images/baseline-arrow.png';
import docs from '../assets/images/docs.png';
import AOS from 'aos';
import Axios from '../setup';
import 'aos/dist/aos.css';
import Navbar from './navbar';
export default class Dashboard extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            application: []
        }
    }
    approve(email) {
        const data = {
            email: email
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        Axios.post('/api/accounts/company/approve',data,headers)
            .then((res) => {
                alert("Approved...");
                this.print();
            })
            .catch((err) => console.log(err));

    }
    reject(email) {
        const data = {
            email: email
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        Axios.post('/api/accounts/company/reject',data,headers)
            .then((res) => {
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
        Axios.get('/api/accounts/admin/view_companies', headers)
            .then((res) => {
                if (res.data.status === 200) {
                    this.setState({
                        application: res.data.data
                    })
                }
            })
            .catch((err) => console.log(err));
    }
    componentDidMount() {
        if (localStorage.getItem("admin_jwt") === null || localStorage.getItem("admin_jwt") === undefined) {
            this.props.history.push("/login/admin");
        }
        else {
            this.print();
        }

    }
    render() {
        return (
            <div className="container-fluid container-main-box" style={{ padding: "0" }}>
                <Navbar />
                <br /><br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 "></div>
                        <div className="col-md-4 col-lg-6  mx-auto">
                            <p className=" main-heading-page text-center mx-auto">Company Applications</p></div>
                        <div className="offset-lg-2 col-md-1 col-lg-1   ">
                        </div>
                    </div>
                </div>


                <div className="container container-inner-box">

                    <div className="row headings">
                        <div className="col-md-2 col-lg-2 text-center ">
                            <p className="special-heading">Company
                                <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-4 col-lg-4 text-center ">
                            <p className="special-heading">Email Id<img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-3 col-lg-3 text-center ">
                            <p className="special-heading">Approve <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>
                        <div className="col-md-3 col-lg-3 text-center  ">
                            <p className="special-heading">Reject <img src={arrow} style={{ height: "30px", width: "30px" }} /></p>
                        </div>

                    </div>
                    <hr className="main-hr" />
                    <div className="card card-company border-0 ">
                        <br />
                        {this.state.application.map((item, key) =>

                            <div className="row" key={key} data-aos="fade-up" data-aos-duration="3000">
                                <div className="col-md-2 col-lg-2 ">
                                    <p className="special-sub-heading mx-auto text-center">

                                        {item.name}</p>
                                </div>
                                <div className="col-md-4 col-lg-4  ">
                                    <p className="special-sub-heading mx-auto text-center">{item.email}</p>
                                </div>

                                <div className="col-md-3 col-lg-3 text-center ">
                                    <button className="btn btn-success" onClick={() => { this.approve(item.email) }}>Approve</button>
                                </div>
                                <div className="col-md-3 col-lg-3 text-center  ">
                                    <button className="btn btn-danger" onClick={() => { this.reject(item.email) }}>Reject</button>
                                </div>
                                <br /><br />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}