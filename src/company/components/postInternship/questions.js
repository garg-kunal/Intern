import React from 'react'

class Questions extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: [''],
      questionNo: 0
    }
    // this.InputField = this.InputField.bind(this)
    // this.addInputField = this.addInputField.bind(this)
    // this.addQuestion = this.addQuestion.bind(this)
  }

  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    this.setState(
      {
        questions
      },
      () => {
        this.props.methodFromParent('questions', this.state.questions)
      }
    )
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0, i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState(
      {
        questions
      },
      () => {
        this.props.methodFromParent('questions', this.state.questions)
      }
    )
  }

  addQuestion = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([''])
    this.setState({
      questions
    })
  }

  //   InputField () {
  //     return (
  //       <div className='alert alert-success alert-dismissible'>
  //         this.sis alert
  //         {/* <input type="text" name="extraQ" placeholder="Enter the question here..." className="form-control" /> */}
  //         <button type='button' className='close' data-dismiss='alert'>
  //           &times;
  //         </button>
  //       </div>
  //     )
  //   }

  //   addQuestion (e) {
  //     var qno = e.target.name[e.target.name.length - 1]
  //     var question = e.target.value
  //     var allQuestions = this.state.questions
  //     allQuestions[qno] = question
  //     this.setState(
  //       prevState => ({
  //         questions: allQuestions
  //       }),
  //       () => {
  //         this.props.methodFromParent('questions', this.state.questions)
  //       }
  //     )
  //   }
  //   addInputField () {
  //     if (window.confirm('Are you sure To add question..')) {
  //       var z = document.createElement('input')
  //       z.name = 'extraQ' + this.state.questionNo
  //       z.placeholder = 'Enter text...'
  //       z.className = 'extra city'
  //       z.addEventListener('change', this.addQuestion)
  //       var parent = document.getElementsByClassName('questions')[0]
  //       parent.insertBefore(z, parent.children[parent.children.length - 1])
  //       this.setState(prevState => ({
  //         questionNo: prevState.questionNo + 1
  //       }))
  //     } else {
  //     }
  //   }
  render () {
    return (
      <div class='questions container-fluid'>
        <p>
          Question 1 will be asked to every applicant by default. You can ask
          more questions as well.
        </p>
        <p className='city' style={{ border: 'none' }}>
          <b>Question 1.</b> Why we should hire you?
        </p>
        {this.state.questions.map((question, index) => (
          <span className='row mx-auto' key={index}>
            <div className='col-md-11 col-12'>
              <input
                className='form-control extra city'
                type='text'
                placeholder='Your Question'
                onChange={this.handleText(index)}
                value={question}
              />
            </div>
            <div className='col-md-1 col-2 pt-2'>
              <button
                className='btn btn-danger '
                onClick={this.handleDelete(index)}
              >
                X
              </button>
            </div>
            
          </span>
        ))}
        {/* <button onClick={()=>{console.log(this.state.questions)}}>Add New Question</button> */}

        <button className='addMore mb-2' onClick={this.addQuestion}>
          + Add questions
        </button>
      </div>
    )
  }
}

export default Questions
