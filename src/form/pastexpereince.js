import React from 'react';
import './form.css';
import remove from './images/delete.png'
import edit from './images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

export default class PastExpierence extends React.Component {
    constructor() {
        super();

        this.state = {
            company: "",
            role: "",
            endDate: new Date(),
            startDate: new Date(),
            workLocation: "",
            describe: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            internPast: [],
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
        alert(value);
        this.setState({
            skillsOut: this.state.skillsOut.filter(el => el.Skillname !== value)
        })
        //this.state.skillsOut.filter(el => el.Skillname !== value);
        console.log(this.state.skillsOut);
    }

    // Add Skill
    submit(e) {
        e.preventDefault();
        alert(this.state.endDate);
        alert(this.state.startDate);

        this.setState({
            addSkill: false,
            buttonShow: true,

        })

    }

    // Modal Show functions 
    // 1
    edit() {

        var data = {
            Skillname: this.state.Skillname,
            level: this.state.level
        }

        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,
            level: "",
            Skillname: ""
        })
        this.state.skillsOut.push(data);

    }
    // 2
    editable(skill) {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            Skillname: skill,
            level: ""

        })

    }
    checkBox() {
        if (this.state.unCheck) {
            this.setState({
                endDate: "presently",
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

                {this.state.internPast.map((item, key) =>
                    <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                        {this.state.dataShow ?
                            <div className="row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-6" style={{ fontSize: "20px" }}>
                                    <b>{item.Skillname}<br /></b>
                                    {item.level}
                                </div>
                                <div className="col-md-3" style={{ padding: "10px" }}>
                                    <button className="btn border-0" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.remove(item.Skillname) }} ><img src={remove}
                                            height="30" alt="edit" className="img" /></button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn border-0" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.editable(item.Skillname) }} ><img src={edit}
                                            height="30" alt="edit" className="img" /></button>
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
                                    <label>Start Date</label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={(date) => { this.setState({ startDate: date }) }}
                                    />
                                    <br /><br />
                                    <textarea className="form-control" rows="4" cols="10"
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
                            <textarea className="form-control" rows="4" cols="10"
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