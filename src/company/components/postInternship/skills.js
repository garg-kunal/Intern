import React, { useState } from 'react'

import Front from './FrontSkills'
import Back from './backSkills'
import Ui from './UISkills'
import Full from './FullSkills'

export default function Skill (props) {
  const [show, setShow] = useState(true)
  const [drop, setdrop] = useState(<Front />)
  const [otherSkills,setSkils]=useState([]);

  const getValue=(e)=>{
    setSkils(e);
    props.methodFromParent("otherSkills", e);
  }

  const Shuffle = v => {

    if (v === '1') {
      setdrop(<Front props={otherSkills} onChangeValue={(e)=>{getValue(e)}} />)
      setShow(false)
    } else if (v === '2') {
      setdrop(<Back props={otherSkills} onChangeValue={(e)=>{getValue(e)}} />)
      setShow(false)
    } else if (v === '3') {
      setdrop(<Full props={otherSkills} onChangeValue={(e)=>{getValue(e)}} />)
      setShow(false)
    } else if (v === '4') {
      setdrop(<Ui  props={otherSkills} onChangeValue={(e)=>{getValue(e)}} />)
      setShow(false)
    }
   
  }
 


  return (
    <section className='container-fluid'>
      {show ? (
        <div className='row mx-auto '>
          <div className='col-md-3 col-6 '>
            <button
              className='mx-auto  btn select-skill-postIntern'
              onClick={() => {
                Shuffle('1')
              }}
            >
              Frontend
            </button>
          </div>
          <div className='col-md-3 col-6 '>
            <button
              className='mx-auto  btn select-skill-postIntern '
              onClick={() => {
                Shuffle('2')
              }}
            >
              Backend
            </button>
          </div>
          <div className='col-md-3 col-6 '>
            <button
              className='mx-auto   btn select-skill-postIntern '
              onClick={() => {
                Shuffle('3')
              }}
            >
              Full Stack
            </button>
          </div>
          <div className='col-md-3 col-6 '>
            <button
              className='mx-auto   btn select-skill-postIntern '
              onClick={() => {
                Shuffle('4')
              }}
            >
              UI/UX
            </button>
          </div>
        </div>
      ) : (
        <div className=''>
          {drop}
          <br />{' '}
          <button
            className='btn btn-change-skillset'
            onClick={() => {
              setShow(true)
            }}
          >
            Change SkillSet
          </button>
        </div>
      )}
      {/* <button onClick={()=>{ console.log(otherSkills);}}>Print</button> */}
    </section>
  )
}
