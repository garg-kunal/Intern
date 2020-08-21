import React from "react"
import "../css/postInternship.css"
import arrow from "../assets/arrow.png";
import axios from '../../setup'
import InternshipType from "./postInternship/internshipType"
import Openings from "./postInternship/openings"
import Questions from "./postInternship/questions"
import Responsibility from "./postInternship/responsibility"
import StartDate from "./postInternship/startDate"
import Stipend from "./postInternship/stipend";
import { Redirect } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
class PostInternship extends React.Component {
    constructor() {
        super();
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
            otherSkills: "",
            benefits: [],
            stipend: "",
            currency: "",
            amount: "",
            messages: ['Loading..'],
            payDuration: "",
            responsibility: "",
            days: "",
            month: "",
            openings: "",
            show: false
        }
        this.parentCollector = this.parentCollector.bind(this)
        this.showAll = this.showAll.bind(this);
        this.benefit = this.benefit.bind(this)
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };
    showAll() {
        if (this.state.profile.length === 0 ||
            this.state.internshipPlace.length === 0 ||
            this.state.internshipTime.length === 0 ||
            this.state.city.length === 0 ||
            this.state.days.length === 0 ||
            this.state.openings.length === 0 ||
            this.state.startDate.length === 0 ||
            this.state.stipend.length === 0 ||
            this.state.responsibility.length === 0 ||
            this.state.otherSkills.length === 0){
                this.state.messages.push('Fields Required..');
                this.setState({
                    show:true
                })

            }
            else{
                this.setState({
                    messages:[]
                })

            const data = {
                profile: this.state.profile,
                place: this.state.internshipPlace,
                time: this.state.internshipTime,
                location: this.state.city,
                duration: this.state.days,
                openings: this.state.openings,
                joiningdate: this.state.startDate,
                exactdate: this.state.exactDate,
                stipend_type: this.state.stipend,
                stipend_amount: this.state.amount,
                stipend_currency: this.state.currency,
                stipend_payduration: this.state.payDuration,
                benefits: this.state.benefits,
                questions: this.state.questions,
                description: this.state.responsibility,
                skills: this.state.otherSkills,
                id: this.props.location.id.key
            }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        axios.post('/api/accounts/company/add_internship', data, headers)
            .then((res) => {
                this.setState({
                    messages: []
                });
                console.log(res.data);

                if (res.data.status === 200) {
                    this.state.messages.push("Internship Added");
                    this.props.history.push("/company/intern/save_intern");
                }
                else {
                    this.state.messages.push(res.data.status_message.message);
                    this.setState({
                        show: true
                    })
                }

            })
            .catch((err) => {
                this.state.messages.push("Try Again After Sometime..");
                this.setState({
                    show: true
                })

            });
        }

    }
    componentDidMount() {
        if (this.props.location.id === undefined) {
            alert("Try After Some Time");
            this.props.history.push("/company/dashboard");
        }
        else {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get('/api/accounts/company/view_internship/' + this.props.location.id.key, headers)
                .then((res) => {
                    console.log(res.data.data)
                    this.setState({
                        profile: res.data.data.profile,
                        city: res.data.data.location,
                        otherSkills: res.data.data.skills,
                        openings: res.data.data.openings,
                        days: res.data.data.duration,
                        responsibility: res.data.data.description

                    }, () => {
                        console.log(this.state.openings);
                        console.log(this.state.responsibility)
                    })
                })
                .catch((err) => console.log(err))
        }
    }


    benefit(e) {
        e.persist();
        if (e.target.checked)
            this.state.benefits.push(e.target.value);
        else {
            const index = this.state.benefits.indexOf(e.target.value);
            if (index > -1) {
                this.state.benefits.splice(index, 1);
            }
        }
    }
    parentCollector(field, data) {
        this.setState((prevState) => ({
            [field]: data
        }))
    }

    render() {
        return (
            <div className="container-fluid postInternship">
                <p className="heading">Post Internships</p>
                <p className="head head2">Internship Details :</p>
                <p className="head head3">Profile :</p>
                <input type="text" value={this.state.profile}
                    style={{ padding: "10px" }}
                    className="form-control" onChange={(e) => { this.setState({ profile: e.target.value }) }}
                    required placeholder="e.g. Web Developer" />
                <p className="head head3">Internship type :</p>
                <InternshipType methodFromParent={this.parentCollector} />
                <p className="head head3">City / Cities :</p>
                <input type="text" value={this.state.city} className="city form-control" placeholder="e.g. Bangalore"
                    onChange={(e) => { this.setState({ city: e.target.value }) }} />
                <p className="head head3">Number Of Openings :</p>
                <input type="number" name="openings" value={this.state.openings} className="city form-control" placeholder="e.g. 20"
                    onChange={(e) => { this.setState({ openings: e.target.value }) }} />
                <p className="head head3">Internship Start Date :</p>
                <StartDate methodFromParent={this.parentCollector} />
                <p className="head head3">Internship Duration :</p>
                <input type="text"
                    value={this.state.days} required
                    style={{ padding: "7px" }} className="form-control col-lg-12 col-md-12" placeholder="e.g. 1 month || 2 Weeks " onChange={(e) => { this.setState({ days: e.target.value }) }} />

                {/* <Duration methodFromParent={this.parentCollector} /> */}
                <p className="head head3">Intern's Responsibilities :</p>
                <textarea className="form-control" value={this.state.responsibility}
                    cols="10" rows="1" onChange={(e) => { this.setState({ responsibility: e.target.value }) }} placeholder="Enter Text..." />

                {/* <Responsibility methodFromParent={this.parentCollector} /> */}
                <p className="head head3">Stipend :</p>
                <Stipend methodFromParent={this.parentCollector} />
                <p className="head head3">Benefits :</p>
                <div className="profileContainer container-fluid">
                    <div className="availableProfiles row">
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" style={{ height: "15px" }} className="ben" name="benefits0" value="Certificate" onChange={this.benefit} />
                        Certificate
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" style={{ height: "15px" }} className="ben" name="benefits1" value="Letter Of Recommendation" onChange={this.benefit} />
                        Letter Of Recommendation
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" style={{ height: "15px" }} className="ben" name="benefits2" value="Bonus" onChange={this.benefit} />
                        Bonus
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" style={{ height: "15px" }} className="ben" name="benefits3" value="Flexible  Work Hours" onChange={this.benefit} />
                        Flexible  Work Hours
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" className="ben" style={{ height: "15px" }} name="benefits4" value="Free Snacks And Beverages" onChange={this.benefit} />
                        Free Snacks And Beverages
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" className="ben" style={{ height: "15px" }} name="benefits5" value="Informal Dress Code" onChange={this.benefit} />
                        Informal Dress Code
                    </label>
                        <label className="col-12 col-sm-6">
                            <input type="checkbox" style={{ height: "15px" }} className="ben" name="benefits6" value="Others" onChange={this.benefit} />
                        Others
                    </label>
                    </div>
                </div>
                {/* <Benefits methodFromParent={this.parentCollector} /> */}
                <p className="head head3">Skills Required :</p>
                <input type="text"
                    value={this.state.otherSkills}
                    onChange={(e) => { this.setState({ otherSkills: e.target.value }) }}
                    className="form-control" required placeholder="Add Hardware, Software, etc." />

                {/* <Skills methodFromParent={this.parentCollector} domain={this.state.profile} /> */}
                <p className="head head3">Evaluation Questions :</p>
                <Questions methodFromParent={this.parentCollector} />
                <div className="save container">
                    <button type="button" onClick={this.showAll} className="proceed col-10 col-sm-6 text-center">Post Internship</button>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <ul style={{ listStyleType: "none" }}>
                            {Object.keys(this.state.messages).map(
                                (message_key, index) => (
                                    <li key={index}>{this.state.messages[message_key]}</li>
                                )
                            )}
                        </ul>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default (PostInternship)