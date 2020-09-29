import React from 'react';

export default class ListOfQuestions extends React.Component {
    state = {
      questions: ['hello']
    }
  
    handleText = i => e => {
      let questions = [...this.state.questions]
      questions[i] = e.target.value
      this.setState({
        questions
      })
    }
  
    handleDelete = i => e => {
      e.preventDefault()
      let questions = [
        ...this.state.questions.slice(0, i),
        ...this.state.questions.slice(i + 1)
      ]
      this.setState({
        questions
      })
    }
  
    addQuestion = e => {
      e.preventDefault()
      let questions = this.state.questions.concat([''])
      this.setState({
        questions
      })
    }
  
    render() {
        console.log(this.state.questions);
      return (
        <section>
          {this.state.questions.map((question, index) => (
            <span key={index}>
              <input
              className="form-control"
                type="text"
                onChange={this.handleText(index)}
                value={question}
              />
              <button onClick={this.handleDelete(index)}>X</button>
            </span>
          ))}
          <button onClick={this.addQuestion}>Add New Question</button>
          <button className="btn " onClick={()=>{console.log(this.state.questions)}}>Print</button>
        </section>
      )
    }
  }