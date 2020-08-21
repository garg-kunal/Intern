import React from 'react';
import './form.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImagePicker } from 'react-file-picker'
import Navbar from '../quiz/navbar';
import userpng from './images/NoPath.png';
import Past from './pastexpereince';
import Phd from './educations/Phd';
import SchoolX from './educations/10School';
import SchoolXII from './educations/school';
import PostGrad from './educations/postGraduation';
import Graduation from './educations/graduation';
import Skills from './skills';
import Additonal from './additional';
import Potfolio from './portfolioLink';
import axios from '../../setup';

export default class Form extends React.Component {

    constructor() {
        super();
        AOS.init();
        this.state = {
            picLink: "",
            url: "",
            school: "",
            college: "",
            university: "",
            address: "",
            dob: "",
            pin: "",
            portfolio: [],
            resume: [],
            showAdd: false,
            check: false,
            name: "",
            mobile_number: "",
            city: "",
            email: "",
        }
    }
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

            this.props.history.push('/login/student');
        }
        else {
            this.setState({ check: this.props.match.params.bool }, () => {
                // alert(this.state.check);
            });
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get('/api/accounts/student', headers)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        email: res.data.data.email,
                        name: res.data.data.name,
                        mobile_number: res.data.data.mobile_number,
                        city: res.data.data.city
                    })
                })
                .catch((err) => console.log(err))
        }
    }

    imageHandler = (e) => {
        this.setState({
            picLink: e,
        })
    }

    render() {
        return (
            <div className="container-fluid main-container" >
                <br />
                <div className="container-fluid inner-container" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="2500">
                    <div className="row"><h3 className="mx-auto heading">Personal Information</h3></div>
                    <br />
                    <div className="row">
                        <div className=" col-md-2 col-lg-2">
                            <img src={this.state.picLink || userpng}
                                alt="user" className="img-fluid"
                                Height="180" width="180"
                            /><br />
                            <ImagePicker
                                extensions={['jpg', 'jpeg', 'png']}
                                dims={{ minWidth: 100, maxWidth: 5000, minHeight: 100, maxHeight: 5000 }}
                                onChange={base64 => { this.imageHandler(base64) }}
                                onError={errMsg => (alert(errMsg))}
                            >
                                <button className="btn btns text-center">
                                    + Add Image
    </button>
                            </ImagePicker>

                        </div>
                        <div className="col-md-10 col-lg-10 username mx-auto">
                            <h3><strong>{this.state.name}</strong></h3>
                            {this.state.email}<br />
                            {this.state.mobile_number}<br />
                            {this.state.city}<br />
                            <hr></hr>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-2">
                            <label className="labels">Education:</label>
                        </div>

                        <div className="col-md-10">
                            {/* <p className="education-pt"><button className="btn btnEdu" onClick={()=>{}} >+ Add Education</button></p> */}
                            <div>
                                <p className="education-pt"><SchoolX /></p>
                                {/* <p className="education-pt"><SchoolXII /></p>
                                <p className="education-pt"><Graduation /></p>
                                <p className="education-pt"><PostGrad /></p>
                                <p className="education-pt"><Phd /></p> */}

                            </div>

                        </div>
                    </div>

                    <hr />
                    <br /><br />
                    <Past />
                    <hr />

                    <br /><br /><br />

                    <Skills />
                    <br /><br /><hr />
                    <Potfolio />
                    <br /><br /><br />
                    <hr />
                    <Additonal />


                    <br /><br />
                    <div className="row mx-auto">
                        {this.state.check === 'true' ?
                            <button className="btn btn-primary mx-auto " onClick={() => { this.props.history.push('/student/status') }}>
                                Submit Application</button> :
                            <button className="btn btn-primary mx-auto " onClick={() => { this.props.history.push('/student/internships') }}>
                                Proceed</button>
                        }

                    </div>

                </div>
                <br /><br />
            </div>
        )
    }

}