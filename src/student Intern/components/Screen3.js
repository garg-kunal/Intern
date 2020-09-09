import React from "react";
import logo from "../../assets/images/Merge..png";
import checkImg from "../../assets/images/Group 2881.png";
import '../../assets/css/Screen4.css';
import { NavLink } from "react-router-dom";

class Screen3 extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

            this.props.history.push('/login/student');
        }
        else {
        }
    }
    render(props) {
        return (
            <div className="container-fluid main-score">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="grid">
                    <div className="one">
                        <img src={checkImg} className="img-fluid" style={{ height: "80px", width: "80px" }} />
                    </div>
                    <div className="two">
                        <p className="submitted">Congratulations !!!</p>
                        <p>You've scored {this.props.value}/300. Keep it up.</p>
                    </div>
                    <div className="three three1">
                        <NavLink to="/test_skills">Proceed</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen3;