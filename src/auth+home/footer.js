import React from 'react';
import insta from './assets/Path 369.png';
import youtube1 from './assets/youtube.png';
import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
export default function Footer() {
    return (
        <div className="container-fluid card-main-footer">
            <div className="row mt-4 pb-4">
                <div className="col-md-8 col-lg-8" style={{ color: "black" }}>
                    <br /><br />
                    <p className="home-main-footer-right-side">
                        <p className="home-footer-logo-heading">Reach out to us:</p>

                        <i class="fa fa-youtube" aria-hidden="true" style={{ fontSize: "48px", marginLeft: "25px" }}></i>
                        <i class="fa fa-facebook" aria-hidden="true" style={{ fontSize: "48px", marginLeft: "30px" }}></i>
                        <i class="fa fa-twitter" aria-hidden="true" style={{ fontSize: "48px", marginLeft: "30px" }}></i>
                        <i class="fa fa-instagram" aria-hidden="true" style={{ fontSize: "48px", marginLeft: "30px" }}></i>

                    </p>
                </div>
                <div className="col-md-4 col-lg-4">
                    <br /><br />
                    <p>
                        <p className="home-footer-main-heading" >Resources:</p>
                        <h5 className="home-footer-main">Contact Us</h5>
                        <h5 className="home-footer-main">Terms & Conditions</h5>
                        <h5 className="home-footer-main">Privacy Policy</h5>
                        <h5 className="home-footer-main">Security</h5>
                        <h5 className="home-footer-main">FAQs</h5>
                    </p>

                </div>
            </div>
        </div>
    )
}