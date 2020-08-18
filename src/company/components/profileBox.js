import React from "react"
import "../css/profileBox.css"

class ProfileBox extends React.Component {
    constructor() {
        super()
        this.state = {
            name : "Sushant Divjikar",
            email : "info@samsung.in"
        }
    }

    render() {
        return (
            <div className="profileBox col-3" style={{"display": this.props.show ? "block" : "none",marginTop:"200px" }}>
                <p className="name">{this.state.name}</p>
                <p className="email">{this.state.email}</p>
                <hr/>
                <a href="#">Settings</a>
                <hr/>
                <a href="#">Contact Us</a>
                <hr/>
                <a href="#">About Us</a>
                <hr/>
                <a href="#">Log Out</a>
            </div>
        )
    }
}

export default ProfileBox