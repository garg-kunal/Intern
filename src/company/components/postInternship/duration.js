import React from "react"

class Duration extends React.Component {
    constructor() {
        super()
        this.state = {
            days: "",
        }
    }

    render() {
        return (
            <div className="duration">
                <input type="text"
                    value={this.state.days}
                    style={{ padding: "7px" }} className="form-control col-lg-12 col-md-12" placeholder="e.g.1 month || 2 Weeks " onChange={(e) => { this.setState({ days: e.target.value }) }} />
            </div>
        )
    }
}

export default Duration