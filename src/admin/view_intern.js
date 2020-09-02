import React from "react"
import arrow from "../company/assets/arrow.png";
import companyLogo from "../company/assets/samsung.png"
import home from "../company/assets/home.png"
import start from "../company/assets/start-button.png"
import calendar from "../company/assets/calendar.png"
import rupee from "../company/assets/rupee.png"
import applyBy from "../company/assets/unlimited.png";
import Axios from '../setup'

class InternshipDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: "",
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
            website: "",
            openings: ""
        }
    }
    componentDidMount() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("admin_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        // alert(this.props.val)
        Axios.get('/api/accounts/admin/view_internship/' + this.props.val, headers)
            .then((res) => {
                console.log(res.data.data)
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
                    stipend: res.data.data.stipend_type,
                    amount: res.data.data.stipend_amount,
                    responsibility: res.data.data.description,
                    days: res.data.data.duration,
                    openings: res.data.data.openings,
                    website: res.data.data.website
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
                <br />
                <br />
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
                        <p className="workType work2">{this.state.exactDate.length === 0 ? "With In 10 Days" : this.state.exactDate}</p>
                    </div>
                </div>
                <div className="row aboutCompany">
                    <p className="about col-8">About Company</p>
                    <a href={this.state.website} target="_blank" className="url col-10">{this.state.website}</a>
                </div>
                <br />
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

                <br />
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
                    <div className=" container skillsReq d-flex flex-row flex-wrap">
                        {this.state.benefits.map((item, key) =>
                            <p className="col-sm-6 col-md-5 col-12" >{item}</p>
                        )}
                    </div>
                </div>
                <br /><br />
            </div>)
    }
}

class ViewInternship extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        console.log(this.props.location.id)
        if (this.props.location.id === undefined)
            this.props.history.push('/admin/internship');
    }
    render() {
        return (
            <div className="container-fluid viewInternship pb-5" style={{ marginTop: "-30px" }}>
                <br /><br />
                <p className="heading">Internship Details</p>
                {this.props.location.id === undefined ? (this.props.history.push('/company/dashboard')) :
                    <InternshipDetails val={this.props.location.id.key} />
                }


            </div>
        )
    }
}

export default (ViewInternship);
