import React from "react"
import "../css/companyDashBoard.css"
import arrow from "../assets/titleArrow.png"
import more from "../assets/more.png"
import glassHour from "../assets/glassHour.png"
import eye from "../assets/eye (5).png"
import copy from "../assets/copy.png";
import Axios from '../../setup';
import { Link,NavLink } from 'react-router-dom'
class DashboardTitle extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-3 pl-0 pr-0 titleCol">
                    <p>Profile
                    <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} /></p>
                </div>
                <div className="col-2 col-sm-3 pl-0 pr-0 titleCol">
                    <p>Status
                    <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} /></p>
                </div>
                <div className="col-2 pl-0 pr-0 titleCol">
                    <p>View Applicants
                    <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} /></p>
                </div>

                <div className="col-2 col-sm-2 pl-0 pr-0 titleCol">
                    <p>Action
                    <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} /></p>
                </div>
                <div className="col-2 col-sm-2 pl-0 pr-0 titleCol">
                    <p>Action
                    <img src={arrow} alt="" className="downArrow" style={{ height: "30px", width: "30px" }} /></p>
                </div>
            </div>
        )
    }
}

class CompanyDashBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            results: [],
            pageNo: 1,
        }
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }

    componentDidMount() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt_c"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        Axios.get('/api/accounts/company/view_all_internships', headers)
            .then((res) => {
                this.setState({
                    results: res.data.data
                })
                console.log(this.state.results)
            })
            .catch((err) => console.log(err));

    }
    nextPage() {
        if (this.state.pageNo * 5 < this.state.results.length) {
            this.setState({
                pageNo: this.state.pageNo + 1
            })
        }
    }
    prevPage() {
        if (this.state.pageNo > 1) {
            this.setState({
                pageNo: this.state.pageNo - 1
            })
        }
    }
    showMenu(e) {
        var menu = e.target.id[e.target.id.length - 1]

        var show = document.getElementsByClassName("actions" + menu)[0].style.display
        var acts = document.getElementsByClassName("actions")
        for (const cls of acts) {
            cls.style.display = "none"
        }
        if (show == "block")
            document.getElementsByClassName("actions" + menu)[0].style.display = "none"
        else
            document.getElementsByClassName("actions" + menu)[0].style.display = "block"
    }
    chooseColor(i) {
        if (i === "N") {
            return "rgba(0,200,255,0.2)"
        } else if (i === "R") {
            return "rgb(255,99,71)"
        } else if (i === "A") {
            return "rgb(152,251,152)"
        }
    }
    render() {
        const Applications = this.state.results.map((item, key) => {
            if (((key - (this.state.pageNo - 1) * 5) >= 0) && ((key - (this.state.pageNo - 1) * 5) < 5)) {
                return (
                    <div className="row">
                        <div className="col-3 pl-0 pr-0 rowCol">
                            <p>{item.profile}</p>
                        </div>
                        <div className="col-2 col-sm-3 pl-0 pr-0 rowCol">
                            <p className="status" style={{ backgroundColor: this.chooseColor(item.status) }}>{item.status}</p>
                            <img src={(item.status === "N") ? glassHour : null} alt="" style={{ height: "30px", width: "30px" }} className="downArrow" />
                        </div>
                        <div className="col-2 pl-0 pr-0 rowCol">
                            <NavLink 
                            to={{
                                pathname:"/company/applications",
                                id:{
                                    key:item.id
                                }
                            }}
                             style={{color:"#4A00E0"}}>
                                <p>{item.applicants}</p>
                            </NavLink>

                        </div>
                        <div className="col-2 col-sm-2 pl-0 pr-0 rowCol">
                            <Link style={{ color: "blue" }}
                                to={{
                                    pathname: "/company/view_internship",
                                    id: {
                                        key: item.id
                                    }
                                }}>View Internship</Link>

                        </div>
                        <div className="col-2 col-sm-2 pl-0 pr-0 rowCol">

                            <Link style={{ color: "blue" }}
                                to={{
                                    pathname: "/company/edit_intern",
                                    id: {
                                        key: item.id
                                    }
                                }}

                            >Edit Internship</Link>


                        </div>


                        <hr />
                    </div >

                );
            } else {
                return null
            }
        });
        return (
            <div className="container-fluid text-center">
                <h2 className="heading">Dashboard</h2>
                <div className="container  board">
                    <DashboardTitle />
                    <hr />
                    {Applications}
                </div>
                <br/>
                <div className="container row  nextPage">
                    <button type="button" className="left text-center" onClick={this.prevPage}> {"<"} </button>
                    <span className="currentPage text-center">{this.state.pageNo}</span>
                    <button type="button" className="right text-center" onClick={this.nextPage}> {">"} </button>
                </div>
            </div>
        )
    }
}

export default CompanyDashBoard;