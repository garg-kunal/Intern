import React from 'react'

class Responsibility extends React.Component {
  constructor () {
    super()
    this.state = {
      responsibility: ''
    }
    this.addResp = this.addResp.bind(this)
  }
  addResp (e) {
    e.persist()
    this.setState(
      prevState => ({
        responsibility: e.target.value
      }),
      () => {
        this.props.methodFromParent('responsibility', this.state.responsibility)
      }
    )
  }
  render () {
    return (
    
        <textarea
        rows="3"
          className='form-control profile-input-form'
          onChange={this.addResp}
          placeholder='Intern Responsibilities'
        ></textarea>
     
    )
  }
}

export default Responsibility
