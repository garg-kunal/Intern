import React from 'react';
import './form.css';
import remove from '../../assets/images/delete.png'
import edit from '../../assets/images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../../setup';
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

export default class Additional extends React.Component {
    constructor() {
        super();
        AOS.init();

        this.state = {
            textArea: "",
            editShow: false,
            dataShow: false,
            addSkill: false,
            buttonShow: true,
            textOut: "",
            showModal: false

        }

    }

    componentWillMount() {
        this.print();
        ReactModal.setAppElement('body');
    }

    // Show Or Hide functions
    handleCloseModal() {
        if (this.state.textArea.length === 0 || this.state.textOut.length===0) {
            this.setState({
                showModal: false,
                editShow: false,
                dataShow: false,
                buttonShow: true,
                addSkill: false,
                textArea: ""
            });
        }
        else{
            this.setState({
                showModal: false,
                editShow: false,
                dataShow: true,
                buttonShow: false,
                addSkill: false,
                textArea:""
            });
        }

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
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if (window.confirm(" Are You sure Delete? ")) {
            axios.delete('/api/accounts/student/delete_bio', headers)
                .then((res) => {
                    this.setState({
                        buttonShow: true,
                        dataShow: false,
                        textArea: "",
                        textOut: ""
                    })
                })

        } else {
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
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if (this.state.textArea.length > 500)
            alert("Too large Information");
        else {
            var data = {
                bio: this.state.textArea
            }
            axios.post('/api/accounts/student/add_bio', data, headers)
                .then((res) => {
                    this.setState({
                        addSkill: false
                    })
                    this.print();
                })
                .catch((err) => {

                    this.setState({
                        addSkill: true,
                        buttonShow: true,
                        dataShow: false,
                    })
                });
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
        axios.get('/api/accounts/student/view_bio', headers)
            .then((res) => {
                if (res.data.data.length !== 0) {
                    this.setState({
                        dataShow: true,
                        buttonShow: false,
                        textOut: res.data.data
                    })
                }
            })
            .catch((err) => {

                this.setState({
                    dataShow: false,
                    addSkill: true,
                    buttonShow: true,
                })
            })
    }

    // Modal Show functions 
    // 1
    edit() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        if (this.state.textArea.length > 500)
            alert("Too large Information");
        else {
            var data = {
                bio: this.state.textArea
            }
            axios.post('/api/accounts/student/add_bio', data, headers)
                .then((res) => {

                    this.setState({
                        editShow: false,
                        addSkill: false,
                        dataShow: true,
                        showModal: false,
                        textArea: ""
                    })
                    this.print();
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        addSkill: false,
                        buttonShow: true,
                        dataShow: false,
                    })
                });
        }


    }
    // 2
    editable() {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            textArea: this.state.textOut
        })

    }
    render() {
        return (
            <div>

                <div className="skill-card border-0" style={{ paddingBottom: "15px" }}>
                    {this.state.dataShow ?
                        <div className="row no-gutters student-10-data">

                            <div className="col-md-8 col-9  student-data-form" >
                                {this.state.textOut}
                            </div>

                            <div className="col-md-3 col-3" style={{ padding: "10px", paddingTop: "0" }}>
                                <button className="btn border-0  btn-edit-student-main" style={{ backgroundColor: "white" }}
                                    onClick={() => { this.editable() }} ><img src={edit}

                                        height="30" alt="edit" className="img-fluid  btn-edit-student" /></button>


                                <button className="btn border-0  btn-edit-student-main" style={{ backgroundColor: "white" }}
                                    onClick={() => { this.remove() }} ><img src={remove}
                                        className="img-fluid  btn-delete-student"
                                        height="30" alt="edit" /></button>
                            </div>


                        </div> : null}

                    {this.state.editShow ?
                        <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel="Update"
                            style={customStyles}
                            data-aos="fade-down"

                        >

                            <div style={{ fontSize: "20px" }}>
                                <label className="date-label-resume-descp">Description:(optional)</label>
                                <textarea rows="4" cols="50"
                                    className="form-control"
                                    value={this.state.textArea}

                                    onChange={(e) => { this.setState({ textArea: e.target.value }) }}
                                ></textarea>
                                <br />
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

                {this.state.addSkill ?
                    <div >
                        <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel="Update"

                            style={customStyles}>
                            <label className="date-label-resume-descp">Description:(optional)</label>
                            <textarea rows="2" cols="5" className="form-control"
                                value={this.state.textArea}
                                placeholder="Don't More than 500 words"
                                onChange={(e) => { this.setState({ textArea: e.target.value }) }}
                            >Additonal Information</textarea>
                            <br />
                            <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                    onClick={(e) => { this.submit(e) }} align="right">Add</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                    onClick={() => { this.handleCloseModal() }}>Cancel</button>
                            </div>
                        </ReactModal>
                    </div> : null}
                {this.state.buttonShow ?
                    <div className="row" >

                        <button className="btn btns" onClick={() => { this.show() }}>+ Add Additonal</button>
                    </div>

                    : null}

            </div>
        )
    }

}