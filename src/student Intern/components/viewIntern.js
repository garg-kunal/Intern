import React from "react";
import '../../company/css/viewInternship.css';
// import arrow from "../assets/arrow.png"
// import companyLogo from "../assets/samsung.png"
import home from '../assets/images/sydney-opera-house.png';
import start from '../assets/images/start.png';
import calendar from '../assets/images/calender.png';
import rupee from '../assets/images/rupee.png';
import applyBy from '../assets/images/unlimited.png';
import Axios from '../../setup';

class InternshipDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: "",
            otherProfile: "",
            internshipPlace: "",
            internshipTime: "",
            city: "",
            companyname:"",
            questions: [],
            startDate: "",
            exactDate: "",
            skills: [false, false, false],
            otherSkills: "",
            benefits: [],
            companyAbout:"",
            stipend: "",
            currency: "",
            amount: "",
            payDuration: "",
            responsibility: "",
            days: "",
            month: "",
            openings: ""
        }
    }
    componentDidMount() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        Axios.get('/api/accounts/student/internship_details/' + this.props.val,headers)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    profile: res.data.data.profile,
                    internshipPlace: res.data.data.place,
                    internshipTime: res.data.data.time,
                    city: res.data.data.location,
                    questions: res.data.data.questions,
                    startDate: res.data.data.joiningdate,
                    exactDate: res.data.data.exactdate,
                    otherSkills: res.data.data.skills,
                    benefits: res.data.data.benefits,
                    companyname:res.data.data.company,
                    stipend: res.data.data.stipend_type,
                    amount: res.data.data.stipend_amount,
                    responsibility: res.data.data.description,
                    days: res.data.data.duration,
                    openings: res.data.data.openings,
                    companyAbout:res.data.data.about
                })

            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div className="container-fluid details">
                <div className="row">
                    <span className="work col-8">{this.state.profile}</span>
                    <div className="col-4">
                        <img src="https://marketbusinessnews.com/wp-content/uploads/2014/03/samsung-logo.jpg"
                        style={{height:"60px",width:"120px"}}
                         className="complogo" alt="" />
                    </div>
                    <span className="company col-8">{this.state.companyname}</span>
                    <div className="workFrom col-12">
                        <img src={home} className="workImg img-fluid"
                        style={{ height: "30px", width: "30px" }} 
                         alt="" />
                        <p className="workType">{this.state.internshipPlace}</p>
                    </div>
                </div>
                <div className="infoA row">
                    <div className="col-6 col-md-3">
                        <span className="infoQ">Joining Date</span><br />
                        <img src={start} style={{ height: "30px", width: "30px" }}
                            className="img-fluid" alt="" />
                        <p className="workType work2">{this.state.startDate}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <span className="infoQ">Duration</span><br />
                        <img src={calendar} className="img-fluid" 
                        style={{ height: "30px", width: "30px" }}
                        alt="" />
                        <p className="workType work2">{this.state.days}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <span className="infoQ">Stipend</span><br />
                        <img src={rupee} className="img-fluid "
                        
                        style={{ height: "30px", width: "30px" }} alt="" />
                        <p className="workType work2">{this.state.stipend} &nbsp;&nbsp;{this.state.amount}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <span className="infoQ">Apply By</span><br />
                        <img src={applyBy}
                        style={{ height: "30px", width: "30px" }}
                         className="img-fluid" alt="" />
                        <p className="workType work2">{this.state.exactDate}</p>
                    </div>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-8">About Company</p>
                    {/* <a href="#" className="url col-10">http://samsung.com</a> */}
                    <p className="lead description">
                       {this.state.companyAbout}
                    </p>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-11">About the  {this.state.internshipPlace} internship</p>
                    <p className="lead description">Selected interns day to day responsibilities include :</p>
                    <p className="lead description">
                        {this.state.responsibility}
                    </p>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-10">Skills Required</p>

                    <div className="row container skillsReq">
                        {this.state.otherSkills}
                    </div>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-11">Who can apply for this Internship :</p>
                    <p className="lead description">Only those can apply who :<br />

                        1. Only those can apply who applied before {this.state.exactDate} ..

                    <br />

                        2. Required Mention Skills..

                    <br />

                        3. Are Ready to take up the mention responsibilities..
                   </p>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-10">Benefits</p>
                    <div className=" container skillsReq d-flex flex-row flex-wrap">
                        {this.state.benefits.map((item, key) =>
                            <p className="col-sm-6 col-12" >{item}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

class ViewInternship extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        console.log(this.props.location.id)
        if (this.props.location.id === undefined)
            this.props.history.push('/student/internships');
    }
    render() {
        return (
            <div className="container-fluid postInternship">
                <h2 className="heading">Internship Details</h2>
                {this.props.location.id === undefined ? (this.props.history.push('/student/internships')) :
                    <InternshipDetails val={this.props.location.id.key} />
                }


                <div className="col-12 text-center statusBtn">
                    <button className="btn btn-primary" 
                    onClick={()=>{this.props.history.push('/student/intern_questions/'+this.props.location.id.key)}}
                    style={{ width: "400px" }} type="button">Open for Applications</button>
                </div>
            </div>
        )
    }
}

export default (ViewInternship);
