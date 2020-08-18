import React from 'react';
import './form.css';
import remove from './images/delete.png'
import edit from './images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../../setup';
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
        this.setState({
            showModal: false,
            editShow: false,
            dataShow: true,
            buttonShow: false,
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
        if (window.confirm(" Are You sure Delete? ")) {
            axios.delete('/api/accounts/student/delete_bio/6395642409')
                .then((res) => {
                    console.log(res.data);
                    alert("Deleted Succesfully");
                    this.setState({
                        buttonShow: true,
                        dataShow: false,
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
        if (this.state.textArea.length > 500)
            alert("Too large Information");
        else {
            var data = {
                mobile_number: "6395642409",
                bio: this.state.textArea
            }
            axios.post('/api/accounts/student/add_bio', data)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        addSkill: false
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
    print() {
        axios.get('/api/accounts/student/view_bio/6395642409')
            .then((res) => {
                this.setState({
                    dataShow: true,
                    buttonShow: false,
                    textOut: res.data.data
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    dataShow: false,
                    buttonShow: true,
                })
            })
    }

    // Modal Show functions 
    // 1
    edit() {
        if (this.state.textArea.length > 500)
            alert("Too large Information");
        else {
            var data = {
                mobile_number: "6395642409",
                bio: this.state.textArea
            }
            axios.post('/api/accounts/student/add_bio', data)
                .then((res) => {
                    console.log(res.data);

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
            textArea:this.state.textOut
        })

    }
    render() {
        return (
            <div>
                <label className="labels"> ADDITIONAL <br />INFORMATION: </label>


                <div className="skill-card border-0" style={{ paddingBottom: "15px" }}>
                    {this.state.dataShow ?
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6" style={{ fontSize: "20px" }}>
                                {this.state.textOut}
                            </div>
                            <div className="col-md-3" style={{ padding: "10px" }}>
                                <button className="btn border-0" style={{ backgroundColor: "white" }}
                                    onClick={() => { this.editable() }} ><img src={edit}
                                        height="30" alt="edit" className="img" /></button>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn border-0" style={{ backgroundColor: "white" }}
                                    onClick={() => { this.remove() }} ><img src={remove}
                                        height="30" alt="edit" className="img" /></button>
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
                                <label>Description:(optional)</label>
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
                    <div data-aos="fade-down-right">
                        <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel="Update"

                            style={customStyles}>
                            <label>Description:(optional)</label>
                            <textarea rows="4" cols="50" className="form-control"
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
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <button className="btn btns" onClick={() => { this.show() }}>+ Add Additonal</button>
                        </div>
                    </div>
                    : null}

            </div>
        )
    }

}