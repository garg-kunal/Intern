import React from 'react';
import '../assets/css/question.css';
import alert from '../assets/images/alert.png'
export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [{
                question: "Why we hire you?"
            },
            {
                question: "Which role of responsibility we require?"
            },
            {
                question: "Which role of responsibility we give you?"
            }
        ],
            answers:[]
        }

    }
    componentDidMount(){
        var a="";
        for(var i=0;i<this.state.questions.length;i++){
           this.state.answers.push(a);
        }
    }
    submit(){
        console.log(this.state.answers)
    }
    handle(e) {
        var val=e.target.value;
        this.state.answers.splice(e.target.name, 1, val); 
    }
    render() {
        return (
            <div className="container-fluid containerFluid">
                <br />

                <div className="container containerInner"><br />
                    <div className="row"><p className="mx-auto display-5">Evalaute Quuestions</p></div>
                    {this.state.questions.map((item, key) =>
                        <div>
                            &nbsp;&nbsp; <b>{key + 1}. {item.question}</b><br /><br />
                            <textarea rows="10" cols="10" name={key} value={this.state.answers[key]}
                                required className="form-control" placeholder="Enter your answer (250 words)"
                                onChange={(e) => { this.handle(e) }}>
                            </textarea>
                            <br />
                            <div className="alert " style={{ color: "red" }}>
                                <img src={alert} alt="alert" height="20" />
                                &nbsp;&nbsp;<strong>This is required field.</strong>
                            </div>
                            <br /><br /><br />
                        </div>)}
                    <div className="row mx-auto">
                        <button className="btn btn-primary mx-auto" onClick={() => { this.submit() }}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}