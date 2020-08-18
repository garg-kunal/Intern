import React from 'react';
import insta from './assets/Path 369.png';
import youtube1 from './assets/youtube.png';
import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
export default function Footer() {
    return (
        <div className="container-fluid card-main-footer" style={{ backgroundColor: "lightgrey" }}>
            <div className="row">
                <div className="col-md-8 col-lg-8" style={{ color: "black" }}>
                    <br/><br/>
                    <h2 style={{marginLeft:"30px",color: "black"}}>Reach out to us:</h2>
                        <img src={twitter} alt="" className="img online-logo-footer  mx-auto img-fluid" />
                        <img src={linkedin} alt="" className="img online-logo-footer  img-fluid mx-auto" />
                        <img src={youtube1} alt="" className="img online-logo-footer    img-fluid mx-auto" />
                        <img src={insta} alt="" className="img online-logo-footer   img-fluid mx-auto" />
                </div>
                <div className="col-md-4 col-lg-4" style={{ color: "black" }}>
                    <br/><br/>
                    <h2  style={{ color: "black" }} >Resources:</h2>
                    <br />
                    <h5>Contact US</h5>
                    <h5>Terms & Conditions</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Security</h5>
                    <h5>FAQs</h5>

                </div>
            </div>
        </div>
    )
}