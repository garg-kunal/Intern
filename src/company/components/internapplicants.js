import React from 'react';
import arrow from "../assets/titleArrow.png"
import '../css/companyDashBoard.css';
import { NavLink } from 'react-router-dom';
import axios from '../../setup';


export default class Applicants extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            data: []
        }
    }
    prev() {
        if (this.state.page > 0) {
            this.setState({
                page: this.state.page - 1
            })
        }


    }
    componentDidMount() {

        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if (this.props.location.id === undefined) {
            this.props.history.push('/company/dashboard');
        }
        else {
            axios.get('/api/accounts/company/internship/applicants/' + this.props.location.id.key, headers)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        data: res.data.data
                    })
                })
                .catch((err) => console.log(err))
        }
    }
    next() {
        this.setState({
            page: this.state.page + 1
        })

    }
approve(id){
    const headers = {
        headers: {
            'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const data={
        id:id
    }
  axios.post('/api/accounts/company/internship/approve_applicant',data,headers)
  .then((res)=>{
      if(res.data.status===200){
          alert(res.data.status_message.message);
      }
      else  alert(res.data.status_message.message);
  })
  .catch((err)=>console.log(err))
}
reject(id){
    const headers = {
        headers: {
            'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const data={
        id:id
    }
  axios.post('/api/accounts/company/internship/reject_applicant',data,headers)
  .then((res)=>{
      if(res.data.status===200){
          alert(res.data.status_message.message);
      }
      else  alert(res.data.status_message.message);
  })
  .catch((err)=>console.log(err))
}
    render() {
        return (
            <div className="container-fluid" style={{marginTop:"100px"}}>
                <h3 className="text-center mt-4" style={{ color: "#4A00E0" }}>Intern Applicants</h3>
                <div className="container mt-5">
                    <div className="card">
                        <div className="row mt-3">
                            <div className="col-md-2 col-lg-2">
                                <p className="text-center">S.NO
                        <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} />
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <p className="text-center">Names
                        <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} />
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <p className="text-center">Visit Profile
                        <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} />
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2">
                                <p className="text-center">Approve
                        <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} />
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2">
                                <p className="text-center">Reject
                        <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} />
                                </p>
                            </div>
                        </div>

                        <hr />
                        {this.state.data.map((item, key) =>
                            <div className="row mt-1">
                                <div className="col-md-2 col-lg-2">
                                    <p className="text-center application-text">{key + 1}</p>
                                </div>
                                <div className="col-md-3 col-lg-3">
                                    <p className="text-center application-text">{item.name}</p>
                                </div>
                                <div className="col-md-3 col-lg-3">
                                    <p className="text-center application-text">
                                        <NavLink
                                         
                                            to={{
                                                pathname: "/resume",
                                                id: {
                                                    key: item.id
                                                }
                                            }}
                                            style={{ color: "blue" }}>View Profile</NavLink>
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2">
                                    <p className="text-center">
                                        <button onClick={()=>{this.approve(item.id)}}
                                        className="btn btn-success">Approve</button>
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2">
                                    <p className="text-center">
                                        <button 
                                        onClick={()=>{this.reject(item.id)}}
                                        className="btn btn-danger">
                                            Reject
                                        </button>
                                    </p>
                                </div>
                            </div>

                        )}

                    </div>
                    <div className="row mt-5">
                        <button onClick={() => { this.prev() }} className="btn  btn-prev-applications">Back</button>
                        &nbsp;&nbsp;&nbsp;<span style={{fontSize:"25px"}} >{this.state.page}</span>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => { this.next() }} className="btn btn-next-applications">Next</button>
                    </div>

                </div>
            </div>
        )
    }
}