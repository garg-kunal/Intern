import React from "react"

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
        profile: "none",
            other: ""
        }
    }

   
    render() {
        return (
            <div className="container-fluid profileContainer">
                <div className="row availableProfiles">
                </div>
               
            </div>
        )
    }
}

export default Profile