import React from 'react';
import './form.css';
import remove from '../../assets/images/delete.png';
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
        borderRadius:'20px',
        transform: 'translate(-50%, -50%)',
        boxShadow:'0 0 4px 8px lightgrey'
    }
};

export default class Portfolio extends React.Component {
    constructor() {
        super();
        AOS.init();

        this.state = {
            link: "",
            editShow: false,
            dataShow: true,
            addSkill: false,
            buttonShow: true,
            linkOut: [],
            showModal: false,
            updateid: ""
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
            link: "",
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

    remove(key) {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        //student/delete_portfolio
        if (window.confirm(" Are You sure Delete? ")) {
            axios.delete('/api/accounts/student/delete_portfolio/' + key,headers)
                .then((res) => this.print())
                .catch((err) => console.log(err));


        } else {
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
        const data = {
            link: this.state.link
        }
        axios.post('/api/accounts/student/portfolio', data,headers)
            .then((res) => this.print())
            .catch((err) => console.log(err));
        this.setState({
            addSkill: false,
            buttonShow: true,
            link: ""
        })
    }
    print() {
        //6395642409
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get('/api/accounts/student/get_portfolio',headers)
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    linkOut: res.data.data
                })
            })
            .catch((err) => console.log(err));
    }

    // Modal Show functions 
    // 1
    edit() {
        const data={
            id:this.state.updateid,
            link:this.state.link
        }
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        axios.post('/api/accounts/student/update_portfolio', data,headers)
            .then((res) => {
                console.log(res.data)
                this.print();
                this.setState({
                    editShow: false,
                    dataShow: true,
                    showModal: false,
                    link: ""
                })
            })
            .catch((err) => console.log(err));
        

    }
    // 2
    editable(key) {
        this.setState({
            editShow: true,
            dataShow: false,
            showModal: true,
            link: this.state.linkOut[key].link,
            updateid: this.state.linkOut[key].id
        })
        // alert(this.state.linkOut[key].id)

    }
    render() {
        return (
            <div>
                {this.state.linkOut.map((item, key) =>
                    <div className="card skill-card border-0" style={{ paddingBottom: "15px" }}>

                        {this.state.dataShow ?
                            <div className="row no-gutters student-10-data" >

                                <div className="col-md-8 col-9  student-data-form">
                                  <b>{key}: &nbsp;&nbsp;</b> {item.link}
                                </div>
                                <div className="col-md-3 col-3" style={{ padding: "10px",paddingTop:"0" }}>
                                    <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.editable(key) }} ><img src={edit}
                                     
                                            height="30" alt="edit" className="img-fluid  btn-edit-student"  /></button>

                          
                            <button className="btn border-0 btn-edit-student-main" style={{ backgroundColor: "white" }}
                                        onClick={() => { this.remove(item.id) }} ><img src={remove}
                                       
                                            height="30" alt="edit"  className="img-fluid  btn-delete-student"  /></button>
                                </div>

                            </div> : null}
                        {this.state.editShow ?
                            <ReactModal
                                isOpen={this.state.showModal}
                                contentLabel="Update"
                                style={customStyles}

                            >
                                <div style={{ fontSize: "20px" }}>
                                    <input className="form-control"
                                        value={this.state.link}
                                        onChange={(e) => { this.setState({ link: e.target.value }) }}
                                    />
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
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Update"
                        data-aos="flip-right"
                        style={customStyles}>
                        <input className="form-control"
                            required placeholder="Project Link,Github link,etc"
                            value={this.state.link}
                            onChange={(e) => { this.setState({ link: e.target.value }) }}
                        />
                        <br />
                        <div style={{ padding: "10px", float: "right", display: "flex" }}>
                            <button className="btn btnedit" style={{ borderRadius: "15px" }}
                                onClick={(e) => { this.submit(e) }} align="right">Add</button>
                            &nbsp;&nbsp;
                            <button className="btn btnedit"
                                onClick={() => { this.handleCloseModal() }}>Cancel</button>
                        </div>
                    </ReactModal> : null}
                {this.state.buttonShow ?
                    <div className="row" >
                       
                            <button className="btn btns" onClick={() => { this.show() }}>+ Add Links</button>
                        </div>
                  
                    : null}

            </div>
        )
    }

}