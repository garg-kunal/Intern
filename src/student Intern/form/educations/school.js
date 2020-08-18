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
        border: "2px solid #4A00E0",
        backgroundColor: "white",
        width: "500px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
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
        axios.get('/api/accounts/student/education/12/get/6395642409')
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
        if (window.confirm(" Are You sure Delete? ")) {
        axios.delete('/api/accounts/student/education/12/delete/6395642409')
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
    else{
        this.setState({
            buttonShow: false,
            dataShow: true,
        })
        this.handleCloseModal();

    }
}


    // Add Skill
    submit(e) {
        e.preventDefault();
        if (this.state.unCheck) {
            const data = {
                mobile_number: "6395642409",
                school: this.state.school,
                board: this.state.board,
                cgpa_percentage: this.state.marks,
                stream: this.state.stream,
                startdate: this.state.startDate,
                enddate: this.state.endDate

            }
            axios.post('/api/accounts/student/education/12', data)
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
                mobile_number: "6395642409",
                school: this.state.school,
                board: this.state.board,
                cgpa_percentage: this.state.marks,
                startdate: this.state.startDate,
                stream: this.state.stream,
                enddate: "Pursuing"

            }
            axios.post('/api/accounts/student/education/12', data)
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
            mobile_number: "6395642409",
            school: this.state.school,
            board: this.state.board,
            cgpa_percentage: this.state.marks,
            startdate: this.state.startDate,
            stream: this.state.stream,
            enddate: this.state.endDate
        }
        axios.post('/api/accounts/student/education/12', data)
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
                                <div className="row">
                                    <div className="col-md-3">
                                    </div>
                                    <div className="col-md-6" style={{ fontSize: "20px" }}>
                                        <b>School:  </b> &nbsp;{this.state.school}<br />
                                        <b>Board:  </b>&nbsp; {this.state.board}<br />
                                        <b>Stream:  </b>&nbsp; {this.state.stream}<br />
                                        <b>CLass:  </b>&nbsp;{this.state.class}<br />
                                        <b>Marks:  </b>&nbsp;{this.state.marks}<br />
                                        <b>Start Date:  </b>&nbsp; {this.state.startDate}<br />
                                        <b>End Date:  </b>&nbsp; {this.state.endDate}

                                    </div>
                                    <div className="col-md-3" style={{ padding: "10px" }}>
                                        <button className="btn border-0" style={{ backgroundColor: "white" }}
                                            onClick={() => { this.editable() }} ><img src={edit}
                                                height="30" alt="edit" className="img" />
                                        </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn border-0" style={{ backgroundColor: "white" }}
                                            onClick={() => { this.remove() }} ><img src={remove}
                                                height="30" alt="edit" className="img" />
                                        </button>
                                    </div>

                                </div> : null}
                            <div className="row">
                                <div class="col-md-12 col-lg-12">
                                    <br/><br/>
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
                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Start Date</label>
                                                <DatePicker
                                                    className="form-control"
                                                    selected={new Date(this.state.startDate)}
                                                    onChange={(date) => { this.setState({ startDate: date }) }}
                                                />
                                                <br /><br />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Complete Date:</label>
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
                                        onChange={() => { this.checkBox() }} />
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Start Date</label>
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.startDate}
                                                onChange={(Year) => { this.setState({ startDate: Year }) }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            {this.state.unCheck ?
                                                <div><label>Completed Date:</label> &nbsp;&nbsp;
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
                                            onClick={(e) => { this.submit(e) }} align="right">Add Secondary(XII) Education</button>
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