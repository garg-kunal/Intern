import React, { useState } from 'react';
import logo from "../../assets/images/Merge.-1.png";
import { useEffect } from 'react';
import axios from '../../setup';

import { NavLink } from 'react-router-dom';
export default function Skillset() {

    const [frontend, setfrontend] = useState([]);
    const [backend, setbackend] = useState([]);
    const [fullstack, setfullstack] = useState([]);
    const [ui, setui] = useState([]);

    useEffect(() => {
        load();
    }, [])
    const load =async  () => {

        if (localStorage.getItem("merge_jwt")) {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
           await  axios.get('/api/accounts/student/tested_skills', headers)
                .then((res) => {

                    if (res.data.status === 200) {
                        // console.log(res.data)
                        setfrontend(res.data.frontend);
                        setbackend(res.data.backend);
                        setfullstack(res.data.frontend);
                        setui(res.data.ui);
                    }
                    else {
                        alert("Please Login Again");
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
            
            <br />
            <div className="container-fluid card-skill-student-main">
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
                <br/>
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
                        <NavLink
                            className="navlink-skill"
                            to={{
                                pathname: '/nav/test_skills',
                                id: {
                                    skill: ui,
                                    name: "UI/UX"
                                }
                            }}>
                            <div className="card text-center card-skill-student-min">
                                UI/UX
                         </div>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>

    )
}