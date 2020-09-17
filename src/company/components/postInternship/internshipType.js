import React from "react"

class InternshipType extends React.Component {
    constructor() {
        super()
        this.state = {
            internshipPlace: "",
            internshipTime: ""
        }
        this.internshipType = this.internshipType.bind(this)
    }
    internshipType(e) {
        e.persist()
        this.setState((prevState) => ({
            [e.target.name]: e.target.value
        }), () => {
            this.props.methodFromParent("internshipPlace", this.state.internshipPlace)
            this.props.methodFromParent("internshipTime", this.state.internshipTime)
        })
    }
    componentDidMount(){
       
    }
    render() {
        return (
            <div className="placeTime container-fluid">
                
                <div className="row mt-2">
                <p className="typeIntern text-center col-12 col-md-2">Place</p>
                    <label style={{fontSize:"20px"}} className="col-12 col-sm-6 col-md-5 label-placetime">
                        <input type="radio" className="" name="internshipPlace" value="Regular" onChange={this.internshipType}/>  
                        Regular(In Office/On Field)
                    </label>
                    <label  style={{fontSize:"20px"}} className="col-12 col-sm-6 col-md-5 label-placetime">
                        <input type="radio" className="" name="internshipPlace" value="Work from home" onChange={this.internshipType}/>  
                        Work from home
                    </label>
                </div>
                <div className="row">    
                    <p className="typeIntern text-center col-12 col-md-2">Time</p>
                    <label  style={{fontSize:"20px"}} className="col-12 col-sm-6 col-md-5 label-placetime">
                        <input type="radio" className="" name="internshipTime" value="Part Time" onChange={this.internshipType}/>  
                        Part Time
                    </label>
                    <label   style={{fontSize:"20px"}} className="col-12 col-sm-6 col-md-5 label-placetime">
                        <input type="radio" className="" name="internshipTime" value="Full Time" onChange={this.internshipType}/>  
                        Full Time
                    </label>
                </div>
            </div>
        )
    }
}

export default InternshipType