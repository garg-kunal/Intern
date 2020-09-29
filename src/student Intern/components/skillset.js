import React, { useState } from 'react';
import logo from "../../assets/images/Merge.-1.png";
import { useEffect } from 'react';
import axios from '../../setup';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import { NavLink } from 'react-router-dom';
export default function Skillset() {

    const [frontend, setfrontend] = useState([]);
    const [backend, setbackend] = useState([]);
    const [fullstack, setfullstack] = useState([]);
    const [ui, setui] = useState([]);
    const [data, setData] = useState(false);

    useEffect(() => {
        load();
    }, [])
    const load = async () => {

        if (localStorage.getItem("merge_jwt")) {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            await axios.get('/api/accounts/student/tested_skills', headers)
                .then((res) => {

                    if (res.data.status === 200) {
                        console.log(res)
                        setData(true);
                        setfrontend(res.data.frontend);
                        setbackend(res.data.backend);
                        setfullstack(res.data.frontend);
                        setui(res.data.ui);
                    }
                    else {
                        alert("Please Login Again");
                        localStorage.removeItem("merge_jwt");
                        window.location.href = "/login/student";
                    }

                })
                .catch((err) => console.log(err));

        }
        else {
            window.location.href = "/login/student";
        }

    }

    return (
        <div className="container-fluid" style={{ padding: "0" }}>
            {data ?
                <div className="container-fluid card-skill-student-main">

                    <h4 className="text-center">Select your Skill-Set for Internship</h4><br />
                    <div className="row">
                        <div className="col-md-6 card-skill-student col-6 ">
                            <NavLink
                                className="navlink-skill"
                                to={{
                                    pathname: '/nav/test_skills',
                                    id: {
                                        skill: frontend,
                                        name: "Frontend"
                                    }
                                }}>

                                <div className="card  text-center card-skill-student-min">
                                    Front end
                         </div>

                            </NavLink>
                        </div>
                        <div className="col-md-6 card-skill-student col-6">
                            <NavLink
                                className="navlink-skill"
                                to={{
                                    pathname: '/nav/test_skills',
                                    id: {
                                        skill: backend,
                                        name: "Backend"
                                    }
                                }}>
                                <div className="card text-center card-skill-student-min">
                                    Back end
                         </div>
                            </NavLink>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6 card-skill-student col-6">
                            <NavLink
                                className="navlink-skill"
                                to={{
                                    pathname: '/nav/test_skills',
                                    id: {
                                        skill: frontend.concat(backend),
                                        name: "Full Stack"
                                    }
                                }}>
                                <div className="card text-center card-skill-student-min">
                                    Full Stack
                         </div>
                            </NavLink>
                        </div>
                        <div className="col-md-6 card-skill-student col-6">
                            {/* <NavLink
                            className="navlink-skill"
                            to='/student/internships'> */}
                            <div className="card text-center card-skill-student-min" onClick={() => {
                                alert("You can now apply for this skill-set directly.");
                                window.location.href = "/student/internships"
                            }}>
                                UI/UX
                         </div>
                            {/* </NavLink> */}
                        </div>
                    </div>

                </div>
                : <div className="text-center mt-5">
                    <Loader
                        type="Audio"
                        color="#737373"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                </div>
            }
        </div>

    )
}