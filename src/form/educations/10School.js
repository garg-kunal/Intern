import React from 'react';
import '../form.css';
import High from './school'
import remove from '../images/delete.png';
import edit from '../images/edit.png';
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

export default class SchoolX extends React.Component {
    constructor() {
        super();

        this.state = {
            board: "",
            class: "Senior Secondary X",
            school: "",
            marks: "",
            endDate: new Date(),
            startDate: new Date(),
            describe: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            schoolPast: ['a'],
            showModal: false,
            unCheck: true,
            ListShow: false

        }

    }

    componentDidMount() {
        // api fetcghing 
        if (this.state.schoolPast.length != 0) {
            this.setState({
                ListShow: true
            })

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
        // alert(value);
        // this.setState({
        //     skillsOut: this.state.skillsOut.filter(el => el.Skillname !== value)
        // })
        // //this.state.skillsOut.filter(el => el.Skillname !== value);
        // console.log(this.state.skillsOut);
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


        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,

        })


    }
    // 2
    editable(skill) {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,


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
                {this.state.ListShow ?
                    <div>

                        {this.state.schoolPast.map((item, key) =>
                            <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                                {this.state.dataShow ?
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6" style={{ fontSize: "20px" }}>
                                            <b>{item}<br /></b>
                                            {item}

                                        </div>
                                        <div className="col-md-3" style={{ padding: "10px" }}>
                                            <button className="btn border-0" style={{ backgroundColor: "white" }}
                                                onClick={() => { this.editable(item) }} ><img src={edit}
                                                    height="30" alt="edit" className="img" /></button>

                            &nbsp;&nbsp;&nbsp;&nbsp;



                                            <button className="btn border-0" style={{ backgroundColor: "white" }}
                                                onClick={() => { this.remove(item) }} ><img src={remove}
                                                    height="30" alt="edit" className="img" /></button>
                                        </div>

                                    </div> : null}
                                <div className="row">
                                    <div class="col-md-12 col-lg-12">
                                        <High/>
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
                                            <br />
                                            <label>Start Year</label>
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={(Year) => { this.setState({ startDate: Year }) }}
                                            />
                                            <br /><br />
                                            <label>Complete Year</label>
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={(Year) => { this.setState({ startDate: Year }) }}
                                            />
                                            <br /><br />

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

                                    <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                        <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                            onClick={(e) => { this.submit(e) }} align="right">Add Secondary(X) Education</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                            onClick={() => { this.handleCloseModal() }}>Cancel</button>
                                    </div>
                                </form>

                            </ReactModal> : null}
                        {this.state.buttonShow ?
                            <div className="row" >

                                <button className="btn btns" onClick={() => { this.show() }}>+Add Education</button>

                            </div>
                            : null}

                    </div>}



            </div>
        )
    }

}