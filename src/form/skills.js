import React from 'react';
import './form.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import remove from './images/delete.png'
import edit from './images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';

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

export default class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            level: "",
            Skillname: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            skillsOut: [{
                Skillname: "Adobe ",
                level: "Beginner"
            }],
            showModal: false

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
            showModal: true,
            dataShow: true

        })
    }

    // Delete the Skill

    Remove=(value)=> {
    
        if (window.confirm(" Are You sure Delete? ")) {
            this.setState({
                skillsOut: this.state.skillsOut.filter(el => el.Skillname !== value)
            })
        } else {
            this.handleCloseModal();
        }
    }

    // Add Skill
    submit() {

        var data = {
            Skillname: this.state.Skillname,
            level: this.state.level
        }
        this.state.skillsOut.push(data);
        this.setState({
            addSkill: false,
            buttonShow: true,
            level: "",
            Skillname: ""
        })

    }

    // Modal Show functions 
    // 1
    edit() {

        var data = {
            Skillname: this.state.Skillname,
            level: this.state.level
        }
        this.state.skillsOut.push(data);
        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,
            level: "",
            Skillname: ""
        })


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
    render() {
        return (
            <div>
                <label className="labels"> Skill: </label>

                {this.state.skillsOut.map((item, key) =>
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
                                        onClick={() => { this.editable(item.Skillname) }} >
                                        <img src={edit} height="30" alt="edit" className="img" />
                                    </button>
                                               &nbsp;&nbsp;&nbsp;&nbsp;
                                   <button className="btn border-0" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.Remove(item.Skillname) }} >
                                        <img src={remove} height="30" alt="edit" className="img" />
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
                                        value={this.state.Skillname}
                                        onChange={(e) => { this.setState({ Skillname: e.target.value }) }}
                                        placeholder="e.g. Adobe Photoshop" />
                                    <br />
                                    <select className="dropdown form-control"
                                        onChange={(e) => { this.setState({ level: e.target.value }) }}
                                        selected="Begginner">
                                        <option value="Begginner" >Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>

                                    </select>
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
                        <form className="form-group" onSubmit="return false">
                            <input type="text" className="form-control"
                                value={this.state.Skillname}
                                onChange={(e) => { this.setState({ Skillname: e.target.value }) }}
                                placeholder="e.g. Adobe Photoshop" />
                            <br />
                            <select className="dropdown form-control" selected="Begginner"
                                onChange={(e) => { this.setState({ level: e.target.value }) }}>
                                <option value="Begginner" >Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>

                            </select>
                            <br />
                            <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                <button className="btn btnedit" style={{ borderRadius: "15px" }} onClick={() => { this.submit() }} align="right">Add</button>
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
                            <button className="btn btns" onClick={() => { this.show() }}>+ Add Skills</button>
                        </div>
                    </div>
                    : null}

            </div>
        )
    }

}