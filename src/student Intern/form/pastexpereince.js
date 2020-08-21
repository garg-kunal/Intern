import React from 'react';
import './form.css';
import remove from './images/delete.png'
import edit from './images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import DatePicker from "react-datepicker";
import axios from '../../setup';

import "react-datepicker/dist/react-datepicker.css";
const customStyles = {
    content: {
        border: "2px solid #4A00E0",
        backgroundColor: "white",
        width: "600px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        height: '90%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class PastExpierence extends React.Component {
    constructor() {
        super();

        this.state = {
            company: "",
            role: "",
            updateid: "",
            endDate: new Date(),
            startDate: new Date(),
            workLocation: "",
            describe: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            expierence: [],
            showModal: false,
            unCheck: true

        }

    }

    // Show Or Hide functions
    handleCloseModal() {
        this.setState({
            showModal: false,
            editShow: false,
            dataShow: true,
            buttonShow: true,
            addSkill: false
        });
    }
    show() {
        this.setState({
            addSkill: true,
            buttonShow: false,
            showModal: true
        })
    }

    // Delete the Skill

    remove(value) {
        // student/delete_experience/
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if (window.confirm(" Are You sure Delete? ")) {
            axios.delete('/api/accounts/student/delete_experience/' + value, headers)
                .then((res) => { console.log(res.data); this.print(); })
                .catch((err) => console.log(err));
        } else {
            this.handleCloseModal();
        }

    }

    // Add Skill
    submit(e) {
        e.preventDefault();
        const data = {
            organization: this.state.company,
            profile: this.state.role,
            type: this.state.workLocation,
            startdate: this.state.startDate,
            enddate: this.state.endDate,
            description: this.state.describe
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/accounts/student/add_experience', data, headers)
            .then((res) => { console.log(res); this.print(); })
            .catch((err) => console.log(err));

        this.setState({
            addSkill: false,
            buttonShow: true,
            company: "",
            role: "",
            endDate: new Date(),
            startDate: new Date(),
            workLocation: "",
            describe: "",
            unCheck: true

        })

    }
    print() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get('/api/accounts/student/view_experience', headers)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    expierence: res.data.data
                })
            })
            .catch((err) => console.log(err));

    }

    //fecth data from backend
    componentDidMount() {
        this.print();
    }

    // Modal Show functions 
    // 1
    edit() {

        // student/update_experience
        const data = {
            id: this.state.updateid,
            organization: this.state.company,
            profile: this.state.role,
            type: this.state.workLocation,
            startdate: this.state.startDate,
            enddate: this.state.endDate,
            description: this.state.describe

        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/accounts/student/update_experience', data, headers)
            .then((res) => { this.print(); console.log(res.data) })
            .catch((err) => console.log(err));
        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,
            level: "",
            Skillname: ""
        })

    }
    // 2
    editable(key) {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            updateid: this.state.expierence[key].id,
            company: this.state.expierence[key].organization,
            role: this.state.expierence[key].profile,
            endDate: this.state.expierence[key].enddate,
            startDate: this.state.expierence[key].startdate,
            workLocation: this.state.expierence[key].internship_type,
            describe: this.state.expierence[key].description,
        })

    }
    checkBox() {
        if (this.state.unCheck) {
            this.setState({
                endDate: "Working",
                unCheck: !this.state.unCheck
            })
        }
        else {
            this.setState({
                endDate: new Date(),
                unCheck: !this.state.unCheck
            })

        }

    }


    render() {
        return (
            <div>
                <label className="labels"> Past Experience: </label>

                {this.state.expierence.map((item, key) =>
                    <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                        {this.state.dataShow ?
                            <div className="row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-6" style={{ fontSize: "20px" }}>
                                    <b>Organization: </b>{item.organization}<br />
                                    <b>Role: </b>{item.profile}<br />
                                    <b>Internship Type: </b>{item.internship_type}<br />
                                    <b>Start Date: </b>{item.startdate}<br />
                                    <b>End Date: </b>{item.enddate}<br />
                                    <b>Description: </b>{item.description}<br />
                                </div>

                                <div className="col-md-3" style={{ padding: "10px" }}>
                                    <button className="btn border-0" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.editable(key) }} >
                                        <img src={edit} style={{height:"25px",width:"25px"}}
                                            height="30" alt="edit" className="img" />
                                    </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn border-0" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.remove(item.id) }} >
                                        <img src={remove}   style={{height:"25px",width:"25px"}}
                                            height="30" alt="edit" className="img" />
                                    </button>


                                </div>

                            </div> : null}

                        {this.state.editShow ?
                            <ReactModal
                                isOpen={this.state.showModal}
                                contentLabel="Update"
                                style={customStyles}

                            >

                                <div style={{ fontSize: "20px" }}>
                                    <input type="text" className="form-control"
                                        value={this.state.company}
                                        onChange={(e) => { this.setState({ company: e.target.value }) }}
                                        placeholder="e.g. Merge." />
                                    <br />
                                    <input type="text" className="form-control"
                                        value={this.state.role}
                                        onChange={(e) => { this.setState({ role: e.target.value }) }}
                                        placeholder="e.g. Web Developer" />
                                    <br />
                                    <input type="text" className="form-control"
                                        value={this.state.workLocation}
                                        onChange={(e) => { this.setState({ workLocation: e.target.value }) }}
                                        placeholder="e.g. Home,Officee" />
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Start Date</label>
                                            <DatePicker
                                                className="form-control"
                                                selected={new Date(this.state.startDate)}
                                                onChange={(date) => { this.setState({ startDate: date }) }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Completed Year:</label> &nbsp;&nbsp;
                                            {this.state.endDate === 'Working' ?
                                                <DatePicker
                                                    selected={new Date()}
                                                    className="form-control"
                                                    onChange={(date) => { this.setState({ endDate: date }) }}
                                                />
                                                :
                                                <DatePicker
                                                    selected={new Date(this.state.endDate)}
                                                    className="form-control"
                                                    onChange={(date) => { this.setState({ endDate: date }) }}
                                                />
                                            }
                                        </div>
                                    </div>


                                    <br /><br />
                                    <textarea className="form-control" rows="2" cols="4"
                                        value={this.state.describe}
                                        onChange={(e) => { this.setState({ describe: e.target.value }) }}>
                                    </textarea>
                                </div>
                                <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                    <button className="btn btnedit" onClick={() => { this.edit() }}>
                                        Update
                                        </button>&nbsp;&nbsp;
                                        <button className="btn btnedit"
                                        onClick={() => { this.handleCloseModal() }}>Cancel</button>

                                </div>



                            </ReactModal>
                            : null}

                    </div>
                )}
                <br />
                {this.state.addSkill ?
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Update"
                        style={customStyles}
                    >
                        <form className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.company}
                                onChange={(e) => { this.setState({ company: e.target.value }) }}
                                placeholder="e.g. Merge." />
                            <br />
                            <input type="text" className="form-control"
                                value={this.state.role}
                                onChange={(e) => { this.setState({ role: e.target.value }) }}
                                placeholder="e.g. Web Developer" />
                            <br />
                            <input type="text" className="form-control"
                                value={this.state.workLocation}
                                onChange={(e) => { this.setState({ workLocation: e.target.value }) }}
                                placeholder="e.g. Home,Officee" />
                            <br />
                            Currently Working: <input type="checkbox"
                             style={{height:"15px"}}
                                onChange={() => { this.checkBox() }} />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Start Year</label>
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.startDate}
                                        onChange={(Year) => { this.setState({ startDate: Year }) }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    {this.state.unCheck ?
                                        <div><label>Completed Year:</label> &nbsp;&nbsp;
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.endDate}
                                                onChange={(date) => { this.setState({ endDate: date }) }}
                                            />
                                        </div> : null}
                                </div>
                            </div> <br /><br />
                            <label>Description:(optional)</label>
                            <textarea className="form-control" rows="2" cols="5"
                                value={this.state.describe}
                                onChange={(e) => { this.setState({ describe: e.target.value }) }}>
                            </textarea>
                            <br />
                            <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                    onClick={(e) => { this.submit(e) }} align="right">Add Experience</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                    onClick={() => { this.handleCloseModal() }}>Cancel</button>
                            </div>
                        </form>

                    </ReactModal> : null}
                {this.state.buttonShow ?
                    <div className="row" >
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <button className="btn btns" onClick={() => { this.show() }}>+ Add Experience</button>
                        </div>
                    </div>
                    : null}

            </div>
        )
    }

}