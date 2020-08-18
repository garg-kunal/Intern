import React from "react"

class City extends React.Component {
    constructor() {
        super()
        this.state = {
            city: ""
        }
        this.addAnotherCity = this.addAnotherCity.bind(this)
        this.removeCity = this.removeCity.bind(this)
    }
    addAnotherCity(e) {
        if(e.keyCode == 13) {
            var cityField = document.getElementsByName("city")[0].value
            this.setState((prevState) => ({ 
                city: [ ...prevState.city, cityField]
            }), () => {
                this.props.methodFromParent("city", this.state.city)
            })
            document.getElementsByName("city")[0].value = ""   
        }
    }
    removeCity(e) {
        var recentCities = this.state.city
        var i = 0
        for(const c of recentCities){
            if(c === e.target.value) {
                break
            }
            i = i + 1
        }
        recentCities.splice(i,1)
        this.setState((prevState) => ({
            city: recentCities
        }),() => {
            this.props.methodFromParent("city", this.state.city)
        })
    }
    render() {
        return (
            <div className="container">
                <input type="text" value={this.state.city}  className="city" placeholder="e.g. Bangalore"
                 onChange={(e)=>{this.setState({city:e.target.value})}}/>
                {/* <div className="added">
                {   
                    this.state.city.map((information) => {
                        return (
                            <div className="addedRecently">
                                <span className="">{information}</span>
                                <button type="button" value={information} onClick={this.removeCity} className="deleteBtn">X</button>
                            </div>
                        );
                    })
                }
                </div> */}
            </div>
        )
    }
}

export default City