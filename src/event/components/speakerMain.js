import React from 'react';
import Speakers from './speaker';
import Schedulespeaker from './scheduleSpeaker';
export default function Speaker() {
    return (
        <div className="container-fluid">
            <h3 className="event-speaker-heading-main text-center">Speakers</h3>

            <br />
            <Speakers />
            <h4 className="event-speaker-heading-main text-center">Schedule</h4><br />
            <div>
                <h4 className="event-speaker-heading-main">01 Sepetember,2020</h4>
                <hr className="schedule-hr text-center mx-auto" />
                <Schedulespeaker />
            </div>
            
            <div>

                <h4 className="event-speaker-heading-main event-speaker-heading-main-2">02 Sepetember,2020</h4>
                <hr className="schedule-hr text-center mx-auto" />
                <Schedulespeaker />
            </div>


        </div>
    )
}