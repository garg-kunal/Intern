import React from "react"

class Stipend extends React.Component {
    constructor() {
        super()
        this.state = {
            stipend: "",
            currency: "",
            amount: "",
            payDuration: ""
        }
        this.stipendType = this.stipendType.bind(this)
    }
    stipendType(e) {
        e.persist()
        this.setState((prevState) => ({
            [e.target.name]: e.target.value
        }), () => {
            this.props.methodFromParent("stipend", this.state.stipend)
            this.props.methodFromParent("currency", this.state.currency)
            this.props.methodFromParent("amount", this.state.amount)
            this.props.methodFromParent("payDuration", this.state.payDuration)
        })
    }
    render() {
        var payment = ""
        if(this.state.stipend == "Paid") {
            payment = <div className="pay hide row">
                        <div className="col-2 pl-1 pr-1">
                            <select name="currency" id="currency" onChange={this.stipendType}>
                                <option value="$">$</option>
                                <option value="Rs.">Rs.</option>
                            </select>
                        </div>
                        <div className="col-6 pl-1 pr-1">
                            <input type="number" className="amount" name="amount" placeholder="e.g. 5000" onChange={this.stipendType}/>
                        </div>
                        <div className="col-4 pl-1 pr-1">
                            <select name="payDuration" id="per"  onChange={this.stipendType}>
                                <option value="/month">/month</option>
                                <option value="/day">/day</option>
                                <option value="/week">/week</option>
                                <option value="/year">/year</option>
                            </select>
                        </div>
                    </div>
        }
                        
        return (
            <div className="stipendType container-fluid">
                <div className="availableProfiles stipend">
                    <label className="col-12 col-sm-6">
                        <input type="radio" className=""  style={{height:"15px"}} name="stipend" value="Paid" onChange={this.stipendType}/>  
                        Paid
                    </label>
                    <label className="col-12 col-sm-6">
                        <input type="radio" className=""  style={{height:"15px"}} name="stipend" value="Performance Based" onChange={this.stipendType}/>  
                        Performance Based
                    </label>
                    <label className="col-12 col-sm-6">
                        <input type="radio" className=""  style={{height:"15px"}} name="stipend" value="Unpaid" onChange={this.stipendType}/>  
                        Unpaid
                    </label>
                    <label className="col-12 col-sm-6">
                        <input type="radio" className=""  style={{height:"15px"}} name="stipend" value="Negotiable" onChange={this.stipendType}/>  
                        Negotiable
                    </label>
                </div>            
                {payment}
            </div>
        )
    }
}

export default Stipend;