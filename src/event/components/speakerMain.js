import React from 'react';
import Speakers from './speaker';
import Schedulespeaker from './scheduleSpeaker';
export default function Speaker() {
    return (
        <div className="container-fluid">
            <h3 className="event-speaker-heading-main">Speakers</h3>

            <br />
            <Speakers />
            {/* <img src={il} className="img-fluid event-speaker-il" align="right" /> */}
            <h4 className="event-speaker-heading-main">Schedule</h4><br />
            <div>
                <h4 className="event-speaker-heading-main">01 Sepetember,2020</h4>
                <hr className="schedule-hr text-center mx-auto" />
                <Schedulespeaker />
            </div>
            
            <div>

                <h4 className="event-speaker-heading-main">02 Sepetember,2020</h4>
                <hr className="schedule-hr text-center mx-auto" />
                <Schedulespeaker />
            </div>


        </div>
    )
}