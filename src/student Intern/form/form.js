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
        }
    }

    imageHandler = (e) => {
        this.setState({
            picLink: e,
            //picLink: URL.createObjectURL(e.target.files[0]),
            //url: e.target.files[0]
        })
    }

    render() {
        return (
            <div className="container-fluid main-container" >
                <br />
                <div className="container-fluid inner-container" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="2500">
                    <div className="row"><h3 className="mx-auto heading">Personal Information</h3></div>
                    <br /><br /><br />
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
                            <h3><strong>HarshDeep Singh</strong></h3><br />
                        email here<br />
                        phn no here<br />
                        changigarh<br />
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
                        <button className="btn btn-primary mx-auto " onClick={()=>{this.props.history.push('/internships')}}>
                            Proceed</button>
                    </div>

                </div>
                <br /><br />
            </div>
        )
    }

}