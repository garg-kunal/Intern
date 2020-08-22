import React from "react"

class Responsibility extends React.Component {
    constructor() {
        super()
        this.state = {
            responsibility: ""
        }
        this.addResp = this.addResp.bind(this)
    }
    addResp(e) {
        e.persist()
        this.setState((prevState) => ({
            responsibility: e.target.value
        }), () => {
            this.props.methodFromParent("responsibility", this.state.responsibility)
        })
    }
    render() {
        return (
            <textarea  className="form-control profile-input-form"  cols="5" rows="3" onChange={this.addResp} placeholder="Enter Text..." />
       
       )
    }
}

export default Responsibility