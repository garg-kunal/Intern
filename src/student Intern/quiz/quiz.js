import React from 'react'
import msg from '../../assets/images/Group 251.png'
import './top.css'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Top from './top'
import Navbar from './navbarQuiz'
import axios from '../../setup'
// import Score from '../components/Screen3';

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      isTabActive: '',
      skills: [],
      timer: 30,
      screenFull: false,
      answer: [],
      option: '',
      c: '',
      questions: [],
      correct_answers: [],
      i: 0,
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      showBtn: true,
      score: ''
    }

    window.addEventListener('visibilitychange', function () {
      var d = document.hidden ? 'true' : 'false'
      if (d === 'false') {
        localStorage.removeItem('merge_test')
        window.location.href = '/nav/skillset'
      }
    })
    // this.checkScreen();
  }

  handle () {
    useFullScreenHandle()
  }

  answer (e) {
    this.setState(
      {
        option: e.target.value
      },
      () => {
        // console.log(this.state.option)
      }
    )
  }

  checkScreen () {}

  nextQuestion () {
    this.state.answer.push(this.state.option)
    if (this.state.i === this.state.questions.length) {
      const data = {
        answers: this.state.correct_answers,
        user_answers: this.state.answer,
        skills: this.state.skills
      }
      const headers = {
        headers: {
          Authorization: 'Token ' + localStorage.getItem('merge_jwt'),
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      axios
        .post('/api/accounts/assessment', data, headers)
        .then(res => {
          this.setState(
            {
              i: 0
            },
            () => {
              // console.log(res);
              this.setState(
                {
                  score: res.data.result
                },
                () => {
                  localStorage.removeItem('merge_test')
                  this.props.history.push({
                    pathname: '/nav/test_score',
                    score: this.state.score
                  })
                }
              )
            }
          )
        })
        .catch(err => console.log(err))
    } else {
      var radioButton = document.getElementById('a')
      radioButton.checked = false
      var radioButton = document.getElementById('b')
      radioButton.checked = false
      var radioButton = document.getElementById('c')
      radioButton.checked = false
      var radioButton = document.getElementById('d')
      radioButton.checked = false
      this.setState({
        question: this.state.questions[this.state.i].question,
        optionA: this.state.questions[this.state.i].a,
        optionB: this.state.questions[this.state.i].b,
        optionC: this.state.questions[this.state.i].c,
        optionD: this.state.questions[this.state.i].d,
        timer: 30,
        i: this.state.i + 1,
        option: ''
      })
      clearInterval(this.state.c)
      this.timer()
    }
  }
  full () {
    useFullScreenHandle()
  }

  componentDidMount () {
    // alert(localStorage.getItem("merge_jwt"));
    if (
      localStorage.getItem('merge_jwt') === null ||
      localStorage.getItem('merge_jwt') === undefined
    ) {
      this.props.history.push('/login/student')
    } else if (
      localStorage.getItem('merge_test') === null ||
      localStorage.getItem('merge_jwt') === undefined
    ) {
      this.props.history.push('/nav/skillset')
    } else {
      document
        .querySelector('#QUIZ_APP')
        .requestFullscreen({ navigationUI: 'show' })
        .then(function () {
          // this.checkScreen();
        })
        .catch(function (error) {})

      const headers = {
        headers: {
          Authorization: 'Token ' + localStorage.getItem('merge_jwt'),
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      axios
        .get('/api/accounts/assessment', headers)
        .then(res => {
          this.checkScreen()
          // console.log(res.data)
          this.setState(
            {
              screenFull: true,
              skills: res.data.skills,
              questions: res.data.questions,
              correct_answers: res.data.answers,
              question: res.data.questions[this.state.i].question,
              optionA: res.data.questions[this.state.i].a,
              optionB: res.data.questions[this.state.i].b,
              optionC: res.data.questions[this.state.i].c,
              optionD: res.data.questions[this.state.i].d,
              i: this.state.i + 1
            },
            () => {
              this.timer()
            }
          )
        })
        .catch(err => console.log(err))
    }
  }
  timer () {
    this.state.c = setInterval(() => {
      if (this.state.timer == 0) {
        clearInterval(this.state.c)
        this.nextQuestion()
      } else {
        this.setState({
          timer: this.state.timer - 1
        })
      }
    }, 1000)
  }
  render () {
    if (this.state.screenFull) {
     
      if (
        window.fullScreen ||
        (window.innerWidth == window.screen.width &&
          window.innerHeight == window.screen.height)
      ) {
        // console.log('Full')
      } else {
        localStorage.removeItem('merge_test')
        window.location.href = '/nav/skillset'
      }
    }
    return (
      <div
        className='container-fluid container-fluid-main-quiz'
        id='QUIZ_APP'
        style={{ backgroundColor: 'white' }}
      >
        <Navbar />
        <div className='container mt-4'>
          <div className='row'>
            <div
              className='col-md-4 col-lg-4 col-4 mx-auto text-center quiz-text-main'
              style={{
                color: '#4A00E0',
                fontSize: '22px',
                fontWeight: '900'
              }}
            >
              ALL THE BEST!!!
            </div>
            <div
              className='col-md-4 col-lg-4 col-4  mx-auto text-center quiz-text-main'
              style={{ fontSize: '22px', fontWeight: '900' }}
            >
              Question:
              <b>
                {this.state.i}/{this.state.questions.length}
              </b>
            </div>
            <div
              className='col-md-4 col-lg-4 col-4  mx-auto text-center quiz-text-main'
              style={{ fontSize: '22px', fontWeight: '900' }}
            >
              Timer:
              <b style={{ color: 'red' }}>{this.state.timer}</b>
            </div>
          </div>
        </div>
        <div className='container' style={{ marginTop: '20px' }}>
          <div className='card card-body-quiz'>
            <div class='card-body'>
              <div className='row'>
                &nbsp;&nbsp;&nbsp;
                <img
                  src={msg}
                  className='img-fluid'
                  style={{ height: '35px', width: '35px' }}
                />
                <b style={{ fontSize: '18px' }}>Question {this.state.i}</b>
              </div>
              <div className='row'>
                <b
                  style={{ fontWeight: '500', fontSize: '20px' }}
                  className='quiz-text-question text-left'
                >
                  {this.state.question}
                </b>
              </div>
              <br />
              <div className='row pt-2'>
                <div class='radiobtn-quiz'>
                  <input
                    type='radio'
                    id='a'
                    onClick={e => {
                      this.answer(e)
                    }}
                    name='answer'
                    value='a'
                    unchecked
                  />
                  <label for='a'>{this.state.optionA}</label>
                </div>
              </div>

              <div className='row pt-2'>
                <div class='radiobtn-quiz'>
                  <input
                    type='radio'
                    id='b'
                    unchecked
                    onClick={e => {
                      this.answer(e)
                    }}
                    name='answer'
                    value='b'
                  />
                  <label for='b'>{this.state.optionB}</label>
                </div>
              </div>

              <div className='row pt-2'>
                <div class='radiobtn-quiz'>
                  <input
                    type='radio'
                    id='c'
                    unchecked
                    onClick={e => {
                      this.answer(e)
                    }}
                    name='answer'
                    value='c'
                  />
                  <label for='c'>{this.state.optionC}</label>
                </div>
              </div>

              <div className='row pt-2'>
                <div class='radiobtn-quiz'>
                  <input
                    type='radio'
                    id='d'
                    unchecked
                    onClick={e => {
                      this.answer(e)
                    }}
                    name='answer'
                    value='d'
                  />
                  <label for='d'>{this.state.optionD}</label>
                </div>
              </div>
            </div>
          </div>

          <center>
            <button
              className='btn btn-lg btn-next'
              onClick={() => {
                this.nextQuestion()
              }}
            >
              Next
            </button>
          </center>
          <br />
        </div>
      </div>
    )
  }
}

export default Quiz
