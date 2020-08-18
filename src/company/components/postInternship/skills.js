import React from "react"

class Skills extends React.Component {
    constructor() {
        super()
        this.state = {
            skills: [false, false, false],
            otherSkills: []
        }
        this.addAnotherSkill = this.addAnotherSkill.bind(this)
        this.removeSkill = this.removeSkill.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    addAnotherSkill(e) {
        e.persist()
        if(e.keyCode == 13) {
            var skillField = document.getElementsByName("otherSkills")[0].value
            this.setState((prevState) => ({ 
                otherSkills: [ ...prevState.otherSkills, skillField]
            }), () => {
                this.props.methodFromParent("otherSkills", this.state.otherSkills)
            })
            document.getElementsByName("otherSkills")[0].value = ""   
        }
    }
    removeSkill(e) {
        var recentSkills = this.state.otherSkills
        var i = 0
        for(const c of recentSkills){
            if(c === e.target.value) {
                break
            }
            i = i + 1
        }
        recentSkills.splice(i,1)
        this.setState((prevState) => ({
            otherSkills: recentSkills
        }), () => {
            this.props.methodFromParent("otherSkills", this.state.otherSkills)
        })
    }
    changeColor(e){
        e.persist()
        var element = e.target.parentNode;
        if(element.style.backgroundColor === "rgb(74, 0, 224)") {
            element.style.backgroundColor = "#9F9F9F";
        } else {
            element.style.backgroundColor = "rgb(74, 0, 224)";
        }
        var skillNo = e.target.name[e.target.name.length - 1] - 1
        var skillArray = this.state.skills
        skillArray[skillNo] = !skillArray[skillNo]
        this.setState((prevState) => ({
            skills: skillArray
        }), () => {
            this.props.methodFromParent("skills", this.state.skills)
        })
    }
    render() {
        var info = [
            {id: 1, field: "Front End Development", option1: "HTML", option2: "CSS", option3: "jQuery"},
            {id: 2, field: "Back End Development", option1: "Python", option2: "Node", option3: "PHP"},
            {id: 3, field: "Database", option1: "MySQL", option2: "MongoDB", option3: "FireStore"},
            {id: 4,field: "Server", option1: "AWS", option2: "GCP", option3: "Azure"}
        ];
        const rows = info.map((information) => {
            if(information.field === this.props.domain)
            return (
                <div className="field">
                    <label className="checkLabel"><input type="checkbox" className="check" name={information.id+"field1"} onChange={this.changeColor} value={information.option1}/>{information.option1}</label>
                    <label className="checkLabel"><input type="checkbox" className="check" name={information.id+"field2"} onChange={this.changeColor} value={information.option2}/>{information.option2}</label>
                    <label className="checkLabel"><input type="checkbox" className="check" name={information.id+"field3"} onChange={this.changeColor} value={information.option3}/>{information.option3}</label>
                </div>
            );
        });
        return (
            <div className="cityDiv container-fluid profileContainer">
                <div className="">
                    {rows}
                    <span className="fieldName">Others :</span>
                    <input type="text" name="otherSkills" className="otherFields" placeholder="Add Hardware, Software, etc."/>
                    
                </div>
            </div>
        )
    }
}

export default Skills