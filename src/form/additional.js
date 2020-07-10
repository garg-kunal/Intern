import React from 'react';
import './form.css';
import remove from './images/delete.png'
import edit from './images/edit.png';
import ReactModal, { setAppElement } from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            textOut: [],
            showModal: false

        }

    }

    componentWillMount() {
        ReactModal.setAppElement('body');
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

    }

    // Add Skill
    submit() {

        var data = {
            additonal: this.state.textArea
        }
        this.setState({
            addSkill: false,
            buttonShow: true,
            textArea: ""
        })
        this.state.textOut.push(data);
    }

    // Modal Show functions 
    // 1
    edit() {

        var data = {
            additonal: this.state.textArea

        }

        this.setState({
            editShow: false,
            dataShow: true,
            showModal: false,
            textArea: ""
        })
        this.state.skillsOut.push(data);
        console.log(this.state.textOut);

    }
    // 2
    editable(skill) {

        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            textArea: skill

        })

    }
    render() {
        return (
            <div>
                <label className="labels"> ADDITIONAL <br />INFORMATION: </label>

                {this.state.textOut.map((item, key) =>
                    <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>
                        {this.state.dataShow ?
                            <div className="row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-6" style={{ fontSize: "20px" }}>
                                    {item}
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
                                data-aos="fade-down"

                            >

                                <div style={{ fontSize: "20px" }}>
                                <label>Description:(optional)</label>
                                    <textarea rows="4" cols="50" className="form-control"
                                        value={this.state.textArea}
                                        onChange={(e) => { this.setState({ textArea: e.target.value }) }}
                                    >Additonal Information</textarea>
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
                )}
                {this.state.addSkill ?
                    <div data-aos="fade-down-right">
                        <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel="Update"

                            style={customStyles}>
                            <label>Description:(optional)</label>
                            <textarea rows="4" cols="50" className="form-control"
                                value={this.state.textArea}
                                onChange={(e) => { this.setState({ textArea: e.target.value }) }}
                            >Additonal Information</textarea>
                            <br />
                            <div style={{ padding: "10px", float: "right", display: "flex" }}>
                                <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                    onClick={() => { this.submit() }} align="right">Add</button>
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