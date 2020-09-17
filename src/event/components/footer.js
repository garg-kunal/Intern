import React from 'react';


export default function Footer() {
    return (
        <section className="footer container-fluid">
            <br /><br />
            <div className="row mx-auto">
                <p className="event-footer-text text-center mx-auto">Follow Us</p>
            </div>
            <div className="row">
                <p className="mx-auto text-center footer-event-text-sub">Let's get connected so that we can reach out to each other via a simple notification.<br/>
                Join our <a target="_blank" href="https://linktr.ee/mergeintern" style={{color:"#4a00e0",textDecoration:"underline"}}>COMMUNITY</a> for the updates and news.</p>
            </div>

        </section>
    )
}