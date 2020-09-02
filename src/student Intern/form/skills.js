import React from 'react';
import './form.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import remove from './images/delete.png'
import edit from './images/edit.png';
import axios from '../../setup';
import ReactModal, { setAppElement } from 'react-modal';

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
        borderRadius:'20px',
        transform: 'translate(-50%, -50%)',
        boxShadow:'0 0 4px 8px lightgrey'
    }
};

export default class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            level: "Beginner",
            Skillname: "",
            updateid: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            skillsOut: [],
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
            addSkill: false,
            Skillname:""
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

    Remove = (value) => {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        if (window.confirm(" Are You sure Delete? ")) {
            // /student/delete_skill/
            axios.delete('/api/accounts/student/delete_skill/' + value, headers)
                .then((res) => this.print())
                .catch((err) => console.log(err))

        } else {
            this.handleCloseModal();
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

        axios.get('/api/accounts/student/view_skills', headers)
            .then((res) => {
                this.setState({
                    skillsOut: res.data.data
                })
            })
            .catch((err) => console.log(err));
    }
    componentDidMount() {
        this.print();
    }

    // Add Skill
    submit(e) {
        e.preventDefault();
        var data = {
            skill: this.state.Skillname,
            level: this.state.level
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/accounts/student/add_skill', data, headers)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        // this.state.skillsOut.push(data);
        this.setState({
            addSkill: false,
            buttonShow: true,
            level: "Beginner",
            Skillname: ""
        })

    }

    // Modal Show functions 
    // 1
    edit() {
        const data = {
            id: this.state.updateid,
            skill: this.state.Skillname,
            level: this.state.level
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        //student/update_skill/<int:id>
        axios.post('/api/accounts/student/update_skill', data, headers)
            .then((res) => this.print())
            .catch((err) => console.log(err));

        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,
            level: "Beginner",
            Skillname: "",
            updateid: ""
        })


    }
    // 2
    editable(value) {


        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            updateid: this.state.skillsOut[value].id,
            Skillname: this.state.skillsOut[value].skill,
            level: "Beginner"
        })

    }
    render() {
        return (
            <div >


                {this.state.skillsOut.map((item, key) =>
                    <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                        {this.state.dataShow ?
                            <div className="row no-gutters student-10-data">
                                <div className="col-md-8  col-9 student-data-form">
                                    <b>Skill:  </b>{item.skill} <br></br>
                                    <b>Level: </b>{item.level}
                                </div>
                                <div className="col-md-3 col-lg-3 col-3 " style={{ padding: "10px",paddingTop:"0" }}>
                                    <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.editable(key) }} >
                                        <img src={edit}  alt="edit" className="img-fluid  btn-edit-student" />
                                    </button>
                                               
                                   <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.Remove(item.id) }} >
                                        <img src={remove}  alt="edit" className="img-fluid  btn-delete-student" />
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
                                    >
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
                                <button className="btn btnedit" style={{ borderRadius: "15px" }} onClick={(e) => { this.submit(e) }} align="right">Add</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                    onClick={() => { this.handleCloseModal() }}>Cancel</button>
                            </div>
                        </form>

                    </ReactModal> : null}
                {this.state.buttonShow ?
                    <div className="row" >
                        <button className="btn btns" onClick={() => { this.show() }}>+ Add Skills</button>
                    </div>

                    : null}

            </div>
        )
    }

}