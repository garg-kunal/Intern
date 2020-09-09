import React from 'react';
import Error404 from '../../assets/images/404.png';
import WOW from 'wowjs'

export default class Errorpage extends React.Component {


    componentDidMount() {

        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="container-fluid" style={{padding:"0"}}>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4A00E0" }}>
                    <a className="navbar-brand" href="/">
                        <strong style={{ color: "white", paddingLeft: "20px", fontSize: "25px", fontFamily: "'Spartan', sans-serif" }}>Merge.</strong>
                    </a>
                </nav>
                <div className="mb-5 text-center mx-auto" style={{ marginTop: "80px" }}>
                    <img src={Error404}
                        data-wow-iteration="100" data-wow-duration="4s"
                        alt="Error 404" style={{ height: "400px", width: "400px" }}
                        className="img-fluid wow bounce"></img>
                </div>
            </div>
        )
    }
}