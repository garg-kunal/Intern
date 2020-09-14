import React, { useState } from 'react';
import logo from "../../assets/images/Merge.-1.png";
import MenuIcon from '@material-ui/icons/Menu';
import axios from '../../setup';
export default class OuterNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }


    componentDidMount() {
        this.pass();
    }

    pass() {
        const headers = {
            headers: {
                'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.get("/api/accounts/student/check_skills", headers)
            .then((res) => {
               
                if (res.data.status === 200)
                    this.setState({
                        show:true
                    })
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (

            <nav className="navbar pt-2 navbar-expand-lg navbar-outer-student " style={{ background: "#4a00e0" }}>
                <img src={logo} className="img-fluid merge-logo-all-student" />
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

                    <MenuIcon style={{ color: "white" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto outer-navbar-skill-links">
                        <li>
                            {this.state.show ? <button onClick={() => { this.props.history.push('/student/dashboard') }} className="btn dashboard-btn" >Dashboard</button> : null
                            }
                        </li>
                        <li>
                        <button className="btn" style={{ background: "transparent", color: "white" }} onClick={() => {
                            if (window.confirm("Are you sure")) {
                                localStorage.removeItem("merge_jwt");
                                window.location.href = "/login/student";
                            }
                        }}>
                            Logout
                            </button>
                        </li>


                    </ul>
                    {/* <span className="navbar-text">
                       
                    </span> */}
                </div>
            </nav >
        )
    }
}
