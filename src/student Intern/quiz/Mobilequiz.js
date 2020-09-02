import React from 'react';

import laptop from '../assets/images/nerd.png';


export default class MobileQuiz extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: "0" }}>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4A00E0" }}>
                    <a className="navbar-brand" href="/test_skills">
                        <strong style={{ color: "white", paddingLeft: "20px", fontSize: "23px", fontFamily: "'Spartan', sans-serif" }}>Merge.</strong>
                    </a>
                </nav>
                <div className="text-center mt-5 mx-auto">
                    <img src={laptop} alt="mobile_view_not present_for_quiz"
                        style={{ height: "380px", width: "380px" }}
                        className="text-center img-fluid mx-auto" />
                    <h6 className="text-center">Test is not Supported on Mobile Version<br />Please go to Desktop/Laptop</h6>
                </div>
            </div>
        )
    }
}