import React from "react";
import logo from "../../assets/images/Merge..png";
import checkImg from "../../assets/images/Group 2881.png";
import '../../assets/css/Screen4.css';
import { NavLink } from "react-router-dom";
import Axios from "../../setup";
import close from '../../assets/images/close.png';
import tick from '../../assets/images/tick.png';

class Screen3 extends React.Component {
    constructor() {
        super();
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        if (localStorage.getItem("merge_jwt") === null || localStorage.getItem("merge_jwt") === undefined) {

            this.props.history.push('/login/student');
        }
        else {
            const headers = {
                headers: {
                    'Authorization': "Token " + localStorage.getItem("merge_jwt"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            const data = {
                data: "key"
            }
            // Axios.post('/api/accounts/assessment', data, headers)
            //     .then((res) => {
            //         this.setState({
            //             result: res.data.result
            //         })
            //     })
            //     .catch((err) => console.log(err));
            console.log(this.props.location.score);
            this.setState({
                result:this.props.location.score
            })
        }
    }
    render(props) {
        return (
            <div className="container-fluid main-score">
                <div className="container box-result">
                    <div className="one text-center">
                        <h4 className="result-heading">Scorecard</h4>
                    </div>
                    <br/><br/>
                    <div className="container">
                            <p className="row">
                                <div className="col-md-4 col-4 text-left">
                                    <ul className="ul-test">Skill</ul>
                                </div>
                                <div className="col-md-4 col-4 text-center">
                                  <ul className="ul-test">Status</ul>
                                </div>
                                <div className="col-md-4 col-4 text-right">
                                    <ul className="ul-test">Score</ul>
                                </div>
                            </p>
                            {/* <p>You've scored {this.props.value}/300. Keep it up.</p> */}
                        </div>
                    {this.state.result.map((item, key) =>
                        <div className="container">
                            <p className="submitted row">
                                <div className="col-md-4 col-4 text-left">
                                    {item.skill}
                                </div>
                                <div className="col-md-4 col-4 text-center">
                                    {item.status === 'Fail'?<img src={close} alt="fail" className="img-fluid text-center test-status-img"/>:<img src={tick} alt="pass" className="img-fluid text-center test-status-img"/> }
                                </div>
                                <div className="col-md-4 col-4 text-right">
                                    {item.score}
                                </div>


                            </p>
                            {/* <p>You've scored {this.props.value}/300. Keep it up.</p> */}
                        </div>
                    )}

                    <div className="three three1">
                        <NavLink to="/nav/test_skills">Test Skills</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen3;