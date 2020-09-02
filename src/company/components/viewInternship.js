import React from "react"
import "../css/viewInternship.css"
import arrow from "../assets/arrow.png"
import companyLogo from "../assets/samsung.png"
import home from "../assets/home.png"
import start from "../assets/start-button.png"
import calendar from "../assets/calendar.png"
import rupee from "../assets/rupee.png"
import applyBy from "../assets/unlimited.png"
import Axios from '../../setup';

class InternshipDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: "",
            website:"",
            otherProfile: "",
            internshipPlace: "",
            internshipTime: "",
            city: "",
            questions: [],
            startDate: "",
            exactDate: "",
            skills: [false, false, false],
            otherSkills: [],
            benefits: [],
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
                'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        // alert(this.props.val)
        Axios.get('/api/accounts/company/view_internship/' + this.props.val, headers)
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    website:res.data.data.website,
                    profile: res.data.data.profile,
                    internshipPlace: res.data.data.place,
                    internshipTime: res.data.data.time,
                    city: res.data.data.location,
                    questions: res.data.data.questions,
                    startDate: res.data.data.joiningdate,
                    exactDate: res.data.data.exactdate,
                    otherSkills: res.data.data.skills,
                    benefits: res.data.data.benefits,
                    stipend: res.data.data.stipend_type,
                    amount: res.data.data.stipend_amount,
                    responsibility: res.data.data.description,
                    days: res.data.data.duration,
                    openings: res.data.data.openings
                })

            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
              <div className="container-fluid details">
                <div className="row">
                    <span className="work col-8">{this.state.profile}
                    </span>
                    <div className="col-4 pt-3">
                        <img src={companyLogo}
                         className="complogo" alt="" />
                    </div>
                    <span className="company col-8">
                        <img src={home} className="workImg img-fluid"
                            alt="" />&nbsp;{this.state.internshipPlace}
                    </span>
                </div>
                <br/>
                <div className="row no-gutters">
                    <div className="col-6 col-md-3  col-lg-3 mx-auto">
                        <span className="infoQ">
                            <img src={start} 
                                className="img-fluid  details-icons" alt="" />&nbsp;
                            Joining Date</span><br />
                        <p className="workType work2">{this.state.startDate}</p>
                    </div>
                    <div className="col-6 col-md-3  col-lg-3 mx-auto">
                        <span className="infoQ">
                            <img src={calendar} className="img-fluid  details-icons"
                              
                                alt="" />&nbsp;
                            Duration</span><br />

                        <p className="workType work2">{this.state.days}</p>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3 mx-auto">
                        <span className="infoQ">
                            <img src={rupee} className="img-fluid details-icons paisa"
                               alt="" />
                                &nbsp;
                            Stipend</span><br />

                        <p className="workType work2">{this.state.stipend} &nbsp;&nbsp;{this.state.amount}</p>
                    </div>
                    <div className="col-6 col-md-3  col-lg-3 mx-auto">
                        <span className="infoQ">
                            <img src={applyBy}
                               
                                className="img-fluid  details-icons paisa" alt="" />&nbsp;
                            Apply By</span><br />
                        <p className="workType work2">{this.state.exactDate.length===0?"With In 10Days":this.state.exactDate}</p>
                    </div>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-8">About Company</p>
                    <a href={this.state.website} target="_blank" className="url col-10">{this.state.website}</a>
                </div>
                <br/>
                <div className="row aboutCompany">
                    <p className="about col-11">About the {this.state.internshipPlace} internship</p>
                    <p className="lead description lead-descp-1">Selected interns day to day responsibilities include :</p>
                    <p className="lead description">
                        {this.state.responsibility}
                    </p>
                </div>
                <div className="row aboutCompany">
                    <p className="about-skills about col-10">Skills Required</p>

                    <div className="container-fluid skillsReq d-flex flex-row flex-wrap">
                        {this.state.otherSkills.map((item, key) =>
                            <p className="col-4  col-md-2" >{item}</p>
                        )}
                    </div>
                </div>
                <br/>
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
                    <p className="about about-benefit col-10">Benefits</p>
                    <div className="container-fluid skillsReq d-flex flex-row flex-wrap">
                        {this.state.benefits.map((item, key) =>
                            <p className="col-6  col-md-4" >{item}</p>
                        )}
                    </div>
                </div>
                <br/><br/>
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
            this.props.history.push('/company/dashboard');
    }
    render() {
        return (
            <div className="container-fluid viewInternship pb-5" style={{ marginTop: "60px" }}>
                <br /><br />
                <p className="heading">Internship Details</p>
                {this.props.location.id === undefined ? (this.props.history.push('/company/dashboard')) :
                    <InternshipDetails val={this.props.location.id.key} />
                }

                {/* 
                <div className="col-12 text-center statusBtn">
                    <button className="btn btn-primary" style={{ width: "400px" }} type="button">Open for Applications</button>
                </div> */}
            </div>
        )
    }
}

export default (ViewInternship);
