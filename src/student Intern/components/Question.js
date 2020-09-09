import React from 'react';
import '../../assets/css/question.css';
import alert from '../../assets/images/alert.png';
import axios from '../../setup';
import { Modal } from 'react-bootstrap';

export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            answers: [],
            check: "",
            show: false,
            messages: []
        }

    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

            this.props.history.push('/login/student');
        }
        else {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get('/api/accounts/student/view_questions/' + this.props.match.params.id, headers)
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        questions: res.data.data
                    }, () => {

                    })
                })
                .catch((err) => console.log(err))
            var a = "";
            for (var i = 0; i < this.state.questions.length; i++) {
                this.state.answers.push(a);
            }

        }
    }
    submit() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const data = {
            id: this.props.match.params.id,
            answers: this.state.answers,
            questions: this.state.questions
        }
        axios.post('./api/accounts/student/answer_questions', data, headers)
            .then((res) => {
                this.setState({
                    messages: []
                })
                if (res.data.status === 200)
                    this.props.history.push('/student/resume_form/true');
                else if (res.data.status !== 200) {
                    this.state.messages.push(res.data.status_message.message);
                    this.setState({
                        show: true
                    })
                }
                console.log(res.data)
            })
            .catch((err) => console.log(err));
        console.log(this.state.answers)
    }
    handle(e) {
        var val = e.target.value;
        this.state.answers.splice(e.target.name, 1, val);
    }
    render() {
        return (
            <div className="container-fluid containerFluid" style={{marginTop:"60px"}}>
                <br />

                <div className="container containerInner mb-4"><br />
                    <div className="row"><p className="mx-auto display-5">Evalaute Questions</p></div>
                    {this.state.questions.map((item, key) =>
                        <div>
                            &nbsp;&nbsp; <b style={{fontSize:"18px"}}>{key + 1}. {item}</b><br /><br />
                            <textarea rows="4" cols="10" name={key} value={this.state.answers[key]}
                                required className="form-control" style={{borderRadius:"10px"}} placeholder="Enter your answer (150 words)"
                                onChange={(e) => { this.handle(e) }}>
                            </textarea>
                           
                            <div className="alert " style={{ color: "red" }}>
                                <img src={alert} alt="alert" style={{ height: "20px", width: "20px" }} />
                                &nbsp;&nbsp;<strong>This is required field.</strong>
                            </div>
                            <br /><br /><br />
                        </div>)}
                    <div className="row mx-auto">
                        <button className="btn mb-3 btn-primary mx-auto" onClick={() => { this.submit() }}>Submit</button>
                    </div>
                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton />
                        <Modal.Body>
                            {this.state.messages}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}