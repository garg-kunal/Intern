import React from "react"

class StartDate extends React.Component {
    constructor() {
        super()
        this.state = {
            startDate: "",
            exactDate: ""
        }
        this.startDate = this.startDate.bind(this)
    }
    startDate(e) {
        e.persist()
        if(e.target.name === "startDate") {
            if(e.target.value === "Later") 
                document.getElementsByClassName("selectDate")[0].style.display = "block"
            else 
                document.getElementsByClassName("selectDate")[0].style.display = "none"
        }
        this.setState((prevState) => ({
            [e.target.name]: e.target.value
        }), () => {
            this.props.methodFromParent("startDate", this.state.startDate)
            this.props.methodFromParent("exactDate", this.state.exactDate)
        })
    }
    render() {
        return (
            <div className="startDate container-fluid">
                <label className="">
                    <input type="radio" className="" name="startDate" value="Immediately" onChange={this.startDate}/>  
                    Immediately ( Within 20 Days )
                </label>
                <label className="">
                    <input type="radio" className="" name="startDate" value="Later" onChange={this.startDate}/>  
                    Later
                </label>
                <input type="date" style={{"display": "none"}} className="selectDate" name="exactDate" onChange={this.startDate}/>
            </div>
        )
    }
}

export default StartDate