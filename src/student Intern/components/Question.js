import React from 'react';
import '../css/question.css';
import alert from '../images/alert.png'
export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [{
                question: "Why we hire you?"
            },
            {
                question: "Which role of responsibility we require?"
            }],
            textarea: []
        }

    }
    handle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

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
                            <textarea rows="10" cols="10" name={item.question}
                                required className="form-control" placeholder="Enter your answer (250 words)"
                                onChange={(e) => {
                                    this.setState({
                                        [e.target.name]: e.target.value
                                    })
                                    this.state.textarea.push([e.target.name]);
                                    console.log(this.state.textarea[0].name)
                                }}
                            ></textarea>
                            <br />
                            <div className="alert " style={{color:"red"}}>
                                <img src={alert} alt="alert" height="20"/>
                                &nbsp;&nbsp;<strong>This is required field.</strong> 
                            </div>
                            <br /><br /><br />
                        </div>)}
                </div>

            </div>
        )
    }
}