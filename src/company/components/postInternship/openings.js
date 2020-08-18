import React from "react"

class Openings extends React.Component {
    constructor() {
        super()
        this.state = {
            openings: ""
        }
        this.openings = this.openings.bind(this)
    }
    openings(e) {
        e.persist()
        this.setState((prevState) => ({
            [e.target.name]: e.target.value
        }), () => {
            this.props.methodFromParent("openings", this.state.openings)
        })
    }
    render() {
        return (
            <input type="number" name="openings" className="city" placeholder="e.g. 20" onChange={this.openings} />
        )
    }
}

export default Openings