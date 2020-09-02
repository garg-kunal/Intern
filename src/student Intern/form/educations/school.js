import React from 'react';
import '../form.css';
import Graduation from './graduation';
import remove from '../images/delete.png';
import edit from '../images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../../setup';
const customStyles = {
    content: {
        // border: "2px solid #4A00E0",
        backgroundColor: "white",
        width: "80%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 4px 8px lightgrey'
    }
};

export default class SchoolXII extends React.Component {
    constructor() {
        super();

        this.state = {
            board: "",
            class: "Senior Secondary XII",
            school: "",
            marks: "",
            updateid: "",
            endDate: new Date(),
            startDate: new Date(),
            stream: "",
            describe: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            schoolPast: "",
            showModal: false,
            unCheck: true,
            ListShow: false

        }

    }

    print() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get('/api/accounts/student/education/12/get', headers)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    ListShow: true,
                    school: res.data.data.school,
                    board: res.data.data.board,
                    stream: res.data.data.stream,
                    marks: res.data.data.cgpa_percentage,
                    startDate: res.data.data.startdate,
                    endDate: res.data.data.enddate
                })
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        // api fetcghing 
        this.print();
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

    remove() {
        // student/education/12/delete/<int:mobile_number>

        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        if (window.confirm(" Are You sure Delete? ")) {
            axios.delete('/api/accounts/student/education/12/delete', headers)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        ListShow: false,
                        board: "",
                        class: "Senior Secondary X11",
                        school: "",
                        marks: "",
                        endDate: new Date(),
                        startDate: new Date(),
                        stream: "",
                        unCheck: true
                    })
                    this.print();
                })
                .catch((err) => console.log(err));
        }
        else {
            this.setState({
                buttonShow: false,
                dataShow: true,
            })
            this.handleCloseModal();

        }
    }


    // Add Skill
    submit(e) {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        e.preventDefault();
        if (this.state.unCheck) {
            const data = {
                school: this.state.school,
                board: this.state.board,
                cgpa_percentage: this.state.marks,
                stream: this.state.stream,
                startdate: this.state.startDate,
                enddate: this.state.endDate

            }
            axios.post('/api/accounts/student/education/12', data, headers)
                .then((res) => {
                    console.log(res.data)
                    alert(res.data.status_message.message);
                    this.print();
                })
                .catch((err) => {
                    console.log(err);
                    alert("Try Again After SomeTime");
                });

        }
        else {
            const data = {
                school: this.state.school,
                board: this.state.board,
                cgpa_percentage: this.state.marks,
                startdate: this.state.startDate,
                stream: this.state.stream,
                enddate: "Pursuing"

            }
            axios.post('/api/accounts/student/education/12', data, headers)
                .then((res) => {
                    console.log(res.data);
                    // alert(res.data.status_message.message);
                    this.print();
                })
                .catch((err) => {
                    console.log(err);
                    alert("Try Again After SomeTime")
                });

        }
    }

    // Modal Show functions 
    // 1
    edit() {
        const data = {
            school: this.state.school,
            board: this.state.board,
            cgpa_percentage: this.state.marks,
            startdate: this.state.startDate,
            stream: this.state.stream,
            enddate: this.state.endDate
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/accounts/student/education/12', data, headers)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    // editShow: false,
                    dataShow: true,
                    showModal: false,

                })
                this.print();
            })
            .catch((err) => {
                console.log(err);
                alert("Try Again After SomeTime")
            });



    }
    // 2
    editable() {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
        })

    }
    checkBox() {
        if (this.state.unCheck) {
            this.setState({
                endDate: "Persuing",
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
                {this.state.ListShow ?
                    <div>
                        <div className=" skill-card border-0" style={{ paddingBottom: "15px" }}>
                            {this.state.dataShow ?
                                <div className="row  no-gutters student-10-data">

                                    <div className="col-md-8  col-9 student-data-form" >
                                        <b>{this.state.class}</b><br/>
                                        {this.state.school}<br />
                                        {this.state.board}<br />
                                        {this.state.stream}<br />

                                        {this.state.marks}<br />
                                        {this.state.startDate}<br />
                                        {this.state.endDate}

                                    </div>

                                    <div className="col-md-3 col-3" style={{ padding: "10px", paddingTop: "0" }}>
                                        <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                            onClick={() => { this.editable() }} >
                                            <img src={edit}
                                                alt="edit" className="img-fluid  btn-edit-student" />
                                        </button>

                                        <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                            onClick={() => { this.remove() }} ><img src={remove}
                                                alt="edit" className="img-fluid  btn-delete-student" />
                                        </button>
                                    </div>

                                </div> : null}
                            <div className="row">
                                <div class="col-md-12 col-lg-12">
                                    <br />
                                    <Graduation />
                                </div>
                            </div>

                            {this.state.editShow ?
                                <ReactModal
                                    isOpen={this.state.showModal}
                                    contentLabel="Update"
                                    style={customStyles}
                                >
                                    <div style={{ fontSize: "20px" }}>
                                        <input type="text" className="form-control"
                                            value={this.state.stream}
                                            onChange={(e) => { this.setState({ stream: e.target.value }) }}
                                            placeholder="e.g. Med/Non Med" />
                                        <br />
                                        <input type="text" className="form-control"
                                            value={this.state.school}
                                            onChange={(e) => { this.setState({ school: e.target.value }) }}
                                            placeholder="e.g. Dasmesh Public School" />
                                        <br />
                                        <input type="text" className="form-control"
                                            value={this.state.board}
                                            onChange={(e) => { this.setState({ board: e.target.value }) }}
                                            placeholder="e.g. CBSE" />
                                        <br />
                                        <input type="text" className="form-control"
                                            value={this.state.marks}
                                            onChange={(e) => { this.setState({ marks: e.target.value }) }}
                                            placeholder="e.g. marks" />
                                        <br />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="date-label-resume" >Start Date:</label>&nbsp;&nbsp;
                                                <DatePicker
                                                    className="form-control"
                                                    selected={new Date(this.state.startDate)}
                                                    onChange={(date) => { this.setState({ startDate: date }) }}
                                                />
                                                <br /><br />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="date-label-resume">Complete Date:</label>&nbsp;&nbsp;
                                                {this.state.endDate === "Pursuing" ?
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={new Date()}
                                                        onChange={(date) => { this.setState({ endDate: date }) }}
                                                    /> :
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={new Date(this.state.endDate)}
                                                        onChange={(date) => { this.setState({ endDate: date }) }}
                                                    />
                                                }  <br /><br />
                                            </div>
                                        </div>



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

                    </div>
                    :
                    <div>
                        {this.state.addSkill ?
                            <ReactModal
                                isOpen={this.state.showModal}
                                contentLabel="Update"
                                style={customStyles}
                            >
                                <form className="form-group">
                                    <input type="text" className="form-control"
                                        value={this.state.stream}
                                        onChange={(e) => { this.setState({ stream: e.target.value }) }}
                                        placeholder="e.g. Med/non Med" />
                                    <br />
                                    <input type="text" className="form-control"
                                        value={this.state.school}
                                        onChange={(e) => { this.setState({ school: e.target.value }) }}
                                        placeholder="e.g. Dasmesh Public School" />
                                    <br />
                                    <input type="text" className="form-control"
                                        value={this.state.board}
                                        onChange={(e) => { this.setState({ board: e.target.value }) }}
                                        placeholder="e.g. CBSE" />
                                    <br />
                                    <input type="text" className="form-control"
                                        value={this.state.marks}
                                        onChange={(e) => { this.setState({ marks: e.target.value }) }}
                                        placeholder="e.g. 93% or 9.4 cgpa" />
                                    <br />
                                    Currently Studying: <input type="checkbox"
                                        style={{ height: "15px" }}
                                        onChange={() => { this.checkBox() }} />
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="date-label-resume">Start Date:</label>&nbsp;&nbsp;
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.startDate}
                                                onChange={(Year) => { this.setState({ startDate: Year }) }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            {this.state.unCheck ?
                                                <div><label className="date-label-resume">Completed Date:</label> &nbsp;&nbsp;
                                            <DatePicker
                                                        className="form-control"
                                                        selected={this.state.endDate}
                                                        onChange={(date) => { this.setState({ endDate: date }) }}
                                                    />
                                                </div> : null}
                                        </div>
                                    </div> <br /><br />

                                    <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                        <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                            onClick={(e) => { this.submit(e) }} align="right">Save</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                            onClick={() => { this.handleCloseModal() }}>Cancel</button>
                                    </div>
                                </form>

                            </ReactModal> : null}
                        {this.state.buttonShow ?
                            <div className="row" >

                                <button className="btn btns" onClick={() => { this.show() }}>+Add Secondary(XII) Education</button>

                            </div>
                            : null}

                    </div>}



            </div>
        )
    }

}