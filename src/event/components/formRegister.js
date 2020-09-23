import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Modal } from 'react-bootstrap'
import axios from '../../setup'


export default function Form () {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phn, setphn] = useState('')
  const [city, setcity] = useState('')
  const [year, setyear] = useState('')
  const [clg, setclg] = useState('')
  const [branch, setbranch] = useState('')
  const [state, setstate] = useState('')
  const [show, setshow] = useState(false)
  const [mobile, setmobile] = useState('')
  const [pro, setpro] = useState(false)
  const [pro1, setpro1] = useState(false)
  const [show1, setshow1] = useState(false)
  const [message, setmessage] = useState('')
  const [otp, setotp] = useState('')
  const [otpshow, setotpshow] = useState(false)
  const [otpMember,setotpMember]=useState(false)

  const handleClose = () => {
    setshow1(false)
  }

  // const handleShow = () => {
  //   setshow1(true)
  // }
  

  const print = e => {
    e.preventDefault()
    setpro(true)

    if (
      name.length === 0 ||
      phn.length === 0 ||
      clg.length === 0 ||
      state.length === 0 ||
      city.length === 0 ||
      email.length === 0 ||
      branch.length === 0 ||
      year.length === 0
    ) {
      setmessage('Fields are required')
      setshow1(true)
      setpro(false)
    }
    else if (!email.includes('@')) {
      setmessage('Email Not Valid')
      setshow1(true)
      setpro(false)
    }  else if (phn.length !== 10) {
      setmessage('Mobile Number Not Valid')
      setshow1(true)
      setpro(false)
    }
    else {
      const data = {
        name: name,
        email: email,
        mobile_number: phn,
        state: state,
        city: city,
        college: clg,
        year: year,
        branch: branch
      }
      axios
        .post('/api/accounts/colloquium/register_account', data)
        .then(res => {
          if (res.data.status === 201) {
              setotpshow(true)
            // var url = '/verify_otp_event/' + phn
            // window.location.href = url
          } else {
            setmessage(res.data.status_message)
            setshow1(true)
            setpro(false)
          }
        })
        .catch(err => {
          setpro(false)

          console.log(err)
        })
    }
  }
  const verifyOtp=(e)=>{
      e.preventDefault();
      if(otp.length===0){
        setmessage("OTP can't be empty");
        setshow1(true)
      }
      else{
        document.getElementById('memberRegister').innerHTML="Verifying.....";
      const data={
          email:email,
          otp:otp
      }
      axios.post('/api/accounts/colloquium/verify_otp',data)
      .then((res)=>{
          console.log(res);
          if(res.data.status===200){
            setmessage("Register Succesfully");
            setshow1(true)
          }
          else{
            document.getElementById('memberRegister').innerHTML="Register";
            setmessage(res.data.status_message);
            setshow1(true)
          }
      })
      .catch((err)=>console.log(err))
    }

  }
  const printMax = e => {
    e.preventDefault();
    if(mobile.length===0 || !mobile.includes('@')){
      setmessage("Email can't empty");
     setshow1(true)
    }
    else{
      setpro1(true);
      const data={
        email:mobile
      }
      axios.post('/api/accounts/colloquium/login',data)
      .then((res)=>{
        console.log(res.data);
        if(res.data.status===200){
          setotpMember(true)
        }
        else{
          setpro1(false);
          setmessage(res.data.status_message);
          setshow1(true);
        }
      })
    }
  }
  const memberOtp=e=>{
    e.preventDefault();
    if(otp.length===0){
      setmessage("OTP can't empty");
     setshow1(true)
    }
    else{
      document.getElementById('member-otp-verify').innerHTML="Verifying....";
      const data={
        email:mobile,
        otp:otp
      }
      axios.post('/api/accounts/colloquium/verify_otp',data)
      .then((res)=>{
        if(res.data.status===200){
          setmessage("Regsitered Succesfully.");
          setshow1(true)

        }else{
          document.getElementById('member-otp-verify').innerHTML="Register";
          setmessage(res.data.status_message);
           setshow1(true)
        }
      })
    }
  }

  return (
    <section className='container form-register-event' id='register'>
      {show ? (
        <div className='row'>
          <div className='col-md-12 col-12'>
            <form className='form-group form-event-inner mx-auto'>
              <h4 className='text-center event-form-heading'>Register</h4>
              <input
                type='email'
                className='form-control event-form-main'
                value={mobile}
                onChange={e => {
                  setmobile(e.target.value);
                  setotpMember(false);
                  setpro1(false);
                }}
                required
                placeholder='Registered Email Id'
              />
              <br />
              {otpMember ? (
                <div>
                  <input
                    type='text'
                    value={otp}
                    onChange={(e)=>{setotp(e.target.value)}}
                    className='form-control event-form-main'
                    maxLength='4'
                    pattern="[0-9]*"
                    required
                    placeholder='OTP'
                  />
                  <br/>
                  <button
                   id="member-otp-verify"
                    className='btn btn-event-register'
                    onClick={e => {
                     memberOtp(e)
                    }}
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className='row mx-auto text-center'>
                  {pro1 ? (
                    <div className='row text-center mx-auto jusitfy-content-center progress-bar-event'>
                      <CircularProgress />
                    </div>
                  ) : (
                    <button
                      className='btn btn-event-register'
                      onClick={e => {
                        printMax(e)
                      }}
                    >
                      Send OTP
                    </button>
                  )}
                </div>
              )}
              <div className='row mx-auto text-center'>
                <p
                  className='text-center merge-link-event'
                  onClick={() => {
                    setshow(!show)
                  }}
                >
                  New Member
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='row'>
          <div className='col-md-12 col-12'>
            <form className='form-group form-event-inner mx-auto'>
              <h4 className='text-center event-form-heading'>Register</h4>

              <input
                type='text'
                autoComplete='off'
                value={name}
                className='form-control event-form-main'
                required
                placeholder='Full Name'
                onChange={e => {
                  setname(e.target.value)
                }}
              />
              <br />
              <input
                type='email'
                autoComplete='off'
                value={email}
                className='form-control event-form-main event-form-main'
                required
                placeholder='Email ID'
                onChange={e => {
                  setemail(e.target.value);
                  setotpshow(false);
                  setpro(false);
                }}
              />
              <br />
              <input
                type='text'
                autoComplete='off'
                value={phn}
                className='form-control event-form-main'
                required
                placeholder='Mobile Number'
                maxLength='10'
                onChange={e => {
                  setphn(e.target.value)
                }}
              />
              <br />
              <div className='row no-gutters'>
                <div className='col-md-6 col-12'>
                  <select
                    className='form-control event-form-main select-event'
                    onChange={e => {
                      setstate(e.target.value)
                    }}
                    value={state}
                    style={{ padding: '3px' }}
                  >
                    <option className='option-company-main-event' value='State'>
                      State
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Andaman and Nicobar Islands'
                    >
                      Andaman and Nicobar Islands
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Andhra Pradesh'
                    >
                      Andhra Pradesh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Arunachal Pradesh'
                    >
                      Arunachal Pradesh
                    </option>
                    <option className='option-company-main-event' value='Assam'>
                      Assam
                    </option>
                    <option className='option-company-main-event' value='Bihar'>
                      Bihar
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Chandigarh'
                    >
                      Chandigarh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Chhattisgarh'
                    >
                      Chhattisgarh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Dadra and Nagar Haveli'
                    >
                      Dadra and Nagar Haveli
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Daman and Diu'
                    >
                      Daman and Diu
                    </option>
                    <option className='option-company-main-event' value='Delhi'>
                      Delhi
                    </option>
                    <option className='option-company-main-event' value='Goa'>
                      Goa
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Gujarat'
                    >
                      Gujarat
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Haryana'
                    >
                      Haryana
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Himachal Pradesh'
                    >
                      Himachal Pradesh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Jammu and Kashmir'
                    >
                      Jammu and Kashmir
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Jharkhand'
                    >
                      Jharkhand
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Karnataka'
                    >
                      Karnataka
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Kerala'
                    >
                      Kerala
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Lakshadweep'
                    >
                      Lakshadweep
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Madhya Pradesh'
                    >
                      Madhya Pradesh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Maharashtra'
                    >
                      Maharashtra
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Manipur'
                    >
                      Manipur
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Meghalaya'
                    >
                      Meghalaya
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Mizoram'
                    >
                      Mizoram
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Nagaland'
                    >
                      Nagaland
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Orissa'
                    >
                      Orissa
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Pondicherry'
                    >
                      Pondicherry
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Punjab'
                    >
                      Punjab
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Rajasthan'
                    >
                      Rajasthan
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Sikkim'
                    >
                      Sikkim
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Tamil Nadu'
                    >
                      Tamil Nadu
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Tripura'
                    >
                      Tripura
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Uttaranchal'
                    >
                      Uttaranchal
                    </option>
                    <option
                      className='option-company-main-event'
                      value='Uttar Pradesh'
                    >
                      Uttar Pradesh
                    </option>
                    <option
                      className='option-company-main-event'
                      value='West Bengal'
                    >
                      West Bengal
                    </option>
                  </select>
                </div>
                <div className='col-md-6 col-12'>
                  <input
                    type='text'
                    autoComplete='off'
                    value={city}
                    className='form-control event-form-main'
                    required
                    placeholder='Your City'
                    onChange={e => {
                      setcity(e.target.value)
                    }}
                  />
                </div>
              </div>
              <br />

              <input
                type='text'
                autoComplete='off'
                value={clg}
                className='form-control event-form-main'
                required
                placeholder='College Name'
                onChange={e => {
                  setclg(e.target.value)
                }}
              />
              <br />
              <div className='row no-gutters'>
                <div className='col-md-6 col-12'>
                  <select
                    value={year}
                    className='form-control select-event event-form-main '
                    required
                    placeholder='Year'
                    onChange={e => {
                      setyear(e.target.value)
                    }}
                  >
                    <option value='0'>Year of Study</option>
                    <option value='1'>1st Year</option>
                    <option value='2'>2nd Year</option>
                    <option value='3'>3rd Year</option>
                    <option value='4'>4th Year</option>
                  </select>
                </div>
                <div className='col-md-6 col-12'>
                  <input
                    type='text'
                    autoComplete='off'
                    value={branch}
                    className='form-control event-form-main'
                    required
                    placeholder='Branch'
                    onChange={e => {
                      setbranch(e.target.value)
                    }}
                  />
                </div>
              </div>

              <br />
              {otpshow ? (
                <div>
                  <input
                    type='text'
                    value={otp}
                    onChange={(e)=>{setotp(e.target.value)}}
                    className='form-control event-form-main'
                    maxLength='4'
                    pattern="[0-9]*"
                    required
                    placeholder='OTP'
                  />
                  <br/>
                  
                  <button
                  id="memberRegister"
                    className='btn btn-event-register'
                    onClick={e => {
                     verifyOtp(e)
                    }}
                  >
                    Register
                  </button>
                </div>
              ) : 
                <div className='row mx-auto text-center'>
                  {pro ? (
                    <div className='row text-center mx-auto jusitfy-content-center progress-bar-event'>
                      <CircularProgress />
                    </div>
                  ) : (
                    <button
                      className='btn btn-event-register'
                      onClick={e => {
                        print(e)
                      }}
                    >
                       Send OTP
                    </button>
                  )}
                </div>
              }
              <div className='row mx-auto text-center'>
                <p
                  className='text-center merge-link-event'
                  onClick={() => {
                    setshow(!show)
                  }}
                >
                  Already A Merge Member
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      <Modal
        show={show1}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </section>
  )
}
