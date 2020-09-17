import React from 'react';
import Merge from '../../assets/images/Merge..png';
export default function Navbar() {
    return (

        <nav className="mb-1 navbar navbar-expand-lg navbar-light navbar-event">
            <a className="navbar-brand" href="#">
                <img src={Merge} className="img-fluid merge-logo-all-student  event-navbar-img" />
            </a>
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon event-toogler"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item nav-item-event">
                        <a className="nav-link nav-item-event" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item nav-item-event">
                        <a className="nav-link nav-item-event" href="#register">
                           Register
                        </a>
                    </li>
                    <li className="nav-item nav-item-event">
                        <a className="nav-link nav-item-event" href="#">
                            Speakers
                        </a>
                    </li>
                    <li className="nav-item nav-item-event">
                        <a className="nav-link nav-item-event" href="#">
                            FAQs
                        </a>
                    </li>



                </ul>
            </div>
        </nav>

    )
}