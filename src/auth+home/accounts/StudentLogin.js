import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import cookie from 'react-cookies'
import Welcome from '../Welcome'
import { Modal } from 'react-bootstrap'
import '../../assets/css/student_form.css'
import axios from '../../setup'
import login from '../../assets/images/draw.png'
export class StudentLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile_number: '',
      city: '',
      messages: [],
      show: false
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value }, () => {
      // console.log(this.state);
    })
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value }, () => {
      // console.log(this.state);
    })
  }

  handleNumberChange (event) {
    this.setState({ mobile_number: event.target.value }, () => {
      // console.log(this.state);
    })
  }

  handleSubmit (event) {
    if (!this.state.mobile_number.includes('@')) {
      this.state.messages.push('Enter Valid Email')
      this.setState({
        show: true
      })
    } else {
      const data = {
        email: this.state.mobile_number
      }
      this.setState({
        messages: []
      })
      axios
        .post('/api/accounts/student/login', data)
        .then(res => {
          // console.log(res.data)
          if (res.data.status === 200)
            this.props.history.push(
              '/login/verify_otp/' + this.state.mobile_number + '/login'
            )
          else if (res.data.status !== 200)
            this.state.messages.push(res.data.status_message.message)
          this.setState({
            show: true
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    event.preventDefault()
  }

  componentDidMount () {
    if (localStorage.getItem('merge_jwt')) {
      this.props.history.push('/nav/skillset')
    }
  }

  render () {
    return (
      <div className='container-fluid' style={{ padding: '0' }}>
        <div className='row no-gutters'>
          <div className='col-md-6 col-lg-6 text-white violet_sq_bg'>
            <Welcome />
          </div>
          <div
            className='col-md-6 col-sm-12 mt-md-5 mt-3'
            style={{ padding: '10px' }}
          >
            <nav className='navbar navbar-expand-lg'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item px-sm-3 px-xs-2 ml-0'>
                  <h3
                    className='font-weight-bolder  sign-up-heading-main'
                    style={{
                      color: '#4A00E0'
                    }}
                  >
                    Sign In
                  </h3>
                </li>
              </ul>
              <ul className='navbar-nav login-bar ml-auto'>
                <li
                  className='nav-item px-2  font-weight-bolder'
                  style={{
                    color: 'black',
                    borderBottom: 'solid 2px #4A00E0'
                  }}
                >
                  Student
                </li>
                <li className='nav-item  px-2 font-weight-bolder'>
                  <Link to='/login/company' style={{ color: 'black' }}>
                    Company
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='row no-gutters'>
              <img
                src={login}
                className='img-fluid mx-auto text-center login-img-main-home'
              />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className='ml-md-1'>
                <div className='form-group form-content'>
                  <input
                    type='email'
                    name='mobile_number'
                    className='form-control'
                    placeholder='Registered Email Id'
                    required
                    style={{
                      borderRadius: '0',
                      color: 'black',
                      fontWeight: '200',
                      border: '1px solid lightgrey'
                    }}
                    id='id_mobile_number'
                    onChange={this.handleNumberChange}
                    value={this.state.mobile_number}
                  />
                </div>
              </div>

              <div
                className='mx-auto text-center'
                style={{ marginTop: '-20px' }}
              >
                New User?
                <NavLink
                  style={{ color: '#4A00E0' }}
                  to='/create_account/student'
                >
                  &nbsp;&nbsp; Register.
                </NavLink>
              </div>
              <div className='mx-auto text-center' >
                <button
                  type='submit'
                  style={{
                    backgroundColor: '#4A00E0',
                    color: 'white',
                    borderRadius: '30px',
                    marginTop: '10px'
                  }}
                  className='btn btn-lg col-5 '
                >
                  Sign In
                </button>
              </div>
            </form>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              backdrop='static'
              keyboard={false}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <ul style={{ listStyleType: 'none' }}>
                  {Object.keys(this.state.messages).map(
                    (message_key, index) => (
                      <li key={index}>{this.state.messages[message_key]}</li>
                    )
                  )}
                </ul>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentLogin
