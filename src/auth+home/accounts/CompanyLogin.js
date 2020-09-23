import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Welcome from '../Welcome'
import { Modal } from 'react-bootstrap'
import '../../assets/css/student_form.css'
import axios from '../../setup'
import login from '../../assets/images/draw.png'
export class CompanyLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile_number: '',
      company_type: '',
      messages: [],
      show: false
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
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

  handleTypeChange (event) {
    this.setState({ company_type: event.target.value }, () => {
      // console.log(this.state);
    })
  }

  handleSubmit (event) {
    const data = {
      email: this.state.email
    }
    this.setState({
      messages: []
    })
    axios
      .post('/api/accounts/company/login', data)
      .then(res => {
        if (res.data.status === 200)
          this.props.history.push('/verify/' + this.state.email)
        else if (res.data.status !== 200)
          this.state.messages.push(res.data.status_message.message)
        this.setState({
          show: true
        })
      })
      .catch(err => {
        console.log(err)
      })
    event.preventDefault()
  }
  componentDidMount () {
    if (localStorage.getItem('merge_jwt_c')) {
      this.props.history.push('/company/dashboard')
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
              <ul className='navbar-nav'>
                <li className='nav-item px-sm-3 px-xs-2 ml-0'>
                  <h3
                    className='font-weight-bolder sign-up-heading-main'
                    style={{
                      color: '#4A00E0'
                    }}
                  >
                    Sign In
                  </h3>
                </li>
              </ul>
              <ul className='navbar-nav login-bar  ml-auto'>
                <li className='nav-item px-3 font-weight-bolder'>
                  <Link to='/login/student' style={{ color: 'black' }}>
                    Student
                  </Link>
                </li>
                <li
                  className='nav-item px-3 font-weight-bolder'
                  style={{
                    color: 'black',
                    borderBottom: 'solid 2px #4A00E0'
                  }}
                >
                  Company
                </li>
              </ul>
            </nav>
            <div className='row no-gutters mt-1'>
              <img
                src={login}
                className='img-fluid login-img-main-home mx-auto text-center'
              />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className='ml-md-3'>
                <div className='form-group form-content  mt-md-3'>
                  <input
                    type='email'
                    name='email'
                    style={{
                      borderRadius: '0',
                      color: 'black',
                      fontWeight: '300',
                      border: '1px solid lightgrey'
                    }}
                    className='form-control'
                    placeholder='Company E-mail ID'
                    maxLength='254'
                    required
                    id='id_email'
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </div>
                <div
                  className='mx-auto text-center'
                  style={{ marginTop: '-20px' }}
                >
                  New User?
                  <NavLink
                    style={{ color: '#4A00E0' }}
                    to='/create_account/company'
                  >
                    &nbsp;&nbsp; Register.
                  </NavLink>
                </div>
                <div className='text-center mx-auto'>
                  <button
                    type='submit'
                    style={{
                      backgroundColor: '#4A00E0',
                      color: 'white',
                      borderRadius: '30px',
                      marginTop: '10px'
                    }}
                    className='btn btn-lg  col-5 '
                  >
                    Sign In
                  </button>
                </div>
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

export default CompanyLogin
