import React from 'react';
import msg from '../form/images/Group 251.png';
import './top.css';
import Top from './top';
import { history, Redirect, withRouter } from 'react-router-dom'
import Navbar from './navbarQuiz';
import axios from '../../setup';
class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            isTabActive: "",
            timer: 30,
            answer: [],
            option: "",
            c: "",
            questions: [],
            correct_answers: [],
            i: 0,
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: ""

        }


    }


    answer(e) {
        this.setState({
            option: e.target.value
        }, () => {
            console.log(this.state.option)
        })


    }

    nextQuestion() {
        var radioButton = document.getElementById("a");
        radioButton.checked = false;
        var radioButton = document.getElementById("b");
        radioButton.checked = false;
        var radioButton = document.getElementById("c");
        radioButton.checked = false;
        var radioButton = document.getElementById("d");
        radioButton.checked = false;
        this.state.answer.push(this.state.option);
        if (this.state.i === this.state.questions.length) {
            const data = {
                answers: this.state.correct_answers,
                user_answers: this.state.answer
            }
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/accounts/assessment', data, headers)
                .then((res) => {
                    this.setState({
                        i: this.state.i + 10
                    }, () => {
                        console.log(res.data)
                        this.props.history.push("test_score")
                    });



                })
                .catch((err) => console.log(err));
        }
        else {
            this.setState({
                question: this.state.questions[this.state.i].question,
                optionA: this.state.questions[this.state.i].a,
                optionB: this.state.questions[this.state.i].b,
                optionC: this.state.questions[this.state.i].c,
                optionD: this.state.questions[this.state.i].d,
                timer: 30,
                i: this.state.i + 1,
                option: "",
            })
            clearInterval(this.state.c);
            this.timer();
        }

    }

    componentDidMount() {

        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get('/api/accounts/assessment', headers)
            .then((res) => {
                this.setState({
                    questions: res.data.questions,
                    correct_answers: res.data.answers,
                    question: res.data.questions[this.state.i].question,
                    optionA: res.data.questions[this.state.i].a,
                    optionB: res.data.questions[this.state.i].b,
                    optionC: res.data.questions[this.state.i].c,
                    optionD: res.data.questions[this.state.i].d,
                    i: this.state.i + 1
                }, () => {

                    this.timer();
                })

            })
            .catch((err) => console.log(err));

    }
    timer() {
        this.state.c = setInterval(() => {
            if (this.state.timer == 0) {
                clearInterval(this.state.c);
                this.nextQuestion();
            } else {
                this.setState({
                    timer: this.state.timer - 1
                })
            }
        }, 1000)
    }
    render() {
        // document.addEventListener("visibilitychange", function () {
        //     var d = document.hidden ? "true" : "false";
        //     if (d == "false") {
        //         this.props.history.push("/test_skills");
        //     }
        // });
        return (
            <div className="container-fluid container-fluid-main-quiz">
                <Navbar />
                <p className="display-5" style={{ padding: "20px", color: "black" }}>
                    <strong>Your Multiple Choice Questions Are Here:</strong></p>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-4 col-6" style={{ color: "#4A00E0", fontWeight: "900" }}>ALL THE BEST!!!</div>
                        <div className="col-md-4 col-lg-4 ol-6">Question:<b>{this.state.i}/{this.state.questions.length}</b></div>
                        <div className="col-md-4 col-lg-4 col-6" >Timer:
                          <b>{this.state.timer}</b>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "20px" }}>
                    <div className="card card-body-quiz">
                        <div class="card-body">
                            <div className="row">&nbsp;&nbsp;&nbsp;
                                <img src={msg} className="img-fluid" style={{ height: "35px", width: "35px" }} />
                                <b style={{ fontSize: "18px" }}>Question {this.state.i}</b></div>
                            <div className="row">
                                <b style={{ fontWeight: "500", fontSize: "20px" }}>
                                    &nbsp;&nbsp;&nbsp;&nbsp; {this.state.question}
                                </b></div><br />
                            <div className="row">

                                <div class="radiobtn-quiz">
                                    <input type="radio" id="a"
                                        onClick={(e) => { this.answer(e) }}
                                        name="answer" value="a" unchecked />
                                    <label for="a">{this.state.optionA}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div class="radiobtn-quiz">
                                    <input type="radio" id="b" unchecked
                                        onClick={(e) => { this.answer(e) }}
                                        name="answer" value="b" />
                                    <label for="b">{this.state.optionB}</label>
                                </div>
                            </div>



                            <div className="row">

                                <div class="radiobtn-quiz">
                                    <input type="radio" id="c" unchecked
                                        onClick={(e) => { this.answer(e) }}
                                        name="answer" value="c" />
                                    <label for="c">{this.state.optionC}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div class="radiobtn-quiz">
                                    <input type="radio" id="d" unchecked
                                        onClick={(e) => { this.answer(e) }}
                                        name="answer" value="d" />
                                    <label for="d">{this.state.optionD}</label>
                                </div>


                            </div>

                        </div>

                    </div>
                    <center>
                        <button className="btn btn-lg btn-next"
                            onClick={() => { this.nextQuestion() }}
                        >Next</button>
                    </center>
                </div>
            </div >

        )
    }
}

export default (Quiz);