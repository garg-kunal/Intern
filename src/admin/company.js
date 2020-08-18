import React from 'react';
import arrow from '../student Intern/assets/images/baseline-arrow.png';
import docs from '../student Intern/assets/images/docs.png';
import AOS from 'aos';
import Axios from '../setup';
import 'aos/dist/aos.css';
import Navbar from './navbar';
export default class Dashboard extends React.Component {
    constructor() {
        super();
        AOS.init();
        this.state = {
            application:[]
        }
    }
    approve(){
        const data={
            mobile_number:"7599245269"
        }
        Axios.post('/api/accounts/company/approve',data)
    .then((res)=>{
        alert("Approved...");
        this.print();
    })
    .catch((err)=>console.log(err));
        
    }
    reject(){
        const data={
            mobile_number:"7599245269"
        }
        Axios.post('/api/accounts/company/reject',data)
    .then((res)=>{
        alert("Rejected...");
        this.print();
    })
    .catch((err)=>console.log(err));
        
    }
    print(){
        Axios.get('/api/accounts/admin/view_companies')
    .then((res)=>this.setState({
        application:res.data.data
    }))
    .catch((err)=>console.log(err));
    }
componentDidMount(){
    this.print();
    
}
    render() {
        return (
            <div className="container-fluid container-main-box">
                <Navbar/>
                <br/><br/>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 "></div>
                        <div className="col-md-4 col-lg-6  mx-auto">
                            <p className=" main-heading-page  mx-auto">Company Applications</p></div>
                        <div className="offset-lg-2 col-md-1 col-lg-1   ">
                            {/* <button className="btn btnApply" >Apply More</button> */}
                        </div>
                    </div>
                </div>


                <div className="container container-inner-box">

                    <div className="row headings">
                        <div className="col-md-3 col-lg-3 text-center ">
                            <p className="special-heading">Company<img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-3 col-lg-3 text-center ">
                            <p className="special-heading">Email Id<img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-3 col-lg-3 text-center ">
                            <p className="special-heading">Approve <img src={arrow} height="30" /></p>
                        </div>
                        <div className="col-md-3 col-lg-3 text-center  ">
                            <p className="special-heading">Reject <img src={arrow} height="30" /></p>
                        </div>

                    </div>
                    <hr className="main-hr" />
                    <div className="card card-company border-0 ">
                        <br />
                        {this.state.application.map((item, key) =>

                            <div className="row" key={key} data-aos="fade-up" data-aos-duration="3000">
                                <div className="col-md-3 col-lg-3 ">
                                    <p className="special-sub-heading mx-auto text-center">

                                        {item.name}</p>
                                </div>
                                <div className="col-md-3 col-lg-3  ">
                                    <p className="special-sub-heading mx-auto text-center">{item.email}</p>
                                </div>

                                <div className="col-md-3 col-lg-3 text-center ">
                                    <button className="btn btn-success" onClick={() => { this.approve() }}>Approve</button>
                                </div>
                                <div className="col-md-3 col-lg-3 text-center  ">
                                    <button className="btn btn-danger" onClick={() => { this.reject() }}>Reject</button>
                                </div>
                                <br/><br/>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}